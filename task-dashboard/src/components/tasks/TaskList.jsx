import TaskCard from "./Taskcard";

export default function TaskList({tasks, completeTask, removeTask}){
    return (
        <div>
            {tasks.map((task) => <TaskCard task={task} key={task.id} removeTask={removeTask} completeTask={completeTask}/>)}
        </div>
    )
}