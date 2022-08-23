import React, { useState } from 'react'
import nextId from "react-id-generator";
import { FaRedoAlt } from 'react-icons/fa';

const ToDoForms = ({todo,setTodo}) => {
    const [input,setInput] = useState('');


    // Id Generator
    let htmlId = nextId();

    // Check Input
    const handleChange = (e) =>{
        setInput(e.target.value);
        e.preventDefault();
    }
   
    // Prevent And Submit Input
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTodo([...todo,{id:htmlId,name:input,completed:false}])
        setInput('');
    }

    

  return (
    <div className='max-w-md mx-auto cover form ' data-aos="fade-down" data-aos-duration="3000">
        <form className='mx-2 flex gap-3 justify-between form p-10  ' onSubmit={handleSubmit}>
            <input className='outline-none' onChange={handleChange} value={input} placeholder="Add New Task" type="text" />
            <button className='text-white font-bold submit px-4 py-2 ' disabled={input == ""} type='submit'>ADD</button>
        </form>
    </div>
  )
}

export default ToDoForms