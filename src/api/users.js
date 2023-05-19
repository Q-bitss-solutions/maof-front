import fetchApi from "./fetchApi"

const fetchUser = () => fetchApi({
  url: 'user/',
  method: 'GET',
})

const fetchUserById = (id) => fetchApi({
  url: `user/${id}/`,
  method: 'GET',
})

const storeUser = (user) => fetchApi({
  url: 'user/',
  method: 'POST',
  data: user,
})

const updateUser = (user) => fetchApi({
  url: `user/${user.id}/`,
  method: 'PUT',
  data: user,
})

const deleteUser = (id,userAndRol) => fetchApi({
  url: `/user/${id}/`,
  method: 'PATCH',
  data: userAndRol,
})

export {
  fetchUser,
  fetchUserById,
  storeUser,
  updateUser,
  deleteUser,
}
