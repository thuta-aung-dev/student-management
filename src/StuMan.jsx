import { useState,useEffect } from "react";

function StuMan({user}){

    const [student,setStudent] = useState([
        {id:1,name:"Johan",email:"johan@gmail.com",major:"Political Science"},
        {id:2,name:"Elon",email:"elon@gmail.com",major:"Computer Science"},
    ]);
    const [isEditing,setIsEditing] = useState(false);
    const [currentStu,setCurrentStu] = useState({id:null,name:'',email:'',major:''});

    const isAdmin = user?.role?.toLowerCase() === "admin";

    const handleAdd=()=>{
        if(!isAdmin) return;
        setCurrentStu({id:null,name:'',email:'',major:''});
        setIsEditing(true);
    }

    const handleSave=()=>{
        if(!isAdmin)return;
        if(!currentStu.name || !currentStu.email || !currentStu.major){
            alert("Please Fill all Information!");
            return;
        }

        if(currentStu.id === null){
            const newStu = {
                id:Date.now(),
                ...currentStu
            };
            setStudent([...student,newStu]);
        }
        else 
        {
            setStudent(student.map(s=> s.id === currentStu.id? currentStu:s));
        } 
        setIsEditing(false);
    };

    const handleEdit=(stu)=>{
        if(!isAdmin)return;
        setCurrentStu(stu);
        setIsEditing(true);
    };

    const handleDelete=(id)=>{
        if(!isAdmin)return;
        if(window.confirm("Are U sure to remove this Student?")){
            setStudent(student.filter(s=>s.id!== id));
        }
    }

    return(
        <div className="max-w-xl max-auto mt-8 p-8 bg-white border border-slate-100 rounded-2xl shadow-xs text-slate-800">

            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">Student Directory</h2>
                <p className="text-xs text-slate-400 mt-0.5">Manage and view student registry records</p>
            </div>

            <div>
            {/*Input form*/}
            {isEditing && isAdmin && (
                <div className="mb-8 p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-4 animate-fade-in">
                    <h3 className="text-sm font-semibold text-slate-900">{currentStu.id?"Edit Student":"New Student"}</h3>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <input type="text" placeholder="name" value={currentStu.name} onChange={(e)=>{setCurrentStu({...currentStu,name:e.target.value})}} className="px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-400 text-slate-800"/>
                            <input type="email" placeholder="email" value={currentStu.email} onChange={(e)=>{setCurrentStu({...currentStu,email:e.target.value})}} className="px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-400 text-slate-800"/>
                            <input type="text" placeholder="major" value={currentStu.major} onChange={(e)=>{setCurrentStu({...currentStu,major:e.target.value})}} 
                            className="px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:border-slate-400 text-slate-800"/>
                        </div>
                        <br />
                        <div className="flex justify-end space-x-2 pt-2">
                            <button onClick={handleSave} className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-all cursor-pointer">OK</button>
                            <button onClick={()=>{setIsEditing(false)}}className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 rounded-lg transition-all cursor-pointer">Cancel</button>
                        </div>
                    </div>
    
                    
                </div>
            )}

            {/*Add Button*/}
            {isAdmin && (
                <div>
                    <button onClick={handleAdd} className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-all shadow-xs cursor-pointer">Add Student +</button>
                </div>
            )}

            {/*Student Table*/}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-100 text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                            <th className="pr-2 pb-3 pl-2 font-medium">ID</th>
                            <th className="pb-3 font-medium">Student Name</th>
                            <th className="pb-3 font-medium">Student Email</th>
                            <th className="pb-3 font-medium">Student Major</th>
                            {isAdmin && <th className="pb-3 pr-2 text-right font-medium">Action</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-sm">
                        {student.map((student)=>(
                            <tr key={student.id} className="hover:bg-slate-50/70 transition-all group">
                                <td className="py-3.5 pl-2 text-slate-400 font-mono text-xs">{student.id}</td>
                                <td className="py-3.5 font-medium text-slate-900">{student.name}</td>
                                <td className="py-3.5 font-medium text-slate-500">{student.email}</td>
                                <td className="py-3.5">
                                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                                        {student.major}
                                    </span>
                                </td>

                                {isAdmin && (
                                    <td className="py-3.5 pr-2 text-right space-x-1">
                                        <button onClick={()=>handleEdit(student)}
                                        className="px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 rounded-md transation-all cursor-pointer">Update</button>
                                        <button onClick={()=>handleDelete(student.id)}className="py-1 px-2.5 text-xs text-red-500 hover:bg-red-50 rounded-md transition-all cursor-pointer">Delete</button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            
        </div>
    )
}
export default StuMan;