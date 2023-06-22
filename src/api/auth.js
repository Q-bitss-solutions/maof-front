import fetchApi from "./fetchApi";

const loginUser = (user) =>
  fetchApi({
    url: "user/login",
    method: "POST",
    data: user,
  });
const logout = () =>
  fetchApi({
    url: "user/logout",
    method: "POST",
  });

export { loginUser, logout };
