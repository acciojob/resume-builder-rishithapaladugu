import { createStore } from "redux";

// Initial state
const initialState = {
  currentPage: 1,
  profile: {},
  education: [],
  skills: [],
  projects: [],
  social: []
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Navigation
    case "NEXT_PAGE":
      return { ...state, currentPage: state.currentPage + 1 };
    case "PREV_PAGE":
      return { ...state, currentPage: state.currentPage - 1 };

    // Profile
    case "SET_PROFILE":
      return { ...state, profile: action.payload };

    // Education
    case "ADD_EDUCATION":
      return { ...state, education: [...state.education, action.payload] };
    case "DELETE_EDUCATION":
      return { ...state, education: state.education.filter((_, i) => i !== action.payload) };

    // Skills
    case "ADD_SKILL":
      return { ...state, skills: [...state.skills, action.payload] };
    case "DELETE_SKILL":
      return { ...state, skills: state.skills.filter((_, i) => i !== action.payload) };

    // Projects
    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    case "DELETE_PROJECT":
      return { ...state, projects: state.projects.filter((_, i) => i !== action.payload) };

    // Social
    case "ADD_SOCIAL":
      return { ...state, social: [...state.social, action.payload] };

    default:
      return state;
  }
};

// Create store
export const store = createStore(reducer);
