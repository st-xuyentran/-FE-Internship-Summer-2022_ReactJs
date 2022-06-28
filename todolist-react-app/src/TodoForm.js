import React, {useState} from "react";
import { setLocalStorage } from "./commont";
import { getLocalStorage } from "./commont";
import './TodoForm.css';
function TodoForm() {
 const [input, setInput] = useState('')
 const [inputs, setInputs] = useState(() =>{
  const storageInput = getLocalStorage('todolist')|| [];
  return storageInput
 })
  const handleSubmit = () => {
   if (input) {
     //
     setInputs(prev => {
       const newInput = [...prev, input]
       setLocalStorage('todolist',newInput)
      return newInput
      })
   }
   setInput('');
 }
 const handleDelete = (index) => {
  // setInputs(listPrev => {
  //   const
  // })
 }

 return(
   <div className="form-todo">
     <input value={input} placeholder='Enter your todo' onChange={e => setInput(e.target.value)}></input>
     <button onClick={handleSubmit} className="btn btn-add">Add</button>
     <ul className="form-list">
       {inputs.map((input, index) => (
         <li key={index}>
           <span>{input}</span>
           <button onClick={handleDelete} className="btn btn-delete">X</button>
           </li>
       ))}
     </ul>
   </div>
 )
}
export default TodoForm;