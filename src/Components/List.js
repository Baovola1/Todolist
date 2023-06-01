import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import {addTodo} from '../reducers/lists';
import './List.css';



function List () {
    
    const[title, setTitle] = useState('');
    const[description,setDescription] = useState('');

    const dispatch = useDispatch('');
    const list = useSelector((state)=>state.lists.value);

    const handleAdd =(e)=>{
       e.preventDefault();
       dispatch(addTodo({title:title,description:description}));
       setTitle('');
       setDescription('');
    }
   

    return (
        <>
        <div className='Container'>
           
            <form className="todoForm" onSubmit={(e)=> e.preventDefault()}>
            <input className="todoInput" type='text' placeholder='Enter your Todo..' 
             onChange={(e)=> setTitle(e.target.value)} value={title}/>
            
            <textarea className="description" type="text" placeholder="Your description..." id="description" onChange={(e) => setDescription(e.target.value)} value={description} />
         <div>
            <button className="todoButton" type="submit" rows={4} cols={30} onClick ={(e) => handleAdd(e)} >Add List</button>
         </div>
             </form>
         {list.map((todo,index)=>({...todo,index})).reverse().sort((a,b)=>a.done - b.done).map(todo=>{
            return(<Todo todo = {todo} index={todo.index}/>)
         })}
         </div>
        
        </>
    );
};

export default List;