import React from "react";
import PropTypes from "prop-types";
let CaraouselSlides = ({ image, children }) => {
  return (
    <div>
      {children}
      <img className="caraousel-image" src={image} />
    </div>
  );
};
CaraouselSlides.propTypes = {
  children: PropTypes.element.isRequired,
};
export default CaraouselSlides;
