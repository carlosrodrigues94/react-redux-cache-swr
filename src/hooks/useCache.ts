import useSwr from "swr";
import { useDispatch } from "react-redux";
import { AxiosResponse } from "axios";
import { User } from "../store/modules/gitHubUsers/show/types";

type ActionToDispatch = (data?: any) => { type: string; payload?: any };

interface UseCacheProps {
  actionsToPersist?: ActionToDispatch[];
  fetcher: () => Promise<AxiosResponse<User>>;
  fetcherParams: string;
}

function useCache({
  actionsToPersist = [],
  fetcher,
  fetcherParams,
}: UseCacheProps) {
  const dispatch = useDispatch();
  let loading: boolean = false;

  const swrData = useSwr(fetcherParams, fetcher);
  const { isValidating, data } = swrData;

  if (!data) {
    loading = true;
  }

  if (actionsToPersist.length && !isValidating) {
    actionsToPersist.forEach((action) => {
      dispatch(action(data?.data));
    });
  }
  return { loading, data };
}

export { useCache };
