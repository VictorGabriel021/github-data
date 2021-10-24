import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './core/components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import history from 'core/utils/history';

const Routes = () => (
    <Router history={history}>
    <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            <PrivateRoute path="/home">
                <Home />
            </PrivateRoute>
        </Switch>
    </Router>
);

export default Routes;
