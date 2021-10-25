import { createContext } from "react";

export type RepositoryData = {
    data?: [{
        name: '',
        description: '',
        stargazers_count: 0
    }]
};

export type RepositoryDataContextType = {
    repositoryData: RepositoryData;
    setRepositoryData: (repositoryData: RepositoryData) => void;
}

export const RepositoryDataContext = createContext<RepositoryDataContextType>({
    repositoryData: {},
    setRepositoryData: () => null
});