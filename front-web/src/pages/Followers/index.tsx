import { Route, Switch } from "react-router";
import Follower from "./Follower";
import FollowerDetails from "./FollowerDetails";

const Followers = () => (
    <Switch>
        <Route path="/followers" exact>
            <Follower />
        </Route>
        <Route path="/followers/details/:followId">
            <FollowerDetails />
        </Route>
    </Switch>
);

export default Followers