import { useState } from "react";

function Social({user}){

    const currentUsername = user?.name || "Thuta Aung";

    const [post,setPost] = useState([
        {
        id:1,
        accname:currentUsername,
        description:"Exploring the clean aesthetics of minimalist interface designs today. Less is truly more.",
        img:"https://tse2.mm.bing.net/th/id/OIP.wFcvZHb83QkAhPK4RCjUEwHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
    ]);

    const [editing,setEditing] = useState(false);
    const [currentPost,setCurrentPost] = useState({id:null,accname:currentUsername,description:'',img:''});
    const isAdmin = user?.role?.toLowerCase() === "admin";  
    
    const handleAdd=()=>{
        setCurrentPost({id:null,accname:currentUsername,description:'',img:''});
        setEditing(true);
    }

    const handleSave=()=>{
        if(!currentPost.description.trim() ){
            alert("Please Write Something to Post.");
            return;
        }

        if(currentPost.id===null){
            const newPost = {
                id:Date.now(),
                ...currentPost
            };
            setPost([newPost,...post]);
        }
        else{
            setPost(post.map(p => p.id === currentPost.id? currentPost: p))
        }
        setEditing(false)
    };

    const handleDelete=(id)=>{
        if(window.confirm("Are U sure to remove this Post?")){
            setPost(post.filter(p=> p.id !== id));
        }
    }

    const handleEdit=(p)=>{
        setCurrentPost(p);
        setEditing(true);
    }

    return(
        <div>
            <div className="flex justify-between mt-4 ">
                <h2 className="font-semibold text-slate-900 text-xl px-2 py-1">Social App</h2>
                <p className="text-xs text-slate-400  mt-0.5">Post your insane memory!</p>
            </div>
            {!editing && (
                
                <button onClick={handleAdd} className="text-xs bg-slate-600 hover:bg-slate-800 rounded-md font-medium transition-all cursor-pointer shadow-xs text-white px-4 py-2">Create Post</button>
            
            )}
            <div>
                {!editing ? (
                                <div>
                                    <div>
                                        {post.length === 0? (
                                            <div>
                                                <p>No Post avalible. Click "Post" to begin.</p>
                                            </div>
                                                            ) 
                                        :
                                            (
                                                <div className="space-y-6 ">
                                                    {post.map((p)=>(
                                                        <div key={p.id} className="p-5 bg-slate-50/60 border border-slate-100 rounded-xl flex  flex-col space-y-4 hover:bg-slate-50 transition-all group relative bg-white">
                                                            <div className="flex justify-between items-center">
                                                                <div className="flex items-center space-x-3">
                                                                    <div className="w-8 h-8 rounded-full bg-slate-100  flex items-center justify-center text-xs font-semibold text-slate-600">{p.accname? p.accname[0].toUpperCase(): "U"}</div>
                                                                    <span className="text-sm font-semibold text-slate-900">{p.accname}</span>
                                                                    
                                                                </div>
                                                            </div>

                                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity space-x-2 absolute right-5 top-5  pl-2">
                                                                <button onClick={()=>{handleEdit(p)}} className="px-2.5 py-1 text-xs font-medium bg-white hover:bg-slate-100 text-slate-600  rounded-md transition-all cursor-pointer border border-slate-200">Edit</button>
                                                                <button onClick={()=>{handleDelete(p.id)}} className="px-3 py-1 text-xs font-medium bg-white hover:bg-red-50 text-slate-400 rounded-md transition-all cursor-pointer">Delete</button>
                                                            </div>

                                                            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line break-words">{p.description}</p>
                                                            
                                                            {p.img && (
                                                                <div>
                                                                    <img src={p.img} alt="Post attachment"
                                                                    className="w-full h-auto object-cover max-h-72 hover:scale-[1.01] transition-transform duration-300" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )     
                                        }
                                    </div>
                                </div>
                            )
                             :
                            (
                                <div className="space-y-4 animate-fade-in">
                                    <h3 className="font-semibold text-xs text-slate-900">{currentPost.id? "Modify Post" : "New Post"}</h3>
                                    <textarea rows="5" placeholder="Description" value={currentPost.description} onChange={(e)=>setCurrentPost({...currentPost,description:e.target.value})} className="w-full p-4 text-sm bg-slate-50  border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 focus:bg-white text-slate-800 leading-relaxed transition-all resize-none "/>
                                    <input type="text" placeholder="paste image url(Optional)" value={currentPost.img} onChange={(e)=> setCurrentPost({...currentPost,img:e.target.value})} className="w-full px-4 py-2 text-sm bg-slate-200 rounded-xl  focus:outline-none focus:border-slate-400 focus:bg-white text-slate-800 transition-all"/>
                                    <div>
                                        <button onClick={()=>{handleSave()}} className="px-4 py-2 text-xs text-slate-800 hover:text-slate-400 font-medium bg-slate-50 hover:bg-slate-300 rounded-md transition-all cursor-pointer">Ok</button>
                                        <button onClick={()=>setEditing(false)} className="px-4 py-2 text-xs text-slate-700 bg-slate-500 hover:text-slate-400 hover:bg-slate-200 rounded-md font-medium transition-all cursor-pointer shadow-xs">cancel</button>
                                    </div>
                                </div>
                            )

                }
            </div>
            
        </div>
    )
}
export default Social;