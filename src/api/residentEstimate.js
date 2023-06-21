import fetchApi from "./fetchApi";
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchResidentEstimate = () =>
  addHeader({
    url: "/estimacion_residente/",
    method: "GET",
  });

const fetchResidentEstimateById = (id) =>
  addHeader({
    url: `/estimacion_residente/${id}/`,
    method: "GET",
  });
const fetchHistoryResidentEstimateById = (id) =>
  addHeader({
    url: `/estimacion_residente/${id}/historial_estimacion/`,
    method: "GET",
  });

const storeResidentEstimate = (residentEstimate) =>
  addHeader({
    url: "/estimacion_residente/",
    method: "POST",
    data: residentEstimate,
  });

const updateResidentEstimate = (residentEstimate) =>
  addHeader({
    url: `/estimacion_residente/${residentEstimate.id_estimacion}/`,
    method: "PUT",
    data: residentEstimate,
  });

const deleteResidentEstimate = (observacion, id_estimacion) =>
  addHeader({
    url: `/estimacion_residente/${id_estimacion}/`,
    method: "PATCH",
    data: observacion,
  });
const archivoResidentEstimate = (fileData) =>
  addHeader({
    url: `/archivo_estimacion/`,
    method: "POST",
    data: fileData,
  });
const fetchArchivoResidentEstimateById = (id) =>
  addHeader({
    url: `/archivo_estimacion/`,
    method: "GET",
    params: {
      estimacion: id,
      estatus_archivo: 1,
    },
  });

const deleteArchivoResidentEstimate = (id_archivo_estimacion) =>
  addHeader({
    url: `/archivo_estimacion/${id_archivo_estimacion}/`,
    method: "DELETE",
  });

const fetchResidentEstimateHojaViajera = () =>
  addHeader({
    url: "/estimacion_residente/hoja_viajera/",
    method: "GET",
  });

const fetchResidentEstimateHojaViajeraActivos = () =>
  addHeader({
    url: "/estimacion_residente/hoja_viajera/",
    method: "GET",
    params: {
      estatus_booleano: "True",
    },
  });

const fetchResidentEstimateHojaViajeraInProgress = (estatus_estimacion) =>
  addHeader({
    url: `/estimacion_residente/hoja_viajera/`,
    method: "GET",
    params: {
      estatus_estimacion: estatus_estimacion,
      estatus_booleano: 1,
    },
  });
//Endpoints Funcion Semaforo
const sendToReviewArea = (residentEstimate) =>
  addHeader({
    url: `/estimacion_residente/${residentEstimate.id_estimacion}/enviar_area_revisora/`,
    method: "PUT",
    data: residentEstimate,
  });

const sendNewStatus = (id_estimacion, params) =>
  addHeader({
    url: `/estimacion_residente/${id_estimacion}/cambiar_estatus_estimacion/`,
    method: "PUT",
    params: params ? params : {},
    /* data: residentEstimate, */
  });

const catStatusEstimate = () =>
  addHeader({
    url: `/cat_estatus_estimacion/`,
    method: "GET",
  });

export {
  fetchResidentEstimate,
  fetchResidentEstimateById,
  fetchHistoryResidentEstimateById,
  fetchResidentEstimateHojaViajera,
  storeResidentEstimate,
  updateResidentEstimate,
  deleteResidentEstimate,
  archivoResidentEstimate,
  fetchArchivoResidentEstimateById,
  deleteArchivoResidentEstimate,
  fetchResidentEstimateHojaViajeraInProgress,
  fetchResidentEstimateHojaViajeraActivos,
  sendToReviewArea,
  sendNewStatus,
  catStatusEstimate,
};
