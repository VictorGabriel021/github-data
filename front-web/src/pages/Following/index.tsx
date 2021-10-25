import { FollowingData, FollowingDataContext } from 'Context/FollowingDataContext';
import { UserDataContext } from 'Context/UserDataContext';
import BannerGoBack from 'core/components/BannerGoBack';
import FollowList from 'core/components/FollowList';
import { makeRequest } from 'core/utils/request';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const Following = () => {

    const { userData } = useContext(UserDataContext);
    const { followingData, setFollowingData } = useContext(FollowingDataContext);

    useEffect(() => {
        makeRequest({ url: `https://api.github.com/users/${userData.data?.login}/following` })
            .then(response => {
                setFollowingData(response as FollowingData);
            })
            .catch(() => {
                toast.error("Erro ao carregar quem você está seguindo", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            })
    }, [setFollowingData, userData])

    return (
        <div className="navbar-padding">
            <BannerGoBack title="seguindo" qtd={userData.data?.following} />
            {
                followingData.data?.map(following => (
                    <FollowList data={following} key={following.login} />
                ))
            }
        </div>
    );
}

export default Following