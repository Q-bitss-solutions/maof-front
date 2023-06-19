import fetchApi from "./fetchApi";
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchUser = () =>
  addHeader({
    url: "/cat_empleados_maof/",
    method: "GET",
  });

const fetchMAOF_EmployeesQuery = (id_unidad_maof) =>
  addHeader({
    url: `/cat_empleados_maof/?unidad_maof=${id_unidad_maof}`,
    method: "GET",
  });

const fetchUserById = (id) =>
  addHeader({
    url: `/cat_empleados_maof/${id}/`,
    method: "GET",
  });

const storeUser = (user) =>
  addHeader({
    url: "/cat_empleados_maof/",
    method: "POST",
    data: user,
  });

const updateUser = (user) =>
  addHeader({
    url: `/cat_empleados_maof/${user.empleado_maof}/`,
    method: "PUT",
    data: user,
  });

const deleteUser = (id, userAndRol) =>
  addHeader({
    url: `/cat_empleados_maof/${id}/`,
    method: "PATCH",
    data: userAndRol,
  });

export {
  fetchUser,
  fetchMAOF_EmployeesQuery,
  fetchUserById,
  storeUser,
  updateUser,
  deleteUser,
};
