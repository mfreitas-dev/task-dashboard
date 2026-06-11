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
        <div>
            <p>Total de tarefas: {(tasks || []).length}</p>
            <p>Total de tarefas concluídas: {quantidadeconcluidas}</p>
            <p>Total de tarefas pendentes: {quantidadependentes}</p>
            <p>Categoria com maior quantidade de tarefas: {maiorprio}</p>
        </div>
    )
}