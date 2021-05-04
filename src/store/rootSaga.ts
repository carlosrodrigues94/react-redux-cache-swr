import { all } from "redux-saga/effects";
import { gitHubUserShow } from "./modules/gitHubUsers/show/sagas";

function* rootSaga(): Generator {
  return yield all([gitHubUserShow]);
}

export { rootSaga };
