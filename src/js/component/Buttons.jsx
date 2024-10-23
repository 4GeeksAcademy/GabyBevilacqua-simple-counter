import React from "react";

const Buttons = ({ handleReset, handleStop, handleResume }) => {
    return (
      <div className="button text-center mt-4">
        <button
          id="btn-reset"
          className="btn btn-secondary mb-2 me-2 border border-light"
          onClick={handleReset}
        >
          Reiniciar
        </button>
        <button
          id="btn-stop"
          className="btn btn-secondary mb-2 me-2 border border-light"
          onClick={handleStop}
        >
          Parar
        </button>
        <button
          id="btn-resume"
          className="btn btn-secondary mb-2 border border-light"
          onClick={handleResume}
        >
          Resumir
        </button>
      </div>
    );
  };

export default Buttons; 