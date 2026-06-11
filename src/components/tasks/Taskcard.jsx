import { useState } from "react";

export default function TaskCard({task, completeTask, updateTask, removeTask}){
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [priority, setPriority] = useState(task.priority);

    function handleSubmit(){ 
        if(title === ""){ return }

        updateTask({
            id: task.id,
            title: title,
            description: description,
            priority: priority,
            completed: task.completed
        });

        setEditing(false);
    }
    return (
        <div>
            {(editing) 
                ? <input  type="text" value={title} 
                        onChange={e => setTitle(e.target.value)} 
                        placeholder={title} /> 
                : <p>Nome da tarefa: {task.title}</p>}
            
            {(editing) 
                ? <input  type="text" value={description} 
                        onChange={e => setDescription(e.target.value)} 
                        placeholder={description} /> 
                : <p>Descrição da tarefa: {task.description}</p>}

            {(editing) 
                ?   <select value={priority} onChange={e => setPriority(e.target.value)}>
                        <option value="baixa">Baixa</option>
                        <option value="alta">Alta</option>
                    </select>
                : <p>Prioridade: {task.priority}</p>}

            {(editing === false) && <button onClick={() => setEditing(true)}>Editar</button>}
            {(editing) && <button onClick={handleSubmit}>Concluir edição</button>}
            
            {(editing === false) && 
            <button onClick={() => completeTask(task.id)} disabled={task.completed}>
                Concluir tarefa
            </button>}

            <button onClick={() => removeTask(task.id)}>Excluir tarefa</button>
        </div>
    )
}