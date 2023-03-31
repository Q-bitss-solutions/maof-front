import fetchApi from "./fetchApi"

const fetchAssingResident = () => fetchApi({
  url: '/asignacion_residente_contrato/',
  method: 'GET',
})

const fetchAssingResidentById = (id) => fetchApi({
  url: `/asignacion_residente_contrato/${id}/`,
  method: 'GET',
})

const storeAssingResident = (AssingResident) => fetchApi({
  url: '/asignacion_residente_contrato/',
  method: 'POST',
  data: AssingResident,
})

const updateAssingResident = (AssingResident) => fetchApi({
  url: `/asignacion_residente_contrato/${AssingResident.id_asignacion_residente_contrato}/`,
  method: 'PUT',
  data: AssingResident,
})
const deleteAssingResident = (AssingResident_id) => fetchApi({
  url: `/asignacion_residente_contrato/${AssingResident_id}/`,
  method: 'DELETE',
})

export {
  fetchAssingResident,
  fetchAssingResidentById,
  storeAssingResident,
  updateAssingResident,
  deleteAssingResident,
}
