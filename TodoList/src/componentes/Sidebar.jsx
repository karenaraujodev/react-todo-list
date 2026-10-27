function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <div className="logo-icon">✓</div>

        <h2>
          Todo<span>List</span>
        </h2>
      </div>

      <p className="sidebar-description">
        Pequenos passos,
        <br />
        grandes conquistas.
      </p>

      <nav className="sidebar-nav">

        <button className="active" type="button">
          <span className="nav-icon">⌂</span>
          Minhas tarefas
        </button>

        <button type="button">
          <span className="nav-icon">✓</span>
          Concluídas
        </button>

        <button type="button">
          <span className="nav-icon">◷</span>
          Pendentes
        </button>

      </nav>

      <div className="sidebar-footer">
        Disciplina hoje,
        <br />
        liberdade amanhã. 💜
      </div>

    </aside>
  )
}

export default Sidebar