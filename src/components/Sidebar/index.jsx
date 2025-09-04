import CheckpointLogo from './assets/checkpoint.svg';
import Home from './assets/checkpoint.svg';
import Email from './assets/checkpoint.svg';
import Password from './assets/checkpoint.svg';
import Web from './assets/checkpoint.svg';
import './styles.css';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <img src={CheckpointLogo} alt="Logo" />
            <nav>
                <ul className="sidebar-list">
                    <li>
                        <a className="list__link list__link--selected" href="#">
                            <img src={Home} alt="" />
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a className="list__link" href="#">
                            <img src={Email} alt="" />
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a className="list__link" href="#">
                            <img src={Password} alt="" />
                            <span>Senha</span>
                        </a>
                    </li>
                    <li>
                        <a className="list__link" href="#">
                            <img src={Web} alt="" />
                            <span>IP</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}