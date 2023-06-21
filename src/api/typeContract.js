import fetchApi from "./fetchApi";
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchTypeContracts = () =>
  addHeader({
    url: "/cat-tipo-contrato/",
    method: "GET",
  });

export { fetchTypeContracts };
