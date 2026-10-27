import { useState } from 'react'

import Sidebar from './componentes/Sidebar'
import Header from './componentes/header'
import TaskForm from './componentes/TaskForm'
import TaskList from './componentes/TaskList'

import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(novoTexto) {
    const novaTarefa = {
      id: Date.now(),
      texto: novoTexto,
      concluida: false,
    }

    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      novaTarefa,
    ])
  }

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Header />

        <section className="tasks-section">

          <TaskForm adicionarTarefa={adicionarTarefa} />

          <TaskList tarefas={tarefas} />

        </section>

      </main>

    </div>
  )
}

export default App