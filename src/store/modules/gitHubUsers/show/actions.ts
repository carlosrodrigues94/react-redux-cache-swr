import { action } from "typesafe-actions";
import { ActionTypes, User } from "./types";

export function actionGitHubUserShowRequest() {
  return action(ActionTypes.SHOW_REQUEST);
}

export function actionGitHubUserShowSuccess(user: User) {
  return action(ActionTypes.SHOW_SUCCESS, { user });
}

export function actionGitHubUserShowFailure() {
  return action(ActionTypes.SHOW_FAILURE);
}
