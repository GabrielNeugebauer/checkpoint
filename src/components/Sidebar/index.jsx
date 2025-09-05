import CheckpointLogo from './assets/checkpoint.svg';
import Home from './assets/home.svg';
import Email from './assets/email.svg';
import Password from './assets/key.svg';
import Web from './assets/web.svg';
import './styles.css';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul className="sidebar-list">
                    <li>
                        <a className="list__link" href="#">
                            <img className="list__icon" src={Home} alt="" />
                            <span className="list__text">Home</span>
                        </a>
                    </li>
                    <li>
                        <a className="list__link list__link--selected" href="#">
                            <img className="list__icon" src={Email} alt="" />
                            <span className="list__text">E-mail</span>
                        </a>
                    </li>
                    <li>
                        <a className="list__link" href="#">
                            <img className="list__icon" src={Password} alt="" />
                            <span className="list__text">Senha</span>
                        </a>
                    </li>
                    <li>
                        <a className="list__link" href="#">
                            <img className="list__icon" src={Web} alt="" />
                            <span className="list__text">IP</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}