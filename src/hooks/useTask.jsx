import { useReducer } from "react";

export default useTask;

function useTask(){
    const estadoInicial = {
        tasks: [
            // {id, title, description, priority, completed}
        ]
    };

    function reducer(estado, acao){
        switch(acao.type){
            case "ADD_TASK": return{
                ...estado, tasks: [...estado.tasks, acao.payload]
            }
            case "REMOVE_TASK": return{
                ...estado, tasks: estado.tasks.filter(task => task.id !== acao.payload)
            }
            case "UPDATE_TASK": return{
                ...estado, tasks: estado.tasks.map(task => {
                    if(task.id === acao.payload.id){
                        return acao.payload
                    } else {
                        return task
                    }
            })}
            case "COMPLETE_TASK": return{
                ...estado, tasks: estado.tasks.map((task) => {
                    if(task.id === acao.payload){
                        return {
                            ...task,
                            completed: true
                        }
                    } else {
                        return task
                    }
                })
            }
            default:
                return estado;
        }
    };

    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    function addTask(task){
        dispatch({type: "ADD_TASK", payload: {
            ...task,
            id: Date.now(),
            completed: false
        }})
    }
    function removeTask(id){
        dispatch({ type: "REMOVE_TASK", payload: id })
    }
    function updateTask(task){
        dispatch({type: "UPDATE_TASK", payload: task})
    }
    function completeTask(id){
        dispatch({ type: "COMPLETE_TASK", payload: id })
    }

    return {tasks: estado.tasks,addTask,removeTask,updateTask,completeTask}
}