import fetchApi from "./fetchApi";
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchRoles = () =>
  addHeader({
    url: "/cat_rol_maof/",
    method: "GET",
  });

const fetchRolesById = (id) =>
  addHeader({
    url: `/cat_rol_maof/${id}/`,
    method: "GET",
  });

const storeRoles = (Roles) =>
  addHeader({
    url: "/cat_rol_maof/",
    method: "POST",
    data: Roles,
  });

const updateRoles = (Roles) =>
  addHeader({
    url: `/cat_rol_maof/${Roles.id_proyecto}/`,
    method: "PUT",
    data: Roles,
  });

const deleteRoles = (id) =>
  addHeader({
    url: `/cat_rol_maof/${id}/`,
    method: "DELETE",
  });

export { fetchRoles, fetchRolesById, storeRoles, updateRoles, deleteRoles };
