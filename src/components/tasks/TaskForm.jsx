import { useState } from "react";
export default function TaskForm({addTask}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    function handleSubmit(){ 
        event.preventDefault()
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
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Nome</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Nome da Tarefa"/>

            <label htmlFor="description">Descrição</label>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição da Tarefa"/>

            <label htmlFor="priority"></label>
            <select value={priority} onChange={e => setPriority(e.target.value)}>
                <option value="baixa">Baixa</option>
                <option value="alta">Alta</option>
            </select>

            <button type="submit">Adicionar Tarefa</button>
        </form>
    )
}