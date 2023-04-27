import fetchApi from "./fetchApi"

const fetchResidentEstimate = () => fetchApi({
  url: '/estimacion_residente/',
  method: 'GET',
})

const fetchResidentEstimateById = (id) => fetchApi({
  url: `/estimacion_residente/${id}/`,
  method: 'GET',
})

const storeResidentEstimate = (residentEstimate) => fetchApi({
  url: '/estimacion_residente/',
  method: 'POST',
  data: residentEstimate,
})

const updateResidentEstimate = (residentEstimate) => fetchApi({
  url: `/estimacion_residente/${residentEstimate.id_residente}/`,
  method: 'PUT',
  data: residentEstimate,
})
const deleteResidentEstimate = (id_residente) => fetchApi({
  url: `/estimacion_residente/${id_residente}/`,
  method: 'DELETE',
})
const archivoResidentEstimate = (fileData) => fetchApi({
  url: `/archivo_estimacion/`,
  method: 'POST',
  data: fileData,
})
const fetchArchivoResidentEstimateById = (id) => fetchApi({
  url: `/archivo_estimacion/?estimacion=${id}`,
  method: 'GET',
})

const deleteArchivoResidentEstimate = (id_archivo_estimacion) => fetchApi({
  url: `/archivo_estimacion/${id_archivo_estimacion}/`,
  method: 'DELETE',
})

const fetchResidentEstimateHojaViajera = () => fetchApi({
  url: '/estimacion_residente/hoja_viajera/',
  method: 'GET',
})
export {
  fetchResidentEstimate,
  fetchResidentEstimateById,
  fetchResidentEstimateHojaViajera,
  storeResidentEstimate,
  updateResidentEstimate,
  deleteResidentEstimate,
  archivoResidentEstimate,
  fetchArchivoResidentEstimateById,
  deleteArchivoResidentEstimate,
}
