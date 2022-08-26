import axios from "axios";
import { UserInterface } from "../interfaces/user";

export const getUser = async (username: string): Promise<UserInterface> => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => response.data);
};
