/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Card = ({ header, title, description }) => {
  return (
    <div className="card pb-3 mb-4">
      <h5 className="card-header">{header}</h5>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="card-text">{description}</span>
      </div>
    </div>
  );
};

export default Card;
