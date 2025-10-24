
import React from "react";
import { connect } from "react-redux";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import FinalResume from "./components/FinalResume";
import NavigationButtons from "./components/NavigationButtons";
import "./styles/App.css";

const App = ({ currentPage }) => {
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Profile />;
      case 2:
        return <Education />;
      case 3:
        return <Skills />;
      case 4:
        return <Projects />;
      case 5:
        return <SocialMedia />;
      case 6:
        return <FinalResume />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="app">
      <h1>Resume Builder</h1>
      {renderPage()}
      <NavigationButtons />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.resume.currentPage,
});

export default connect(mapStateToProps)(App);
