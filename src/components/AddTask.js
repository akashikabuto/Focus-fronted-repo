import React from 'react';
//
import { FaEllipsisV } from "react-icons/fa";


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

    </div>
  );
}

export default AddTask;