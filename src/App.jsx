import React, { useEffect, useState } from "react";
import Header from "./Component/header";
import "./App.css"
import Todolist from "./Component/Todolist";
import Form from "./Component/form";

export default function App() {


// const initialState = `JSON.parse(localStorage.getItem("todo")) || []`;
const [input,setInput] = useState("");
const [todo,setTodo] = useState([]);
const [editTodo,setEditTodo] = useState(null);

useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo))
},[todo])


    return (
        <>

            <div className="container">

                <div className="app-wrapper">
                    <div>
                        <Header />
                    </div>
                    <div>
                        <Form 
                        input={input}
                        setInput={setInput}
                        todo={todo}
                        setTodo={setTodo} 
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                        />
                    </div>
<div>
    <Todolist todo={todo} setTodo={setTodo} setEditTodo={setEditTodo} />
</div>

                </div>

            </div>




        </>
    )
}














// import React, { useState } from 'react';
// import {AiOutlineDelete , AiOutlineEdit }from 'react-icons/ai'
// import './App.css';

// const App = () => {
//   const [todo, setTodo] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [editingId, setEditingId] = useState(null);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const addTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodo([
//         ...todo,
//         {
//           id: new Date().getTime(),
//           text: inputValue,
//         },
//       ]);
//       setInputValue('');
//     }
//   };

//   const deleteTodo = (id) => {
//     setTodo(todo.filter((todo) => todo.id !== id));
//   };

//   const editTodo = (id, newText) => {
//     setTodo(
//       todo.map((todo) =>
//         todo.id === id ? { ...todo, text: newText } : todo
//       )
//     );
//     setEditingId(null);
//   };

//   return (
//     <div className="app">
//       <h1>ToDo App</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Add a new task..."
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul className="todo-list">
//         {todo.map((todo) => (
//           <li key={todo.id} className="todo-item">
//             {editingId === todo.id ? (
//               <input
//                 type="text"
//                 value={todo.text}
//                 onChange={(e) => editTodo(todo.id, e.target.value)}
//                 onBlur={() => setEditingId(null)}
//                 autoFocus
//               />
//             ) : (
//               <>
//                 <span>{todo.text}</span>
//                 <div className="actions">
//                   <button onClick={() => setEditingId(todo.id)}><AiOutlineEdit/></button>
//                   <button onClick={() => deleteTodo(todo.id)}><AiOutlineDelete/></button>
//                 </div>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
