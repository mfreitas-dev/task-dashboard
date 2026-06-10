import TaskCard from "./Taskcard";

export default function TaskList({tasks, completeTask, removeTask, updateTask}){
    return (
        <div>
            {tasks.map((task) => 
                <TaskCard 
                task={task} 
                key={task.id} 
                removeTask={removeTask} 
                completeTask={completeTask}
                updateTask={updateTask}
                />)}
        </div>
    )
}