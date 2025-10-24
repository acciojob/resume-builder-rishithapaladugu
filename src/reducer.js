
const initialState = {
  profile: { fname: "", lname: "", phone: "", address: "", url: "" },
  education: [],
  skills: [],
  projects: [],
  socials: [],
  page: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return { ...state, profile: { ...state.profile, ...action.payload } };
    case "ADD_EDUCATION":
      return { ...state, education: [...state.education, action.payload] };
    case "DELETE_EDUCATION":
      return {
        ...state,
        education: state.education.filter((_, i) => i !== action.payload),
      };
    case "ADD_SKILL":
      return { ...state, skills: [...state.skills, action.payload] };
    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((_, i) => i !== action.payload),
      };
    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter((_, i) => i !== action.payload),
      };
    case "ADD_SOCIAL":
      return { ...state, socials: [...state.socials, action.payload] };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
