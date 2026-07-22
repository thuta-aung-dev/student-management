import useFetch from "./useFetch";
import { Link } from "react-router-dom";

function Posts() {
    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    return (
        <div style={{ padding: '20px', background: '#222', color: "white" }}>
            <h2>New Feed 📰</h2>
            {loading && <p>Loading posts...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {posts && posts.map(post => (
                <div key={post.id} style={{ borderBottom: '1px solid #444', padding: '10px 0' }}>
                    <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
                        <h3 style={{ color: '#646cff', cursor: 'pointer' }}>{post.title}</h3>
                    </Link>
                    <p>{post.body.substring(0, 50)}...</p>
                </div>
            ))}
        </div>
    );
}

export default Posts;