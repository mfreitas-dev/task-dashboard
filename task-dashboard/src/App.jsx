import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import useTask from './hooks/useTask'
import TaskForm from './components/tasks/TaskForm'
import TaskList from './components/tasks/TaskList'

function App() {
  const [count, setCount] = useState(0);
  const {tasks,addTask,removeTask,updateTask,completeTask} = useTask();


  return (
    <div>
      <TaskForm addTask={addTask}/>

      <TaskList tasks={tasks} completeTask={completeTask} removeTask={removeTask}/>
    </div>
  )
}

export default App
