import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills"; 
import Projects from "./Projects";  
import SocialMedia from "./SocialMedia";  
import ResumePreview from "./ResumePreview"; 
import { nextPage, prevPage } from "./actions"; 

const Form = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.currentPage);

  const sections = [
    { id: 1, component: <Profile /> },
    { id: 2, component: <Education /> },
    { id: 3, component: <Skills /> },
    { id: 4, component: <Projects /> },
    { id: 5, component: <SocialMedia /> },
    { id: 6, component: <ResumePreview /> },
  ];

  return (
    <div>
      <h1>RESUME GENERATOR</h1> {/* Heading for Cypress */}

      {sections.map((section) => (
        <div
          key={section.id}
          style={{
            visibility: page === section.id ? "visible" : "hidden",
            height: page === section.id ? "auto" : 0,
            overflow: "hidden",
          }}
        >
          {section.component}
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        {page > 1 && (
          <button id="back" onClick={() => dispatch(prevPage())}>
            Back
          </button>
        )}
        {page < sections.length && (
          <button id="next" onClick={() => dispatch(nextPage())}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <Form />
  </Provider>
);

export default App;
