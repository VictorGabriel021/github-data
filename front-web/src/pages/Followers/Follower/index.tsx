import { FollowerData, FollowerDataContext } from 'Context/FollowerDataContext';
import { UserDataContext } from 'Context/UserDataContext';
import BannerGoBack from 'core/components/BannerGoBack';
import FollowList from 'core/components/FollowList';
import { makeRequest } from 'core/utils/request';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import LoaderGif from 'core/assets/images/loader.gif';

const Follower = () => {

    const { userData } = useContext(UserDataContext);
    const { followerData, setFollowerData } = useContext(FollowerDataContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `https://api.github.com/users/${userData.data?.login}/followers` })
            .then(response => {
                setFollowerData(response as FollowerData);
            })
            .catch(() => {
                toast.error("Erro ao carregar os seguidores", {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
            .finally(() => setIsLoading(false));
    }, [setFollowerData, userData])

    return (
        <>
            {
                isLoading
                    ? (
                        <img src={LoaderGif} alt={LoaderGif} className="loader-gif" />
                    )
                    : (
                        <div className="navbar-padding">
                            <BannerGoBack title="seguidores" qtd={userData.data?.followers} />
                            {
                                followerData.data?.map(follower => (
                                    <FollowList data={follower} route='followers' key={follower.login} />
                                ))
                            }
                        </div>
                    )
            }
        </>
    );
}

export default Follower