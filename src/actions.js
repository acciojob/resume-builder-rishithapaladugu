
export const updateProfile = (data) => ({
  type: "UPDATE_PROFILE",
  payload: data,
});
export const addEducation = (edu) => ({ type: "ADD_EDUCATION", payload: edu });
export const deleteEducation = (index) => ({
  type: "DELETE_EDUCATION",
  payload: index,
});
export const addSkill = (skill) => ({ type: "ADD_SKILL", payload: skill });
export const deleteSkill = (index) => ({
  type: "DELETE_SKILL",
  payload: index,
});
export const addProject = (project) => ({
  type: "ADD_PROJECT",
  payload: project,
});
export const deleteProject = (index) => ({
  type: "DELETE_PROJECT",
  payload: index,
});
export const addSocial = (link) => ({ type: "ADD_SOCIAL", payload: link });
export const setPage = (page) => ({ type: "SET_PAGE", payload: page });
