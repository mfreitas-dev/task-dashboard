import { useMemo, useState } from 'react'
import useTask from './hooks/useTask'
import TaskForm from './components/tasks/TaskForm'
import TaskList from './components/tasks/TaskList'
import TaskFilters from './components/tasks/TaskFilters'
import TaskStats from './components/tasks/TaskStats'
import { ThemeContext } from './hooks/useThemeContext'

function App() {
  const {tasks, addTask, removeTask, completeTask, updateTask} = useTask();
  const [filter, setFilter] = useState("");
  const [islight, setTheme] = useState(true);
  const Themevalue = useMemo(() => 
    ({ islight, setTheme })
  , [islight]);

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
    <ThemeContext.Provider value={Themevalue}>
      <body className={`${(islight) ? "" : "dark"}`}>
        <div className={`app ${(islight) ? "" : "dark"}`}>
          <div className="header">
            <h1>Task Dashboard</h1>

            <button type="button" className='theme-button' onClick={() => setTheme(!islight)}>
              {(islight === true) ? "Mudar para tema escuro" : "Mudar para tema claro"}
            </button>
          </div>

          <TaskForm addTask={addTask}/>

          <TaskFilters filter={filter} setFilter={setFilter}/>

          <TaskStats tasks={tasks}/>
          
          <TaskList tasks={filteredTasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask}/>
        </div>
      </body>
    </ThemeContext.Provider>
  )
}

export default App