import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './core/components/Routes/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import history from 'core/utils/history';
import Repository from 'pages/Repository';
import Followers from 'pages/Followers';
import Following from 'pages/Following';
import { useState } from 'react';
import { RepositoryData, RepositoryDataContext } from 'Context/RepositoryDataContext';
import { FollowerData, FollowerDataContext } from 'Context/FollowerDataContext';
import { FollowingData, FollowingDataContext } from 'Context/FollowingDataContext';

const Routes = () => {
    const [repositoryData, setRepositoryData] = useState<RepositoryData>({});
    const [followerData, setFollowerData] = useState<FollowerData>({});
    const [followingData, setFollowingData] = useState<FollowingData>({});

    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <PrivateRoute path="/home">
                    <Home />
                </PrivateRoute>
                <PrivateRoute path="/repos">
                    <RepositoryDataContext.Provider value={{ repositoryData, setRepositoryData }}>
                        <Repository />
                    </RepositoryDataContext.Provider>
                </PrivateRoute>
                <PrivateRoute path="/followers">
                    <FollowerDataContext.Provider value={{ followerData, setFollowerData }}>
                        <Followers />
                    </FollowerDataContext.Provider>
                </PrivateRoute>
                <PrivateRoute path="/following">
                    <FollowingDataContext.Provider value={{ followingData, setFollowingData }}>
                        <Following />
                    </FollowingDataContext.Provider>
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default Routes;
