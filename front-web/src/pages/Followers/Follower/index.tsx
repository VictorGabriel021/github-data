import { FollowerData, FollowerDataContext } from "Context/FollowerDataContext";
import { UserDataContext } from "Context/UserDataContext";
import BannerGoBack from "core/components/BannerGoBack";
import FollowList from "core/components/FollowList";
import { makeRequest } from "core/utils/request";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoaderGif from "core/assets/images/loader.gif";
import Pagination from "core/components/Pagination";

const Follower = () => {
  const { userData } = useContext(UserDataContext);
  const { followerData, setFollowerData } = useContext(FollowerDataContext);
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const pageCount = Math.ceil((userData.data?.followers as number) / 30);

  useEffect(() => {
    setIsLoading(true);
    makeRequest({
      url: `https://api.github.com/users/${userData.data?.login}/followers?page=${activePage}`,
    })
      .then((response) => {
        setFollowerData(response as FollowerData);
      })
      .catch(() => {
        toast.error("Erro ao carregar os seguidores", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .finally(() => setIsLoading(false));
  }, [setFollowerData, userData, activePage]);

  return (
    <>
      {isLoading ? (
        <img src={LoaderGif} alt={LoaderGif} className="loader-gif" />
      ) : (
        <div className="d-xl-flex justify-content-center">
          <div className="container-web">
            <div className="navbar-padding">
              <BannerGoBack title="seguidores" qtd={userData.data?.followers} />
              {followerData.data?.map((follower) => (
                <FollowList
                  data={follower}
                  route="followers"
                  key={follower.login}
                />
              ))}

              {followerData.data?.length && (
                <Pagination
                  pageCount={pageCount}
                  activePage={activePage}
                  onChange={(page) => setActivePage(page)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Follower;
