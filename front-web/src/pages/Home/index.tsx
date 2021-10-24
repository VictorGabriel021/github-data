import { useContext } from 'react';
import { UserDataContext } from '../../UserDataContext';
import './styles.scss';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { logout } from 'core/utils/auth';

const Home = () => {
    const { userData } = useContext(UserDataContext);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <>
            <div className="background-user-image">
                <div className="d-flex justify-content-between">
                    <b>#{userData.data?.login}</b>
                    <p className="user-logout">
                        <Link to="/" onClick={handleLogout}>
                            Sair
                            <FiLogOut className="user-logout-icon" />
                        </Link>
                    </p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <img src={userData.data?.avatar_url} alt={userData.data?.avatar_url}
                    className="user-image" />
            </div>
            <div className="d-flex">
                <div className="title-icon"></div>
                <section className="title-align">
                    <h1 className="user-name">
                        {userData.data?.name}
                    </h1>
                    <p>
                        {userData.data?.email}
                    </p>
                    <p>
                        {userData.data?.location}
                    </p>
                </section>
            </div>
            <div className="background-user-options">
                <section className="text-center">
                    <h1 className="option">
                        {userData.data?.followers}
                    </h1>
                    <p>Seguidores</p>
                </section>
                <section className="text-center">
                    <h1 className="option">
                        {userData.data?.following}
                    </h1>
                    <p>Seguindo</p>
                </section>
                <section className="text-center">
                    <h1 className="option">
                        {userData.data?.public_repos}
                    </h1>
                    <p>Repos</p>
                </section>
            </div>
            <div className="user-bio">
                <div className="title-icon"></div>
                <section className="title-align">
                    <h1>BIO</h1>
                    <p>
                        {userData.data?.bio}
                    </p>
                </section>
            </div>
        </>
    );
}

export default Home;
