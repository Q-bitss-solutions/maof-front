import fetchApi from "./fetchApi"

const fetchRoles = () => fetchApi({
  url: '/roles/',
  method: 'GET',
})

const fetchRolesById = (id) => fetchApi({
  url: `/roles/${id}/`,
  method: 'GET',
})

const storeRoles = (Roles) => fetchApi({
  url: '/roles/',
  method: 'POST',
  data: Roles,
})

const updateRoles = (Roles) => fetchApi({
  url: `/roles/${Roles.id_proyecto}/`,
  method: 'PUT',
  data: Roles,
})

const deleteRoles = (id) => fetchApi({
  url: `/roles/${id}/`,
  method: 'DELETE',
})

export {
  fetchRoles,
  fetchRolesById,
  storeRoles,
  updateRoles,
  deleteRoles,
}
