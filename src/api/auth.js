import fetchApi from "./fetchApi"


const loginUser = (user) => fetchApi({
  url: 'user/login',
  method: 'POST',
  data: user,
})

export {
  loginUser,
}
