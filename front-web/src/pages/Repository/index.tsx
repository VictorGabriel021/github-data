import { useContext, useEffect, useState } from 'react';
import { UserDataContext } from 'Context/UserDataContext';
import { makeRequest } from 'core/utils/request';
import { RepositoryData, RepositoryDataContext } from 'Context/RepositoryDataContext';
import { toast } from 'react-toastify';
import RepositoryList from './List';
import BannerGoBack from 'core/components/BannerGoBack';
import LoaderGif from 'core/assets/images/loader.gif';

const Repository = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const { repositoryData, setRepositoryData } = useContext(RepositoryDataContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `https://api.github.com/users/${userData.data?.login}/repos` })
            .then(response => {
                setRepositoryData(response as RepositoryData);
            })
            .catch(() => {
                toast.error("Erro ao carregar os repositórios", {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
            .finally(() => setIsLoading(false));
    }, [setUserData, setRepositoryData, userData])

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
                                <div className="navbar-padding">
                                    <BannerGoBack title='repositórios' qtd={userData.data?.public_repos} />
                                    {
                                        repositoryData.data?.map(repos => (
                                            <RepositoryList data={repos} key={repos.name} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    );
}

export default Repository