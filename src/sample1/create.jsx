import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create(){
    const [title,setTitle] = useState('');
    const [body,setbody] = useState('');
    const [isPending,setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const newPost={title,body,userId:1};
        setIsPending(true);

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'Post',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newPost)
        })
        .then((res)=>{
            if(!res.ok){
                throw Error('Post tin ma ya par!');
            }
            return res.json();
        })
        .then((data)=>{
            console.log('Server ka nay lar tal New Data:',data);
            isPending(false);
            alert("Post create successfully");
            navigate('/posts');
        })
        .catch((err)=>{
            console.log(err.message);
            setIsPending(false)
        });
    }
    return(
        <div style={{ padding: '20px', background: '#222', minHeight: '100vh', color: 'white' }}>
            <h2 style={{ color: '#646cff' }}>Add a new Post</h2>
            <form action="" onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="" style={{ display: 'block', marginBottom: '5px' }}>
                        <input type="text" 
                        required value={title}
                        onChange={(e)=>setTitle(e.target.value)} 
                        style={{width:'100%',padding:'8px',background:'#333',color:"white",border:'1px solid #555',borderRadius:'4px'}}/>
                    </label>
                </div>
                <div style={{marginBottom:'15px'}}>
                    <label htmlFor="" style={{ display: 'block', marginBottom: '5px' }}>Post Body:</label>
                    <textarea name="" id="" required rows="5" value={body}
                    onChange={(e)=>setbody(e.target.value)}
                    style={{width: '100%', padding: '8px', background: '#333', color: 'white', border: '1px solid #555', borderRadius: '4px'}}></textarea>
                </div>
                <button 
                    disabled={isPending}
                    style={{
                        background: '#646cff', color: 'white', border: 'none', padding: '10px 15px', 
                        cursor: isPending ? 'not-allowed' : 'pointer', borderRadius: '5px', fontWeight: 'bold'
                    }}
                >
                    {isPending ? 'Posting...' : 'Add Post'}
                </button>
            </form>
        </div>
    )
}export default Create;