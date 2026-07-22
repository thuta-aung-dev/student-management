import { useState } from "react";
import { useEffect } from "react";

function useFetch(url){
    const [data,setData]=useState(null);
    const [loading, setloading]= useState(true);
    const [error, setError]= useState(null);

    useEffect(()=>{
        fetch(url)
         .then(res=>{
            if(!res.ok)
                { throw Error("Data can't be handle!");}
                    return res.json();
         })
         .then(data=>{
            setData(data);
            setloading(false);
            setError(null);
         })
         .catch(err=>{
            setError(err.message);
            setloading(false);
         })
    },[url]);

    return {data,loading,error};          //           အပြင်ကိုပြန်ထုတ်ပေးမယ့်အရာတွေ
}
export default useFetch;