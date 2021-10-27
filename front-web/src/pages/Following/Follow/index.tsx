import { FollowingData, FollowingDataContext } from 'Context/FollowingDataContext';
import { UserDataContext } from 'Context/UserDataContext';
import BannerGoBack from 'core/components/BannerGoBack';
import FollowList from 'core/components/FollowList';
import { makeRequest } from 'core/utils/request';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import LoaderGif from 'core/assets/images/loader.gif';
import Pagination from 'core/components/Pagination';

const Follow = () => {

    const { userData } = useContext(UserDataContext);
    const { followingData, setFollowingData } = useContext(FollowingDataContext);
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const pageCount = Math.ceil(userData.data?.following as number / 30);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `https://api.github.com/users/${userData.data?.login}/following?page=${activePage}` })
            .then(response => {
                setFollowingData(response as FollowingData);
            })
            .catch(() => {
                toast.error("Erro ao carregar quem você está seguindo", {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
            .finally(() => setIsLoading(false));
    }, [setFollowingData, userData, activePage])

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
                                    <BannerGoBack title="seguindo" qtd={userData.data?.following} />
                                    {
                                        followingData.data?.map(following => (
                                            <FollowList data={following} route='following' key={following.login} />
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

export default Follow