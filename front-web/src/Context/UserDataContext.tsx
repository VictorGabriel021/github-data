import { createContext } from "react";

export type UserData = {
    data?: {
        login: '',
        name: '',
        email: '',
        location: '',
        company: '',
        bio: '',
        avatar_url: '',
        followers_url: '',
        following_url: '',
        organizations_url: '',
        starred_url: '',
        public_repos: 0,
        public_gists: 0,
        followers: 0,
        following: 0
    }
};

export type UserDataContextType = {
    userData: UserData;
    setUserData: (userData: UserData) => void;
}

export const UserDataContext = createContext<UserDataContextType>({
    userData: {},
    setUserData: () => null
});