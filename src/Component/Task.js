import React from 'react';
import {FaTimes} from 'react-icons/fa';

function Task({task, onDelete, toggle}) {
  return (
    <div
      className={`task${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => toggle (task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          className="faTimes"
          style={{color: 'red', cursor: 'pointer'}}
          onClick={() => onDelete (task.id)}
        />
      </h3>

      <p>{task.day}</p>
    </div>
  );
}

export default Task;
