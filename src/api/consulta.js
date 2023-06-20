import fetchApi from "./fetchApi";
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();
//Filtros

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchFiltroAll = (params) =>
  addHeader({
    url: `/agenda_estimacion/filtros/`,
    method: "GET",
    params: params ? params : {},
  });

const fetchBusqueda = (params) =>
  addHeader({
    url: `/agenda_estimacion/busqueda/`,
    method: "GET",
    params: params ? params : {},
  });

export { fetchFiltroAll, fetchBusqueda };
