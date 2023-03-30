import fetchApi from "./fetchApi"

const fetchSCIT_Employees = () => fetchApi({
  url: '/cat_empleados_sict/',
  method: 'GET',
})

const fetchSCIT_EmployeesQuery = (id_unidad_sict) => fetchApi({
  url:  `/cat_empleados_sict/?unidad_sict=${id_unidad_sict}`,
  method: 'GET',
})

export {
  fetchSCIT_Employees,
  fetchSCIT_EmployeesQuery
}
