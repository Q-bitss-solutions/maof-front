import fetchApi from "./fetchApi";

const fetchReviewAreas = () =>
  fetchApi({
    url: "/area-revisora/",
    method: "GET",
  });

const fetchReviewAreaById = (id) =>
  fetchApi({
    url: `/area-revisora/${id}/`,
    method: "GET",
  });

const storeReviewArea = (reviewArea) =>
  fetchApi({
    url: "/area-revisora/",
    method: "POST",
    data: reviewArea,
  });

const updateReviewArea = (reviewArea) =>
  fetchApi({
    url: `/area-revisora/${reviewArea.clave_unidad}/`,
    method: "PUT",
    data: reviewArea,
  });

export {
  fetchReviewAreas,
  fetchReviewAreaById,
  storeReviewArea,
  updateReviewArea,
};
