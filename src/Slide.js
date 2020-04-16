import React from "react";
import PropTypes from "prop-types";

const Slide = ({ property }) => {
  const { idx, img } = property;
  return (
    <div id={`slide-${idx}`} className="slide">
      <img src={img} alt={""} />
    </div>
  );
};

Slide.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Slide;
