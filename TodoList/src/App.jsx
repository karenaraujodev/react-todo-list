import './App.css'
import Header from './header'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <TaskForm />
        <TaskList />
      </main>
      <Footer />
    </>
      

  )
}

export default App