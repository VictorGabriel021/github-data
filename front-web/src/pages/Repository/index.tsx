import { useContext, useEffect, useState } from 'react';
import { UserDataContext } from 'Context/UserDataContext';
import { makeRequest } from 'core/utils/request';
import { RepositoryData, RepositoryDataContext } from 'Context/RepositoryDataContext';
import { toast } from 'react-toastify';
import RepositoryList from './List';
import BannerGoBack from 'core/components/BannerGoBack';
import LoaderGif from 'core/assets/images/loader.gif';
import Pagination from 'core/components/Pagination';

const Repository = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const { repositoryData, setRepositoryData } = useContext(RepositoryDataContext);
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [pageCount] = useState(Math.ceil(userData.data?.public_repos as number / 30));

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `https://api.github.com/users/${userData.data?.login}/repos?page=${activePage}` })
            .then(response => {
                setRepositoryData(response as RepositoryData);
            })
            .catch(() => {
                toast.error("Erro ao carregar os repositórios", {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
            .finally(() => setIsLoading(false));
    }, [setUserData, setRepositoryData, userData, activePage])

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
                                    <Pagination
                                        pageCount={pageCount}
                                        activePage={activePage}
                                        onChange={page => setActivePage(page)}
                                    />
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    );
}

export default Repository