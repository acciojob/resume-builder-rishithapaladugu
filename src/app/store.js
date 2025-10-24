
import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "../features/profile/profileSlice";
import educationReducer from "../features/education/educationSlice";
import skillsReducer from "../features/skills/skillsSlice";
import projectsReducer from "../features/projects/projectsSlice";
import socialReducer from "../features/social/socialSlice";
import resumeReducer from "../features/resume/resumeSlice"; // ← NEW

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    education: educationReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    social: socialReducer,
    resume: resumeReducer, // ← NEW
  },
});
