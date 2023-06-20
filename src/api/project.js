import fetchApi from "./fetchApi";

const fetchProjects = () =>
  fetchApi({
    url: "proyecto/",
    method: "GET",
  });
const fetchProjectsActive = () =>
  fetchApi({
    url: "proyecto/",
    method: "GET",
    params: {
      estatus_proyecto: 3,
    },
  });

const fetchProjectById = (id) =>
  fetchApi({
    url: `proyecto/${id}/`,
    method: "GET",
  });

const storeProject = (project) =>
  fetchApi({
    url: "proyecto/",
    method: "POST",
    data: project,
  });

const updateProject = (project) =>
  fetchApi({
    url: `proyecto/${project.id_proyecto}/`,
    method: "PUT",
    data: project,
  });

const deleteProject = (id) =>
  fetchApi({
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
