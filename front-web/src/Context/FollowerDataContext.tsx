import { createContext } from "react";

export type FollowerData = {
    data?: [{
        login: '',
        avatar_url: ''
    }]
};

export type FollowerDataContextType = {
    followerData: FollowerData;
    setFollowerData: (followerData: FollowerData) => void;
}

export const FollowerDataContext = createContext<FollowerDataContextType>({
    followerData: {},
    setFollowerData: () => null
});