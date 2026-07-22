import { useState } from "react";

function TodoList({user}){

    const [todo,setTodo] = useState([
        {id:1,test:"PS assignment",priority:"High",isCompleted:false},
        {id:2,test:"React Hook and loading",priority:"High",isCompleted:true},
    ]);

    const [isEditing,setIsEditing] = useState(false);
    const [currentTodo,setCurrentTodo] = useState({id:null,test:'',priority:'Medium',isCompleted:false});

    const [filterStatus, setFilterStatus] = useState("All");

    const isAdmin = user?.role?.toLowerCase() === "admin";

    const handleAdd=()=>{
        if(!isAdmin)return;
        setCurrentTodo({id:null,test:'',priority:'Medium',isCompleted:false});
        setIsEditing(true);
    }

    const handleSave=()=>{
        if(!isAdmin)return;
        if(!currentTodo.test){
            alert("Please Fill all Info!");
            return;
        }

        if(currentTodo.id === null){
            const newTodo = {
                id:Date.now(),
                ...currentTodo
            };
            setTodo([...todo,newTodo]);
        }else {
            setTodo(todo.map(t=> t.id === currentTodo.id? currentTodo : t))
        }
        setIsEditing(false);
    };

    const handleEdit=(todo)=>{
        if(!isAdmin)return;
        setCurrentTodo(todo);
        setIsEditing(true);
    }

    const handleDelete=(id)=>{
        if(!isAdmin)return;
        if(window.confirm("Are U sure to remove this list?")){
            setTodo(todo.filter(t=> t.id !== id))
        }
    };

    const toggleComplete=(id)=>{
        setTodo(todo.map(t=>t.id === id? {...t,isCompleted:!t.isCompleted}:t));
    }

    const filterTodo = todo.filter(todo => {
        if(filterStatus === "Pending")return !todo.isCompleted;
        if(filterStatus === "Completed")return todo.isCompleted;
        return true;    
    });
    
    const getPriorityColor = (priority) => {
        if(priority === "High")return "#f44336";
        if(priority === "Medium")return "#ff9800";
        return "#4CAF50";
    }

    return(
        <div className="max-w-xl max-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm mt-20 text-gray-800">
            <div>
                <h2 className="text-xl font-bold mb-4 text-center text-red-500">Task Planner and Todo List </h2>

                {/*Input Form */}
                {isEditing && isAdmin && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-md border border-gray-200 space-y-3">
                        <h3>{currentTodo.id? "Edit Task" : "New Task"}</h3>
                        <input type="text" placeholder="What need to be done?" value={currentTodo.test} onChange={(e)=>{setCurrentTodo({...currentTodo,test:e.target.value})}}/>

                        <select value={currentTodo.priority} onChange={(e)=>{setCurrentTodo({...currentTodo,priority:e.target.value})}}>
                            <option value="High">High Priority</option>
                            <option value="Medium">Medium Priority</option>
                            <option value="Low">Low Priority</option>
                        </select>
                        <br />
                        <button onClick={handleSave} className="px-4 py-1.5 bg-black text-white text-sm rounded">save</button>
                        <button onClick={()=>setIsEditing(false)} className="px-4 py-1.5 bg-gray-200 text-sm rounded">Cancel</button>
                    </div>
                )}

                {/*Add & filter Controls*/}
                <div >
                    {isAdmin && (
                        <button onClick={handleAdd} className="text-sm font-medium underline hover:text-gray-600"> + Add New Task </button>
                    )}

                    {/*Filter Tap */}
                    <div className="flex justify-between item-center mb-4">
                        <div className="flex gap-2 text-sm">
                        {["All","Pending","Completed"].map(status=>(
                            <button key={status} onClick={()=>setFilterStatus(status)} 
                            className={`pb-1 ${filterStatus === status?"font-bold border-b-2 border-black":"text-gray-400"}`}>{status}</button>
                        ))}
                    </div>
                    </div>

                    {/*Todo Table*/}
                        <ul className="divide-y divide-gray-100">
                            {filterTodo.map((todo)=>(
                                <li key={todo.id} className="py-3 flex items-center justify-between text-sm">
                                    {/* Checkbok status */}
                                    <div>
                                        <input type="checkbox" checked={todo.isCompleted} onChange={()=>toggleComplete(todo.id)} className="w-4 h-4 cursor-pointer"/>
                                   
                                        {/* task name  */}
                                        <span className={todo.isCompleted?"line-through text-gray-400":""}>
                                            {todo.test}
                                        </span>

                                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${todo.priority === "High" ? "bg-red-50" : todo.priority === "Medium" ? "bg-orange-50 text-orange-600" : "bg-green-50 text-green-600"}`}>
                                            {todo.priority}
                                        </span>
                                    
                                    </div>

                                    {isAdmin && (
                                        <div className="flex gap-3 text-xs text-gray-500">
                                            <button onClick={() => handleEdit(todo)} disabled={todo.isCompleted} className="hover:text-black disabled:opacity-30">Update</button>
                                            <button onClick={() => handleDelete(todo.id) } className="hover:text-red-600" >Delete</button>
                                        </div>
                                    )}
                                </li>  
                            ))}
                            
                            {filterTodo.length === 0 && (
                        <li className="py-4 text-center text-sm text-gray-400 italic">No tasks found!</li>
                    )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TodoList;