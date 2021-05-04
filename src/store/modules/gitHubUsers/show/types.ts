import { ActionType } from "typesafe-actions";

import * as actions from "./actions";

export enum ActionTypes {
  SHOW_REQUEST = "GIT_HUB_USER_SHOW/REQUEST",
  SHOW_SUCCESS = "GIT_HUB_USER_SHOW/SUCCESS",
  SHOW_FAILURE = "GIT_HUB_USER_SHOW/FAILURE",
}

export type GitHubUserShowReducerAction = ActionType<typeof actions>;

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email?: any;
  hireable: boolean;
  bio: string;
  twitter_username?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

export interface State {
  data: User;
  loading: boolean;
  error: string;
}
