import SearchBar from '../SearchBar'
import BreachContainer from '../BreachContainer'
import { useState } from 'react'

export default function EmailModule() {
      const [email, setEmail] = useState([]);

  async function onSearch(inputEmail) {
    if (!inputEmail) return;

    try {
      if (!inputEmail.includes('@')) {
        throw new Error('Invalid email format');
      }
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
        <div>
            <div className="title-section">
                <h1>Checagem de e-mail</h1>
                <span>&ensp;&ensp;&ensp;Verifique se o seu e-mail foi exposto em algum vazamento de dados.</span>
            </div>
            <SearchBar termo="e-mail" onSearch={onSearch} />
            <br />
            <BreachContainer email={email} className={email.length === 0 ? 'hide' : ''} />
        </div>
    );
}