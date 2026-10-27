import { useState } from 'react'

function TaskForm({ adicionarTarefa }) {
  const [texto, setTexto] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (texto.trim() === '') return

    adicionarTarefa(texto.trim())

    setTexto('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Adicione uma nova tarefa..."
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
        aria-label="Descrição da nova tarefa"
      />

      <button type="submit">
        + Adicionar
      </button>

    </form>
  )
}

export default TaskForm