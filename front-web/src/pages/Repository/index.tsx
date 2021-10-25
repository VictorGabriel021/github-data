import { useContext, useEffect } from 'react';
import { UserDataContext } from 'Context/UserDataContext';
import { makeRequest } from 'core/utils/request';
import { RepositoryData, RepositoryDataContext } from 'Context/RepositoryDataContext';
import { toast } from 'react-toastify';
import RepositoryList from './List';
import BannerGoBack from 'core/components/BannerGoBack';

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
        <div className="navbar-padding">
            <BannerGoBack title='repositórios' qtd={userData.data?.public_repos} />
            {
                repositoryData.data?.map(repos => (
                    <RepositoryList data={repos} key={repos.name} />
                ))
            }
        </div>
    );
}

export default Repository