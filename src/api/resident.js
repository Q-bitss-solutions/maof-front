import fetchApi from "./fetchApi";
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchResident = () =>
  addHeader({
    url: "/cat_residente/",
    method: "GET",
  });

const fetchResidentById = (id) =>
  addHeader({
    url: `/cat_residente/${id}/`,
    method: "GET",
  });

const storeResident = (resident) =>
  addHeader({
    url: "/cat_residente/",
    method: "POST",
    data: resident,
  });

const updateResident = (resident) =>
  addHeader({
    url: `/cat_residente/${resident.id_residente}/`,
    method: "PUT",
    data: resident,
  });
const deleteResident = (id_residente) =>
  addHeader({
    url: `/cat_residente/${id_residente}/`,
    method: "DELETE",
  });

export {
  fetchResident,
  fetchResidentById,
  storeResident,
  updateResident,
  deleteResident,
};
