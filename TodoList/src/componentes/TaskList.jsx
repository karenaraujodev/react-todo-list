function TaskList({ tarefas }) {
  return (
    <ul id="list">
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}>
          {tarefa.texto}
        </li>
      ))}
    </ul>
  )
}

export default TaskList