import fetchApi from "./fetchApi";
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchSICTUnits = () =>
  addHeader({
    url: "cat-unidad-maof/",
    method: "GET",
  });

const fetchSICTUnitsActive = () =>
  addHeader({
    url: "cat-unidad-maof/",
    method: "GET",
    params: {
      estado_unidad_maof: 1,
    },
  });

const fetchSICTUnitsById = (id) =>
  addHeader({
    url: `/cat-unidad-maof/${id}/`,
    method: "GET",
  });

const storeSICTUnits = (unit) =>
  addHeader({
    url: "/cat-unidad-maof/",
    method: "POST",
    data: unit,
  });

const updateSICTUnits = (unit) =>
  addHeader({
    url: `/cat-unidad-maof/${unit.id_unidad_maof}/`,
    method: "PUT",
    data: unit,
  });
const deleteSICTUnits = (id_unidad_maof) =>
  addHeader({
    url: `/cat-unidad-maof/${id_unidad_maof}/`,
    method: "DELETE",
  });

export {
  fetchSICTUnits,
  fetchSICTUnitsActive,
  fetchSICTUnitsById,
  storeSICTUnits,
  updateSICTUnits,
  deleteSICTUnits,
};
