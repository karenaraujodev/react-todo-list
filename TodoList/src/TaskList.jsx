
function TaskList({ tarefas }) {
  return (
    <ul id="list">
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
  )
}
export default TaskList