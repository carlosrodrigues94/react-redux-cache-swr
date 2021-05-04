import React from "react";
import { useCache } from "../../hooks/useCache";
import { ApiMethods } from "../../services/api";
import history from "../../services/history";
import { actionGitHubUserShowSuccess } from "../../store/modules/gitHubUsers/show/actions";

const Cached: React.FC = () => {
  const url = "https://api.github.com/users";

  const { data, loading } = useCache({
    fetcher: ApiMethods.get,
    fetcherParams: `${url}/carlosrodrigues94`,
    actionsToPersist: [actionGitHubUserShowSuccess],
  });

  return (
    <div>
      <h1>Page With Cache (SWR)</h1>
      {loading && (
        <>
          <span className="loading" />
          <h4>Loading...</h4>
        </>
      )}
      <button type="button" onClick={() => history.push("/no-cache")}>
        Go to no Cache Page
      </button>

      <img src={data?.data.avatar_url} alt="avatar" />
      <h4>{data?.data.name}</h4>
      <h4>{data?.data.html_url}</h4>
    </div>
  );
};

export default Cached;
