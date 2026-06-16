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
    <div
        className={`task-card ${
            task.priority === "alta"
                ? "priority-high"
                : "priority-low"
        }`}
    >
        {editing ? (
            <>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <select
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                >
                    <option value="baixa">Baixa</option>
                    <option value="alta">Alta</option>
                </select>
            </>
        ) : (
            <>
                <h3>{task.title}</h3>

                <p>{task.description}</p>

                <small>
                    Prioridade: {task.priority}
                </small>
            </>
        )}

        <div className="task-actions">
            {!editing && (
                <button onClick={() => setEditing(true)} className="edit-btn">
                    Editar
                </button>
            )}

            {editing && (
                <button onClick={handleSubmit}>
                    Salvar
                </button>
            )}

            {!editing && (
                <button
                    className="complete-btn"
                    onClick={() => completeTask(task.id)}
                    disabled={task.completed}
                >
                    Concluir
                </button>
            )}

            <button
                className="delete-btn"
                onClick={() => removeTask(task.id)}
            >
                Excluir
            </button>
        </div>
    </div>
)
}