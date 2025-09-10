import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import BreachContainer from './components/BreachContainer'
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState([]);

  async function onSearch(inputEmail) {
    if (!inputEmail) return;

    try {
      const response = await fetch(`https://corsproxy.io/?https://haveibeenpwned.com/unifiedsearch/${inputEmail}`); //Para não depender de backend.
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEmail(data.Breaches || []);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setEmail([]);
    }
  }
  return (
    <div className="container">
      <Sidebar />
      <div className='content'>
        <Header />
        <div className="title-section">
          <h1>Checagem de e-mail</h1>
          <span>&ensp;&ensp;&ensp;Verifique se o seu e-mail foi exposto em algum vazamento de dados.</span>
        </div>
        <SearchBar termo="e-mail" onSearch={onSearch} />
        <BreachContainer email={email} />
      </div>
    </div>
  )
}

export default App
