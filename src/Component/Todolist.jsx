import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit, AiFillCheckCircle } from 'react-icons/ai';



export default function Todolist ({ todo , setTodo , setEditTodo}) {
    console.log("todo:", todo);

 const handleComplete = (selectedTodo)=>{
    setTodo(
        todo.map((item)=>{
            if(item.id === selectedTodo.id){
                return {...item, completed : !item.completed}
            }
            return item ;
        })
    );
 } ;  


  const handleEdit = ({ id }) => {
    const findTodo = todo.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };


const handleDelete = ({id})=>{
    setTodo(todo.filter((todo)=>todo.id !==id))
}

  return (
    <div>

        {todo.map((todo) =>(
<li className="list-item" key={todo.id}>
<input
                    type="text"
                    value={todo.title}
                    className={`list ${todo.completed ? "complete" : ""}`}
                    onChange={(e)=>e.preventDefault()}
                    />
                    <div>
                    <button className='button-complete task-button' onClick={()=>handleComplete(todo)}>
                        <i>
                            <AiFillCheckCircle className="icons"/>
                        </i>
                    </button>
                    <button className='button-edit task-button' onClick={()=>handleEdit(todo)}>
                        <i> 
                            <AiFillEdit className="icons"/>
                        </i>
                    </button>
                    <button className='button-delete task-button' onClick={()=>handleDelete(todo)}>
                     <i>
                     <FaTrash className="icons"/>
                     </i>
                      
                    </button>  
                    </div>
</li>
            ))
        }

        {/* { todos.map(todo =>( 
                <li className='list-item' key={todo.id}>
                    <input
                    type='text'
                    value={todo.title}
                    className={`list ${todo.completed ? "complete" : ""}`}
                    onChange={(e)=>e.preventDefault()}
                    />
                 <div>
                    <button className='button-complete task-button' onClick={()=>handleComplete(todo)}>
                        <i className='fa fa-check-circle'></i>
                    </button>
                    <button className='button-edit task-button' onClick={()=>handleEdit(todo)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-delete task-button' onClick={()=>handleDelete(todo)}>
                        <i className='fa fa-trash'></i>
                    </button>
                 </div>


                </li>
            ))
        } */}
    </div>
  )
}
