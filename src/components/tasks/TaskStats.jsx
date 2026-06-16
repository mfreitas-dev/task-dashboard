import { useMemo } from "react";

export default function TaskStats({tasks}){
    const quantidadeconcluidas = (tasks || []).filter(task => task.completed).length;
    const quantidadependentes =  (tasks || []).filter(task => !task.completed).length;

    const maiorprio = useMemo(() => {
        const quantidadealtaprio = (tasks || []).filter((task) => task.priority === "alta").length;
        const quantidadebaixaprio = (tasks || []).filter((task) => task.priority === "baixa").length;
        return ((tasks || []).length === 0) ? "Sem dados" : 
                            (quantidadealtaprio === quantidadebaixaprio) 
                            ? "Empate" : (quantidadealtaprio > quantidadebaixaprio) 
                            ? "Alta prioridade" : "Baixa prioridade";
    }, [tasks])
    
    return (
        <div className="stats">
        <div className="stat-card">
            <h3>Total de tarefas</h3>
            <p>{(tasks || []).length}</p>
        </div>

        <div className="stat-card">
            <h3>Concluídas</h3>
            <p>{quantidadeconcluidas}</p>
        </div>

        <div className="stat-card">
            <h3>Pendentes</h3>
            <p>{quantidadependentes}</p>
        </div>

        <div className="stat-card">
            <h3>Maior categoria</h3>
            <p>{maiorprio}</p>
        </div>
    </div>
    )
}