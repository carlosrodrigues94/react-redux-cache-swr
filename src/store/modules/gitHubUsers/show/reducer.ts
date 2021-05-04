import producer from "immer";
import { ActionTypes, GitHubUserShowReducerAction, State } from "./types";
const INITIAL_STATE: State = {
  data: {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
    name: "",
    company: "",
    blog: "",
    location: "",
    email: null,
    hireable: true,
    bio: "",
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: new Date(),
    updated_at: new Date(),
  },
  loading: false,
  error: "",
};

const gitHubUserShow = (
  state = INITIAL_STATE,
  action: GitHubUserShowReducerAction
): State => {
  return producer(state, (draft) => {
    switch (action.type) {
      case ActionTypes.SHOW_REQUEST:
        draft.loading = true;
        break;

      case ActionTypes.SHOW_SUCCESS:
        draft.loading = false;
        draft.data = action.payload.user;
        break;

      case ActionTypes.SHOW_FAILURE:
        draft.loading = false;
        break;

      default:
        break;
    }
  });
};

export default gitHubUserShow;
