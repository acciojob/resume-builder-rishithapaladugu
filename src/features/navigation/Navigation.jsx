
import React from "react";

export default function Navigation({ onNext, onBack, onSaveContinue }) {
  return (
    <div className="nav">
      {onBack && (
        <button id="back" onClick={onBack}>
          Back
        </button>
      )}
      {onNext && (
        <button id="next" onClick={onNext}>
          Next
        </button>
      )}
      {onSaveContinue && (
        <button id="save_continue" onClick={onSaveContinue}>
          Save & Continue
        </button>
      )}
    </div>
  );
}
