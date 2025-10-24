import React, { useState } from "react";
import Profile from "../features/profile/Profile";
import Education from "../features/education/Education";
import Skills from "../features/skills/Skills";
import Projects from "../features/projects/Projects";
import Social from "../features/social/Social";
import Resume from "../features/resume/Resume";

const pageComponents = [
  <Profile />,
  <Education />,
  <Skills />,
  <Projects />,
  <Social onNext={() => {}} />, // placeholder, filled below
  <Resume />,
];

export default function App() {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i < pageComponents.length - 1 ? i + 1 : i));
  const back = () => setIdx((i) => (i > 0 ? i - 1 : i));

  // current page with correct props
  const CurrentPage = (() => {
    switch (idx) {
      case 0:
        return <Profile />;
      case 1:
        return <Education />;
      case 2:
        return <Skills />;
      case 3:
        return <Projects />;
      case 4:
        return <Social onNext={next} />; // ← real next prop
      case 5:
        return <Resume />;
      default:
        return <Profile />;
    }
  })();

  return (
    <div className="container">
      {CurrentPage}

      {/* global nav buttons */}
      <div className="nav">
        {idx > 0 && (
          <button id="back" onClick={back}>
            Back
          </button>
        )}
        {idx < 4 && (
          <>
            <button id="next" onClick={next}>
              Next
            </button>
            <button id="save_continue" onClick={next}>
              Save & Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
}
