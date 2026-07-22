import { useState,useEffect } from "react";

function Notepad(){

    const [notes,setNotes] = useState([]);
    const [isEditing,setIsEditing] = useState(false);
    const [currentNote,setCurrentNote] = useState({id:null,text:''});

    const handleAddNote=()=>{
        setCurrentNote({id:null,text:''})
        setIsEditing(true);
    }
    
    const handleSave=()=>{
        if(currentNote.text.trim()===(''))return;

        if(currentNote.id === null){
            const newNote = {
                id:Date.now(),
                text:currentNote.text
            };
            setNotes([...notes,newNote]);
        }
        else
            {
                setNotes(notes.map(note=>note.id===currentNote.id?currentNote:note))
            }
            setIsEditing(false);
    }

    const handleEdit=(note)=>{
        setCurrentNote(note);
        setIsEditing(true);
    }

     const handleDelete=(id)=>{
        setNotes(notes.filter(note=>note.id!==id))
    }


    return(
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-white border border-slate-100 rounded-2xl shadow-xs text-slate-800">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">My NotePad</h2>
                <p className="text-xs text-slate-400 mt-0.5">Capture your thoughts cleanly</p>
            </div>
            
            {!isEditing?(
                <div>
                    <div>
                        <button type="submit" onClick={handleAddNote}className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-all shadow-xs cursor-pointer">Add Note +</button>
                    </div>
                        <div>
                            {notes.length === 0?(
                                <div>
                                    No notes avalible. Click "New Note" to begin.
                                </div>)
                                :
                                    (
                                        <div>
                                            <div className="grid grid-col-1 md:grid-cols-2 gap-4">

                                                {notes.map((note) =>(

                                                        <div key={note.id} className="p-5 bg-slate-50/60 border border-slate-100 rounded-xl flex flex-col justify-between hover:bg-slate-50 transation-all group">
                                                                <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line break-words mb-4">{note.text}</div>

                                                                    <div>
                                                                        <button onClick={()=>{handleEdit(note)}} className="px-2.5 py-1 text-xs text-slate-500 hover:text-slate-900 hover:bg-white rounded-md transation-all cursor-pointer">Edit</button>
                                                                        <button onClick={()=>{handleDelete(note.id)}}className="px-2.5 py-1 text-xs text-red-500 hover:bg-red-50 rounded-md transation-all cursor-pointer">Delete</button>
                                                                    </div>
                                                         </div>
                                                ))}
                                            </div>
                                        </div>
                            )}
                        </div>
                </div>
            ):(
                <div className="mb-8 p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-4 animate-fade-in">
                    <h3 className="text-sm font-semibold text-slate-900">{currentNote.id?"Edit Note":"New Note"}</h3>
                    <textarea name="" id=""
                    rows="6"
                    placeholder="Write Note"
                    value={currentNote.text}
                    onChange={(e)=>setCurrentNote({...currentNote, text:e.target.value})} className="w-full p-4 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden forcus:border-slate-400 focus:bg-white text-slate-800 leading-relaxed transition-all resize-none"/>
                    <div className="flex justify-end space-x-2 pt-2">
                        <button onClick={handleSave} className="px-3 py-1.5 text-xs bg-slate-500 font-medium text-slate-300 hover:text-slate-200 hover:bg-slate-900 rounded-lg transation-all cursor-pointer">Ok</button>
                        <button onClick={()=>setIsEditing(false)}className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 rounded-lg transation-all cursor-pointer">Cancel</button>
                    </div>
                </div>
            )}
        </div>
        
    )
}
export default Notepad;