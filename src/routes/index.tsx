import { Route, Switch } from "react-router-dom";
import NoCache from "../pages/NoCache";
import Cached from "../pages/Cached";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Cached} />
      <Route path="/no-cache" component={NoCache} />
    </Switch>
  );
};
