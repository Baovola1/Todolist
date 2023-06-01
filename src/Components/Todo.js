import React from 'react';
import {useDispatch } from 'react-redux';
import './Todo.css';
import {check} from '../reducers/lists';
import { useNavigate } from 'react-router-dom';

function Todo (props)  {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleDetail= ()=>{
       navigate(`/todos/${props.index}`)
    }
    
    return (
        <>
        <div className='container'>
            <p className={props.todo.done ? "par" : null}>{props.todo.title}</p>
            <input type='checkbox' checked={props.todo.done} 
            onChange={(e)=> dispatch(check({value:e.target.checked, index:props.index}))}/>   
            <button className="todoButton" type="submit" onClick ={() => handleDetail()} >Detail</button>
        
        </div>
        </>
    );
};

export default Todo;