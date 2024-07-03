"use client"

import { useEffect,useState } from "react";

export default function Todo(){


   const [todo, setTodo] = useState({})
   
  
   useEffect(() => {
    const response = fetch ("https://jsonplaceholder.typicode.com/todos/1"); 
    
    setTodo(response);

   }, [])
  
  

    
    return(
        <div>
            <h1>
               {todo.title}
            </h1>
        </div>
    )
}



