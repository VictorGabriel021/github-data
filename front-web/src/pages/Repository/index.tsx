import './styles.scss';
import { useContext, useEffect } from 'react';
import { UserDataContext } from 'Context/UserDataContext';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { makeRequest } from 'core/utils/request';
import { RepositoryData, RepositoryDataContext } from 'Context/RepositoryDataContext';
import { toast } from 'react-toastify';
import RepositoryList from './List';
import { Link } from 'react-router-dom';

const Repository = () => {
    const { userData } = useContext(UserDataContext);
    const { repositoryData, setRepositoryData } = useContext(RepositoryDataContext);

    useEffect(() => {
        makeRequest({ url: `https://api.github.com/users/${userData.data?.login}/repos` })
            .then(response => {
                setRepositoryData(response as RepositoryData);
            })
            .catch(() => {
                toast.error("Erro ao carregar os repositórios", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            })
    }, [setRepositoryData, userData])

    return (
        <div className="repos-container">
            <div className="repos-background">
                <Link to="/home">
                    <AiOutlineArrowLeft className="icon-goback" />
                </Link>
                <p className="repos-title-goback">
                    {userData.data?.public_repos} repositórios
                </p>
            </div>
            {
                repositoryData.data?.map(repos => (
                    <RepositoryList data={repos} key={repos.name} />
                ))
            }
        </div>
    );
}

export default Repository