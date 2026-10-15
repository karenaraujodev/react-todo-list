import { useState } from 'react'

function TaskForm() {
  const [texto, setTexto] = useState('')

  function handleChange(event) {
    setTexto(event.target.value)
  }

  return (
    <form>
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