import { FollowerData, FollowerDataContext } from 'Context/FollowerDataContext';
import { UserDataContext } from 'Context/UserDataContext';
import BannerGoBack from 'core/components/BannerGoBack';
import FollowList from 'core/components/FollowList';
import { makeRequest } from 'core/utils/request';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const Follower = () => {

    const { userData } = useContext(UserDataContext);
    const { followerData, setFollowerData } = useContext(FollowerDataContext);

    useEffect(() => {
        makeRequest({ url: `https://api.github.com/users/${userData.data?.login}/followers` })
            .then(response => {
                setFollowerData(response as FollowerData);
            })
            .catch(() => {
                toast.error("Erro ao carregar os seguidores", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            })
    }, [setFollowerData, userData])

    return (
        <div className="navbar-padding">
            <BannerGoBack title="seguidores" qtd={userData.data?.followers} />
            {
                followerData.data?.map(follower => (
                    <FollowList data={follower} route='followers' key={follower.login} />
                ))
            }
        </div>
    );
}

export default Follower