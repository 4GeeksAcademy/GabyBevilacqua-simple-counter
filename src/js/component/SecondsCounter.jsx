import React from "react";
import propTypes from "prop-types";

const SecondsCounter = ({ digits }) => {

  return (
    <div className="d-flex justify-content-center">
      <div className="icon-clock me-3">
        <i className="far fa-clock fa-3x text-light"></i>
      </div>
      <div className="card bg-dark text-white mx-2">
        <div className="card-body d-flex justify-content-center align-items-center">
          <h1 className="card-title">{digits[0]}</h1>
        </div>
      </div>
      <div className="card bg-dark text-white mx-2">
        <div className="card-body d-flex justify-content-center align-items-center">
          <h1 className="card-title">{digits[1]}</h1>
        </div>
      </div>
      <div className="card bg-dark text-white mx-2">
        <div className="card-body d-flex justify-content-center align-items-center">
          <h1 className="card-title">{digits[2]}</h1>
        </div>
      </div>
      <div className="card bg-dark text-white mx-2">
        <div className="card-body d-flex justify-content-center align-items-center">
          <h1 className="card-title">{digits[3]}</h1>
        </div>
      </div>
      <div className="card bg-dark text-white mx-2">
        <div className="card-body d-flex justify-content-center align-items-center">
          <h1 className="card-title">{digits[4]}</h1>
        </div>
      </div>
      <div className="card bg-dark text-white mx-2">
        <div className="card-body d-flex justify-content-center align-items-center">
          <h1 className="card-title">{digits[5]}</h1>
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
