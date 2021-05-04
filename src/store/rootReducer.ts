import { combineReducers } from "redux";
import gitHubUserShow from "./modules/gitHubUsers/show/reducer";

const rootReducer = combineReducers([gitHubUserShow]);

export { rootReducer };
