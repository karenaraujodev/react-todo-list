import './App.css'
import Header from './header'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import Footer from './Footer'
import {useState} from 'react'


function App() {
  const [tarefas, setTarefas] = useState([])
  function adicionarTarefa(novaTarefa) {
  setTarefas([...tarefas, novaTarefa])
}
  return (
    <>
      <Header />
      <main>
        <TaskForm adicionarTarefa={adicionarTarefa} />
        <TaskList />
      </main>
      <Footer />
    </>
      

  )
}

export default App