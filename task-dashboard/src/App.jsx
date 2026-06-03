import { useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import useTask from './hooks/useTask'
import TaskForm from './components/tasks/TaskForm'
import TaskList from './components/tasks/TaskList'
import TaskFilters from './components/tasks/TaskFilters'

function App() {
  const {tasks,addTask,removeTask,updateTask,completeTask} = useTask();
  const [filter, setFilter] = useState("");

  const filteredTasks = useMemo(() => {
    if(filter === "pendentes"){
      return tasks.filter(task => task.completed === false);
    } else if(filter === "concluidas"){
      return tasks.filter(task => task.completed === true);
    } else if(filter === "altaprioridade"){
      return tasks
        .filter(task => task.completed === false)
        .filter(task => task.priority === "alta");
    } else if(filter === "baixaprioridade"){
      return tasks
        .filter(task => task.completed === false)
        .filter(task => task.priority === "baixa");
    } else {
      return tasks
    }
  }, [tasks, filter])


  return (
    <div>
      <TaskForm addTask={addTask}/>

      <TaskFilters filter={filter} setFilter={setFilter}/>

      <TaskList tasks={filteredTasks} completeTask={completeTask} removeTask={removeTask}/>
    </div>
  )
}

export default App
