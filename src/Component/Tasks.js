import Task from "./Task"

function Tasks({tasks , onDelete , toggle}) {
    return (
        <div>
            {tasks.map((task)=><Task key={task.id} task={task} onDelete={onDelete} toggle={toggle}/>)}
        </div>
    )
}

export default Tasks
