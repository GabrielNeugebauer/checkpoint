import Search from './assets/search.svg'
import './styles.css'

export default function SearchBar({ termo }) {
  return (
    <div className="search-bar">
      <input className='search-bar' type="search" placeholder={`Digite o seu ${termo}`} />
    </div>
  )
}