import { useState } from 'react'

function TaskForm({ adicionarTarefa }) {
  const [texto, setTexto] = useState('')

  function handleChange(event) {
    setTexto(event.target.value)
  }
  function handleSubmit(event) {
  event.preventDefault()

  if (texto.trim() === '') {
    return
  }

  adicionarTarefa(texto)

  setTexto('')
}
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={texto}
        onChange={handleChange}
      />

      <button type="submit">
        Adicionar
      </button>
    </form>
  )
}

export default TaskForm