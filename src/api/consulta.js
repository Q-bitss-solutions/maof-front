import fetchApi from "./fetchApi";

//Filtros

const fetchFiltroAll = (params) =>
  fetchApi({
    url: `/agenda_estimacion/filtros/`,
    method: "GET",
    params: params ? params : {},
  });


const fetchResidentEstimateById = (id) =>
  fetchApi({
    url: `/estimacion_residente/${id}/`,
    method: "GET",
  });

const storeResidentEstimate = (residentEstimate) =>
  fetchApi({
    url: "/estimacion_residente/",
    method: "POST",
    data: residentEstimate,
  });


export {
  fetchFiltroAll,
};
