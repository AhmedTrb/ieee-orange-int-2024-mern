import React from 'react'

const taskItem = (task = {task}) => {
  return (
    <div>
        <input type="checkbox" value={task.completed} />
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
        <button>Delete</button>
    </div>
  )
}

export default taskItem