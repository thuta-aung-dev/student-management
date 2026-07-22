import {useState} from 'react'
import { useEffect } from 'react';
/*function Welcomemessage(props){
    return (
        <div style={{ border: '1px solid gold',padding:"10px",marginTop:'20px'}}>
            <h3>မဂ်လာပါ {props.name} ရေ.... </h3>
            <h3> မင်းရဲ့ အသက်က {props.age} ဖြစ်နေပီပေါ့</h3>
        </div>
    )
}
function Playground() {
 const [count ,setcount ] = useState(0)
 const [ text,setText ] = useState("")

 return (
    <div style = {{ padding:'20px',textAlign : 'center',background:'#222', color:'white', minheight:'100vh'}}>
        <h1>ငါ့ရဲ့ playground 🧪</h1>
        <h2>ဂဏန်း : {count} </h2>
        <button onClick={() => setcount (count + 1)}> ပေါင်းမယ်</button>
        <button onClick={() => setcount (0)}>reset</button>

        <hr style={{ margin : '40px 0',borderColor: '#444'}}/>

        <h2>တစ်ခုခုရေးပါ</h2>
        <input type="text" 
        placeholder='write something!'
        value={text} 
        onChange={(e)=> setText(e.target.value)}
        style={{ padding:'10px', borderRadius: '5px', border: 'none', width: '250px'}}/>
        <p style={{ marginTop: '20px', fontSize: '1.2rem', color: '#646cff' }}>
        မင်းရိုက်ထားတာက: <br/>
        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{text}</span>
        </p>
        <hr style={{ margin:'40px 0',borderColor:'#453'}}/>
            <Welcomemessage name = {text} age ={count}/>
            
        
    </div>
  
 )
}*/
function Playground(){
    const[animes , setAnime]  = useState([
        {id:1 , title:'Vinland Saga', genre:'Action/Scilence Of Life'},
        {id:2 , title:'Code Geasses', genre:'Action/Strategy'},
        {id:3 , title:'JoJo Bazzer Avenger',genre:'Action/Avenger'}
    ]);

    useEffect(()=>{
        document.title=`Animes (${animes.length})`;
        console.log("Anime စာရင်းပြောင်းလို့ Title ပြောင်းပီ!")
    },[animes]);

    const [showlist,setShowlist]= useState(true);
return (
    <div style={{ padding:'20px', background:'#222', color:'white', minHeight:'100vh'}}>
        <h1>My Anime List 📺</h1>
        

        <button onClick={()=> setShowlist(!showlist)} 
            style={{ marginBottom : '20px' , padding:'10px', cursor:'pointer' , borderRadius:'20px'}}>
                {showlist?"list ကိုဖျောက်ပါ" : "list ကိုပြပါ"}
            </button>

            

            {showlist && (
        <div style={{ textAlign:'left', maxWidth:'400px' , margin:'0 auto'}}>
            {
                animes.map((anime)=> (
                    <div key={anime.id} style={{
                        border:'1px solid #444',padding:'10px',margin:'10px 0',borderRadius:'8px',background:'#333'
                    }}>
                        <h3 style={{margin:'0', color:'#646cff'}}>{anime.title}</h3>
                        <p style={{margin:'5px 0 0', fontSize:'0.9rem'}}>Genre:{anime.genre}</p>
                    </div>
                ))
            }
        </div>)}
        {animes.length==0?<p>animes မရှိသေးပါ</p>:<p>animes {animes.length}ရှိသည်</p>}
    </div>
)
}
export default Playground