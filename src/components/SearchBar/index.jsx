import Search from './assets/search.svg'
import { useState } from 'react'
import './styles.css'

/*O link para a API aberta do haveibeenpwned é https://haveibeenpwned.com/unifiedsearch/{your-email-here}*/

export default function SearchBar({ termo }) {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="search-bar">
      <input className='search-bar'
      type="search"
      placeholder={`Digite o seu ${termo}`} 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}