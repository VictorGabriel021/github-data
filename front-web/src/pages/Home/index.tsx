import { useContext, useEffect, useState } from 'react';
import { NewUserDataContext, UserData, UserDataContext } from '../../Context/UserDataContext';
import './styles.scss';
import { FiLogOut } from 'react-icons/fi';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { loginNewUser, logout } from 'core/utils/auth';
import { useParams } from 'react-router';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { makeRequest } from 'core/utils/request';
import { toast } from 'react-toastify';
import LoaderGif from 'core/assets/images/loader.gif';

type ParamsType = {
    followId: string;
}

const Home = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const { newUserData, setNewUserData } = useContext(NewUserDataContext);
    const [isLoading, setIsLoading] = useState(false);
    const { followId } = useParams<ParamsType>();
    const isDetails = followId !== undefined;

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    const handleNewUser = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        loginNewUser(newUserData);
        setUserData(newUserData);
    }

    useEffect(() => {
        if (isDetails) {
            setIsLoading(true);
            makeRequest({ url: `https://api.github.com/users/${followId}` })
                .then(response => {
                    setNewUserData(response as UserData);
                })
                .catch(() => {
                    toast.error("Erro ao carregar o seguidor", {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                })
                .finally(() => setIsLoading(false));
        }
        setNewUserData(userData);
    }, [isDetails, setNewUserData, followId, userData]);

    return (
        <>
            {
                isLoading
                    ? (
                        <img src={LoaderGif} alt={LoaderGif} className="loader-gif" />
                    )
                    : (
                        <div className="d-xl-flex justify-content-center">
                            <div className="container-web">
                                <div className="background-user-image">
                                    <div className="d-flex justify-content-between">
                                        {isDetails && (
                                            <Link to='../'>
                                                <AiOutlineArrowLeft className="icon-goback" />
                                            </Link>
                                        )}
                                        <b>#{newUserData.data?.login}</b>
                                        <p className="user-logout">
                                            {isDetails
                                                ? (
                                                    <Link to="/home" onClick={handleNewUser}>
                                                        Salvar
                                                        <FiLogIn className="user-login-icon login-logout" />
                                                    </Link>
                                                )
                                                : (
                                                    <Link to="/" onClick={handleLogout}>
                                                        Sair
                                                        <FiLogOut className="user-logout-icon login-logout" />
                                                    </Link>
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src={newUserData.data?.avatar_url} alt={newUserData.data?.avatar_url}
                                        className="user-image" />
                                </div>
                                <div className="d-flex">
                                    <div className="title-icon"></div>
                                    <section className="title-align">
                                        <h1 className="user-name">
                                            {newUserData.data?.name}
                                        </h1>
                                        <p>
                                            {newUserData.data?.email}
                                        </p>
                                        <p>
                                            {newUserData.data?.location}
                                        </p>
                                    </section>
                                </div>
                                <div className="background-user-options">
                                    <section className="text-center">
                                        <h1 className="option">
                                            {newUserData.data?.followers}
                                        </h1>
                                        <p>Seguidores</p>
                                    </section>
                                    <section className="text-center">
                                        <h1 className="option">
                                            {newUserData.data?.following}
                                        </h1>
                                        <p>Seguindo</p>
                                    </section>
                                    <section className="text-center">
                                        <h1 className="option">
                                            {newUserData.data?.public_repos}
                                        </h1>
                                        <p>Repos</p>
                                    </section>
                                </div>
                                <div className="user-bio">
                                    <div className="title-icon"></div>
                                    <section className="title-align">
                                        <h1>BIO</h1>
                                        <p>
                                            {newUserData.data?.bio}
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    );
}

export default Home;
