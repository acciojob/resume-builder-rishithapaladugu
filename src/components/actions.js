// Navigation
export const nextPage = () => ({ type: "NEXT_PAGE" });
export const prevPage = () => ({ type: "PREV_PAGE" });

// Profile
export const setProfile = (profile) => ({ type: "SET_PROFILE", payload: profile });

// Education
export const addEducation = (edu) => ({ type: "ADD_EDUCATION", payload: edu });
export const deleteEducation = (index) => ({ type: "DELETE_EDUCATION", payload: index });

// Skills
export const addSkill = (skill) => ({ type: "ADD_SKILL", payload: skill });
export const deleteSkill = (index) => ({ type: "DELETE_SKILL", payload: index });

// Projects
export const addProject = (project) => ({ type: "ADD_PROJECT", payload: project });
export const deleteProject = (index) => ({ type: "DELETE_PROJECT", payload: index });

// Social Media
export const addSocial = (link) => ({ type: "ADD_SOCIAL", payload: link });
