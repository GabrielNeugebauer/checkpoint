import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className='content'>
        <Header />
        <div className="title-section">
          <h1>Checagem de e-mail</h1>
          <span>&ensp;&ensp;&ensp;Verifique se o seu e-mail foi exposto em algum vazamento de dados.</span>
        </div>
        <SearchBar termo="e-mail" />
      </div>
    </div>
  )
}

export default App
