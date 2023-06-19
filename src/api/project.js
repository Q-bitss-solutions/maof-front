import fetchApi from "./fetchApi";
import { getHeaders } from "../utils/headerToken";
const header = getHeaders();

const addHeader = (request) => {
  const headers = header;
  return fetchApi({ ...request, headers });
};

const fetchProjects = () =>
  addHeader({
    url: "proyecto/",
    method: "GET",
  });
const fetchProjectsActive = () =>
  addHeader({
    url: "proyecto/",
    method: "GET",
    params: {
      estatus_proyecto: 3,
    },
  });

const fetchProjectById = (id) =>
  addHeader({
    url: `proyecto/${id}/`,
    method: "GET",
  });

const storeProject = (project) =>
  addHeader({
    url: "proyecto/",
    method: "POST",
    data: project,
  });

const updateProject = (project) =>
  addHeader({
    url: `proyecto/${project.id_proyecto}/`,
    method: "PUT",
    data: project,
  });

const deleteProject = (id) =>
  addHeader({
    url: `proyecto/${id}/`,
    method: "DELETE",
  });

export {
  fetchProjects,
  fetchProjectsActive,
  fetchProjectById,
  storeProject,
  updateProject,
  deleteProject,
};
