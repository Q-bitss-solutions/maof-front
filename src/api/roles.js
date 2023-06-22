import fetchApi from "./fetchApi";

const fetchRoles = () =>
  fetchApi({
    url: "/cat_rol_maof/",
    method: "GET",
  });

const fetchRolesById = (id) =>
  fetchApi({
    url: `/cat_rol_maof/${id}/`,
    method: "GET",
  });

const storeRoles = (Roles) =>
  fetchApi({
    url: "/cat_rol_maof/",
    method: "POST",
    data: Roles,
  });

const updateRoles = (Roles) =>
  fetchApi({
    url: `/cat_rol_maof/${Roles.id_proyecto}/`,
    method: "PUT",
    data: Roles,
  });

const deleteRoles = (id) =>
  fetchApi({
    url: `/cat_rol_maof/${id}/`,
    method: "DELETE",
  });

export { fetchRoles, fetchRolesById, storeRoles, updateRoles, deleteRoles };
