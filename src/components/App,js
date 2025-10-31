
import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../store/store';
import { setCurrentPage, saveResume, loadResume } from '../store/actions';
import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import SocialMedia from './SocialMedia';
import ResumePreview from './ResumePreview';
import Navigation from './Navigation';
import './../styles/App.css';

const AppContent = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.currentPage);

  useEffect(() => {
    // Load saved resume data on app start
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      dispatch(loadResume(JSON.parse(savedData)));
    }
  }, [dispatch]);

  const renderCurrentPage = () => {
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
        return <ResumePreview />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="resume-builder">
      <div className="header">
        <h1>Resume Builder</h1>
        <div className="progress-bar">
          <div className="progress-step" style={{ width: `${(currentPage / 6) * 100}%` }}></div>
        </div>
        <p>Step {currentPage} of 6</p>
      </div>
      
      <div className="main-content">
        {renderCurrentPage()}
      </div>
      
      <Navigation />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
