import fetchApi from "./fetchApi"
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchAssingResident = () => addHeader({
  url: '/asignacion_residente_contrato/',
  method: 'GET',
})

const fetchAssingResidentById = (id) => addHeader({
  url: `/asignacion_residente_contrato/${id}/`,
  method: 'GET',
})

const storeAssingResident = (AssingResident) => addHeader({
  url: '/asignacion_residente_contrato/',
  method: 'POST',
  data: AssingResident,
})

const updateAssingResident = (AssingResident,data) => addHeader({
  url: `/asignacion_residente_contrato/${AssingResident.id_asignacion_residente_contrato}/`,
  method: 'PUT',
  data: data,
})
const deleteAssingResident = (AssingResident_id, data) => addHeader({
  url: `/asignacion_residente_contrato/${AssingResident_id}/`,
  method: 'PATCH',
  data: data,
})

export {
  fetchAssingResident,
  fetchAssingResidentById,
  storeAssingResident,
  updateAssingResident,
  deleteAssingResident,
}
