import { useEffect,useState } from "react";
import useFetch from "./useFetch";
import { useParams,useNavigate } from "react-router-dom";

function Edit(){

    const { id } = useParams();
    const navigate = useNavigate();

    const {data:post,loading,error} = useFetch('https://jsonplaceholder.typicode.com/posts/'+id);

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [isPending,setIsPending] = useState(false);

    useEffect(()=>{
        if(post){
            setTitle(post.title);
            setBody(post.body);
        }
    },[post]);

    const handleUpdate = (e) =>{
        e.preventDefault();
        const updatePost = {title,body ,userId:1};
        setIsPending(true);
    

    fetch('https://jsonplaceholder.typicode.com/posts/'+id,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(updatePost)

    })
    .then((res)=>{
        if (!res.ok) {
            throw Error('post cant be edit');            
        }
        return res.json();
    })
    .then((data)=>{
        console.log('Server ကနေပြင်ပြီးကျတဲ့ data:',data);
        setIsPending(false);
        alert("Post Upadated Successfully!");
        navigate('/posts/'+id);
    })
    .catch((err)=>{
        console.log(err.message);
        setIsPending(false);
    });

    }
return (
        <div style={{ padding: '20px', background: '#222', minHeight: '100vh', color: 'white' }}>
            <h2 style={{ color: '#646cff' }}>Edit Post ID: {id} ✏️</h2>
            
            {loading && <p>Loading original post data...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {post && (
                <form onSubmit={handleUpdate} style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Post Title:</label>
                        <input 
                            type="text" 
                            required 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ width: '100%', padding: '8px', background: '#333', color: 'white', border: '1px solid #555', borderRadius: '4px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Post Body:</label>
                        <textarea 
                            required
                            rows="5"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            style={{ width: '100%', padding: '8px', background: '#333', color: 'white', border: '1px solid #555', borderRadius: '4px' }}
                        ></textarea>
                    </div>

                    <button 
                        disabled={isPending}
                        style={{
                            background: '#4caf50', color: 'white', border: 'none', padding: '10px 15px', 
                            cursor: isPending ? 'not-allowed' : 'pointer', borderRadius: '5px', fontWeight: 'bold'
                        }}
                    >
                        {isPending ? 'Updating...' : 'Update Post'}
                    </button>
                </form>
            )}
        </div>
    );
}
export default Edit;