import React, { useState } from 'react'
import { FaCheckCircle,FaTrash } from 'react-icons/fa';
const ToDo = ({todo,setTodo}) => {

    // Check Task Function
    const checkTask = (check) =>{
        setTodo(todo.map((item)=>{
            if(item.id === check.id){
                return {...item, completed: !check.completed}
            }
            return item;
        }))  
        console.log(todo)
    }

    // Delete Function
    const delTask = ({id}) =>{
        setTodo(todo.filter((el) => el.id !== id));
        console.log(todo)
    }
    const [input,setInput] = useState(''); 

    //  Capture Input Function
      const handleChange = (e) =>{
       setInput(e.target.value);
       console.log(input)
    }
    // Update 
    const handleSubmit = (check) =>{
        setTodo(todo.map((item)=>{
            if(item.id === check.id){
                return {...item, name: input}
            }
            return item;
        }))  
        console.log(todo)
    }
  return (
    
    <div className=' overflow-hidden max-w-md mx-auto cover '>
        {todo.map(e => (
        <div className='p-3  flex justify-between todo ' data-aos="fade-down" data-aos-duration="1000" key={e.id}>
            <input className={`outline-none p-2 text-white " ${e.completed ? "line-through italic" : ''}`} placeholder={e.name} onChange ={handleChange}  maxLength="18"/>
            <button className='text-white hover:text-green-400  ease-in-out' onClick={()=> checkTask(e)} ><FaCheckCircle size={24} /></button>
            <button className='text-white hover:text-red-400 ease-in-out  ' onClick={()=>delTask(e)} ><FaTrash size={24} /></button>
            <button className='text-white update' onClick={()=>handleSubmit(e)}  disabled={input === ""}  >Update</button>
        </div>
          
        ))}         
    </div>
  )
}

export default ToDo