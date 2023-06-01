import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './Detail.css';


function Detail () {
  const {todoId} = useParams();
  
  const todo = useSelector((state)=>state.lists.value[todoId]);  
  
  const navigate = useNavigate();
  
  const handleBack = () => {
  navigate(`/todos`)
  }
  
    return (
        <div className='detail'>
          <h1>Task details</h1>
          <p>{todo.title}</p>
          <p>{todo.description}</p>
          <button className="detail-btn" onClick={()=> handleBack()}>Back</button>
        </div>
    );
};

export default Detail;