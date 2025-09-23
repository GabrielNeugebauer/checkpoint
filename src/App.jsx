import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import EmailModule from './components/EmailModule'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className='content'>
        <Header />
        <EmailModule />
      </div>
      <div className='info'>
        <span>Desenvolvido por Gabriel Moura</span>
      </div>
    </div>
  )
}

export default App
