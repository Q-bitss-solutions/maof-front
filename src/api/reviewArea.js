import fetchApi from "./fetchApi"
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchReviewAreas = () => addHeader({
  url: '/area-revisora/',
  method: 'GET',
})

const fetchReviewAreaById = (id) => addHeader({
  url: `/area-revisora/${id}/`,
  method: 'GET',
})

const storeReviewArea = (reviewArea) => addHeader({
  url: '/area-revisora/',
  method: 'POST',
  data: reviewArea,
})

const updateReviewArea = (reviewArea) => addHeader({
  url: `/area-revisora/${reviewArea.clave_unidad}/`,
  method: 'PUT',
  data: reviewArea,
})

export {
  fetchReviewAreas,
  fetchReviewAreaById,
  storeReviewArea,
  updateReviewArea,
}
