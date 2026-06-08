export default function TaskCard({task, completeTask}){
    return (
        <div>
            <p>Nome da tarefa: {task.title}</p>
            <p>Descrição: {task.description}</p>
            <p>Prioridade: {task.priority}</p>
            <button onClick={() => completeTask(task.id)} disabled={task.completed}>Concluir tarefa</button>
            <button onClick={() => removeTask(task.id)}>Excluir tarefa</button>
        </div>
    )
}