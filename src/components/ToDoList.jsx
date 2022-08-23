import React,{useState} from 'react'
import ToDoForms from './ToDoForms.jsx'
import ToDo from './ToDo.jsx'


const ToDoList = () => {

  const [todo,setTodo] = useState([])
  
  return (
    <div className=''>
      <h1 className='text-center mt-40 p-10 main-title text-white  text-4xl md:text-6xl'>ToDo App</h1>
        <ToDoForms todo={todo} setTodo={setTodo}/>
        <ToDo todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default ToDoList