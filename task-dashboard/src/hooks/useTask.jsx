import { useReducer } from "react";

export default {useTask};

function useTask(){
    const estadoInicial = {
        tasks: []
    };

    function reducer(estado, acao){
        switch(acao.type){
            case "ADD_TASK": return{
                ...estado, tasks: [...estado.tasks, acao.payload]
            }
            case "REMOVE_TASK": return{
                tasks: estado.tasks.filter(task => task.id !== acao.payload)
            }
            case "UPDATE_TASK": return{
                tasks: tasks.map(task => {
                    if(task.id === acao.payload.id){
                        return acao.payload
                    }
                })
            }
        }
    }
}