import fetchApi from "./fetchApi";

const fetchResident = (params) =>
  fetchApi({
    url: "/cat_residente/",
    method: "GET",
    params: params ? params : {},
  });

const fetchResidentById = (id) =>
  fetchApi({
    url: `/cat_residente/${id}/`,
    method: "GET",
  });

const storeResident = (resident) =>
  fetchApi({
    url: "/cat_residente/",
    method: "POST",
    data: resident,
  });

const updateResident = (resident) =>
  fetchApi({
    url: `/cat_residente/${resident.id_residente}/`,
    method: "PUT",
    data: resident,
  });
const deleteResident = (id_residente) =>
  fetchApi({
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
