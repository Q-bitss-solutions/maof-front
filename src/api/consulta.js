import fetchApi from "./fetchApi";

//Filtros

const fetchFiltroAll = (params) =>
  fetchApi({
    url: `/agenda_estimacion/filtros/`,
    method: "GET",
    params: params ? params : {},
  });

const fetchBusqueda = (params) =>
  fetchApi({
    url: `/agenda_estimacion/busqueda/`,
    method: "GET",
    params: params ? params : {},
  });

export { fetchFiltroAll, fetchBusqueda };
