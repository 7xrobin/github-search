import { useQuery } from "react-query";
import { getUser } from "../requests/user";

export const useFetchUser = (username: string, enableSearch: boolean) => {
  const { data, isLoading, isError } = useQuery(
    ["useFetchUser", username],
    () => getUser(username),
    { enabled: enableSearch }
  );
  return { data, isLoading, isError };
};
