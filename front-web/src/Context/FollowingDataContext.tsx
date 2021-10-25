import { createContext } from "react";

export type FollowingData = {
    data?: [{
        login: '',
        avatar_url: ''
    }]
};

export type FollowingDataContextType = {
    followingData: FollowingData;
    setFollowingData: (followingData: FollowingData) => void;
}

export const FollowingDataContext = createContext<FollowingDataContextType>({
    followingData: {},
    setFollowingData: () => null
});