import axios from "axios";
import { app } from "@/main.js";

axios.defaults.withCredentials = true;

const { VITE_SPOTIFY_CLIENT_ID, VITE_SPOTIFY_CLIENT_SECRET } = import.meta.env;

export const post = async (url, options) => {
  return await axios({
    url,
    method: "post",
    ...options,
  });
};

export const get = async (url, options) => {
  if (!app.$cookies.isKey("token")) {
    const { data } = await getAccessToken();

    app.$cookies.set(
      "token",
      data.token_type + " " + data.access_token,
      data.expires_in + "s"
    );
  }

  return await axios({
    url,
    method: "get",
    headers: {
      Authorization: app.$cookies.get("token"),
    },
    ...options,
  });
};

const getAccessToken = () => {
  return post("/token", {
    data: { grant_type: "client_credentials" },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        btoa(VITE_SPOTIFY_CLIENT_ID + ":" + VITE_SPOTIFY_CLIENT_SECRET),
    },
  });
};
