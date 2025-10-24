import React from "react";
import { connect } from "react-redux";
import { nextPage, prevPage } from "../actions";

const NavigationButtons = ({ currentPage, nextPage, prevPage, isLastPage }) => {
  return (
    <div className="navigation-buttons">
      {currentPage > 1 && (
        <button id="back" onClick={prevPage}>
          Back
        </button>
      )}
      {!isLastPage ? (
        <button id="next" onClick={nextPage}>
          Next
        </button>
      ) : (
        <button id="save_continue">Save & Continue</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.resume.currentPage,
  isLastPage: state.resume.currentPage === 6,
});

export default connect(mapStateToProps, { nextPage, prevPage })(
  NavigationButtons
);
