import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './core/components/Routes/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import history from 'core/utils/history';
import Repository from 'pages/Repository';
import Followers from 'pages/Followers';
import { useState } from 'react';
import { RepositoryData, RepositoryDataContext } from 'Context/RepositoryDataContext';

const Routes = () => {
    const [repositoryData, setRepositoryData] = useState<RepositoryData>({});

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
                    <Followers />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default Routes;
