import CheckpointLogo from './assets/checkpoint.svg';
import Home from './assets/home.svg';
import Email from './assets/email.svg';
import Password from './assets/key.svg';
import Web from './assets/web.svg';
import './styles.css';

export default function Sidebar({ onSelect, active }) {
    return (
        <aside className="sidebar">
            <nav>
                <ul className="sidebar-list">
                    <li>
                        <button
                            className={`list__link${active === 'home' ? ' list__link--selected' : ''}`}
                            onClick={() => onSelect('home')}
                        >
                            <img className="list__icon" src={Home} alt="" />
                            <span className="list__text">Home</span>
                        </button>
                    </li>
                    <li>
                        <button
                            className={`list__link${active === 'email' ? ' list__link--selected' : ''}`}
                            onClick={() => onSelect('email')}
                        >
                            <img className="list__icon" src={Email} alt="" />
                            <span className="list__text">E-mail</span>
                        </button>
                    </li>
                    <li>
                        <button
                            className={`list__link${active === 'senha' ? ' list__link--selected' : ''}`}
                            onClick={() => onSelect('senha')}
                        >
                            <img className="list__icon" src={Password} alt="" />
                            <span className="list__text">Senha</span>
                        </button>
                    </li>
                    <li>
                        <button
                            className={`list__link${active === 'ip' ? ' list__link--selected' : ''}`}
                            onClick={() => onSelect('ip')}
                        >
                            <img className="list__icon" src={Web} alt="" />
                            <span className="list__text">IP</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}