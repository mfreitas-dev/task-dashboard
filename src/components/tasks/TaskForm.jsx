import { useState } from "react";
export default function TaskForm({addTask}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    function handleSubmit(){ 
        if(title === ""){ return }

        addTask({
            title: title,
            description: description,
            priority: priority,
        });

        setTitle("");
        setDescription("");
        setPriority("");
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            {/* <h2>Nova Tarefa</h2> */}

            <div className="form-group">            
                <label htmlFor="title">Nome</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Nome da Tarefa"/>
            </div>

            <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição da Tarefa"/>
            </div>

            <div className="form-group">
                <label htmlFor="priority">Prioridade</label>
                <select value={priority} onChange={e => setPriority(e.target.value)}>
                    <option value="baixa">Baixa</option>
                    <option value="alta">Alta</option>
                </select>
            </div>

            <button type="submit">Criar Tarefa</button>
        </form>
    )
}