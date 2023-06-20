import fetchApi from "./fetchApi";

const fetchUser = () =>
  fetchApi({
    url: "/cat_empleados_maof/",
    method: "GET",
  });

const fetchMAOF_EmployeesQuery = (id_unidad_maof) =>
  fetchApi({
    url: `/cat_empleados_maof/?unidad_maof=${id_unidad_maof}`,
    method: "GET",
  });

const fetchUserById = (id) =>
  fetchApi({
    url: `/cat_empleados_maof/${id}/`,
    method: "GET",
  });

const storeUser = (user) =>
  fetchApi({
    url: "/cat_empleados_maof/",
    method: "POST",
    data: user,
  });

const updateUser = (user) =>
  fetchApi({
    url: `/cat_empleados_maof/${user.empleado_maof}/`,
    method: "PUT",
    data: user,
  });

const deleteUser = (id, userAndRol) =>
  fetchApi({
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
