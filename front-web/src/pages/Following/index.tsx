import { Route, Switch } from "react-router";
import Follow from "./Follow";
import FollowDetails from "./FollowDetails";

const Following = () => (
    <Switch>
        <Route path="/following" exact>
            <Follow />
        </Route>
        <Route path="/following/details/:followId">
            <FollowDetails />
        </Route>
    </Switch>
);

export default Following