import React from 'react';
//
import { FaEllipsisV, FaPlusCircle } from "react-icons/fa";


function AddTask() {
  return (
    <div className='add-task' >
      <p>#1</p>
      <p>Time to focus</p>
      <div className='form-container'>
        <form className='add-task-form'>
          <input placeholder='Task' className='add-task-input' />
          <div className='elipse' >
            <FaEllipsisV color='white' />
          </div>
        </form>
      </div>
      <div className='add-task-button'>
        <FaPlusCircle color='white' />
        <p>Add task</p>
      </div>
    </div>
  );
}

export default AddTask;