import React,{useState,useEffect} from "react";
import axios from 'axios';


interface Email{
    userId:number,
      id: number,
      title: string
      body:string
}

const useEmails =()=>{
    const [isloading, setLoading]=useState(false);
    const [emails, setEmails]=useState<Email[]>([]);
    const [error, seteError]=useState(null);

    function getProfileImages(){

        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts').then(Response=>{
            setLoading(false)
            setEmails(Response.data)
        console.log(Response.data)
        }).catch(e =>{
            seteError(e)
            setLoading(false)
        })
    }

    useEffect(function(){
        getProfileImages();
    },[])

    return {isloading,emails,error}
}


export default useEmails;