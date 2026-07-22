import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

function PostDetails(){
    const { id } = useParams();
    const navigate = useNavigate();
    const { data:post,loading,error} = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);

    const handleDelete = () => {
    console.log("Delete button clicked for ID:", id);

    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'DELETE'
    })
    .then((res) => {
        if (!res.ok) {
            throw Error("ပို့စ်ကို ဖျက်လို့ မရပါဘူး။");
        }
        
        console.log("Delete request sent successfully!");
        
        // 🚨 PRO TIP: alert မပြခင် စာမျက်နှာကို အရင် ရွှေ့ပစ်လိုက်ပါ!
        // ဒါဆိုရင် လက်ရှိ Component ထဲမှာ data null ဖြစ်ပြီး Crash ဖို့ အချိန်မရတော့ဘူး
        navigate('/posts'); 
        
        // စာမျက်နှာ ရွှေ့ပြီးမှ အောင်မြင်ကြောင်း alert ပြမယ်
        alert("Post Deleted Successfully! 🎉");
    })
    .catch((err) => {
        console.log("Error logic activated:", err.message);
        alert("ဖျက်လို့မရပါ: " + err.message);
    });
};
    
    
    return(
        <div>
            {loading && <p>loading...please wait</p>}
            {error && <p style={{color:"red"}}>{error} </p>}
            {post && (
                <article>
                    <h2 style={{color:'#646cff'}}>{post.title}</h2>
                    <p style={{fontSize:'1.2rem',lineHeight:'1.6'}}>{post.body}</p>
                    <small>Post ID:{post.id}</small>
            
            <Link to={`/edit/${post.id}`}>
        <button style={{
            background: '#4caf50', color: 'white', border: 'none', padding: '10px 15px', 
            cursor: 'pointer', borderRadius: '5px', fontWeight: 'bold', marginRight: '10px'
        }}>
            Edit Post ✏️
        </button>
    </Link>

                {/*delete button*/}
                <div style={{marginTop:'20px'}}>
                    <button onClick={handleDelete}
                    style={{background: '#ff4d4d', 
                                color: 'white', 
                                border: 'none', 
                                padding: '10px 15px', 
                                cursor: 'pointer',
                                borderRadius: '5px',
                                fontWeight: 'bold'}}>
                        <p>delete post!</p>
                    </button>
                </div>
                </article>
            )}
        </div>
    )
}
export default PostDetails;