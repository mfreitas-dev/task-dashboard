import TaskCard from "./Taskcard";

export default function TaskList({tasks, completeTask}){
    return (
        <div>
            {tasks.map((task) => <TaskCard task={task} key={task.id} completeTask={completeTask}/>)}
        </div>
    )
}