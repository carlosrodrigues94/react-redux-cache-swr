import React, { useEffect, useState } from "react";
import { ApiMethods } from "../../services/api";
import history from "../../services/history";
import { User } from "../../store/modules/gitHubUsers/show/types";

const url = "https://api.github.com/users";

const NoCache: React.FC = () => {
  const [user, setUser] = useState<User>({
    avatar_url: "",
    name: "",
    html_url: "",
  } as User);
  const [loading, setLoading] = useState(false);

  const getApiData = async () => {
    setLoading(true);
    const callApi = ApiMethods.get; // To get a new instance of api

    const response = await callApi(`${url}/carlosrodrigues94`);

    setUser(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1>Page Without CACHE</h1>
      {loading && (
        <>
          <span className="loading" />
          <h4>Loading...</h4>
        </>
      )}

      <button type="button" onClick={() => history.push("/")}>
        Go Cached Page
      </button>

      <img src={user.avatar_url} alt="avatar" />
      <h4>{user.name}</h4>
      <h4>{user.html_url}</h4>
    </>
  );
};

export default NoCache;
