import './styles.scss';
import { BiHomeAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="nav-container">
        <ul className="nav-content">
            <li>
                <NavLink to="/home" exact>
                    <BiHomeAlt />
                    <h6>Home</h6>
                </NavLink>
            </li>
            <li>
                <NavLink to="/repos">
                    <FiGithub />
                    <h6>Repos</h6>
                </NavLink>
            </li>
            <li>
                <NavLink to="/followers">
                    <FiUsers />
                    <h6>Seguidores</h6>
                </NavLink>
            </li>
            <li>
                <NavLink to="/following">
                    <FiUsers />
                    <h6>Seguindo</h6>
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;
