import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="card-j d-flex text-center justify-content-center">
          <span className="card1-number card-i">
            <i className="far fa-clock"></i>
          </span>
        </div>
        <div className="card d-flex text-center justify-content-center">
          <span className="card1-number card-n">{props.one}</span>
        </div>
        <div className="card d-flex text-center justify-content-center">
          <span className="card2-number  card-n">{props.two}</span>
        </div>
        <div className="card d-flex text-center justify-content-center">
          <span className="card3-number  card-n">{props.three}</span>
        </div>
        <div className="card d-flex text-center justify-content-center">
          <span className="card4-number  card-n">{props.four}</span>
        </div>
        <div className="card d-flex text-center justify-content-center">
          <span className="card5-number  card-n">{props.five}</span>
        </div>
        <div className="card d-flex text-center justify-content-center">
          <span className="card6-number  card-n">{props.six}</span>
        </div>
      </div>
      <div className="row mt-5 ml-1 justify-content-center">
        <button className="btn-c " id="btn-pause" onClick={props.pause}>
          Pause
        </button>
        <button className="btn-c" id="btn-reset" onClick={props.reset}>
          Reset
        </button>
        <button className="btn-c" id="btn-resume" onClick={props.resume}>
          Resume
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  one: PropTypes.number,
  two: PropTypes.number,
  three: PropTypes.number,
  four: PropTypes.number,
  five: PropTypes.number,
  six: PropTypes.number,
  pause: PropTypes.func,
  reset: PropTypes.func,
  resume: PropTypes.func,
};

export default Card;
