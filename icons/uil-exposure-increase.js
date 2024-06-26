import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilExposureIncrease = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M11,7H10V6A1,1,0,0,0,8,6V7H7A1,1,0,0,0,7,9H8v1a1,1,0,0,0,2,0V9h1a1,1,0,0,0,0-2Zm2,11h4a1,1,0,0,0,0-2H13a1,1,0,0,0,0,2ZM19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM4,18.59V5A1,1,0,0,1,5,4H18.59ZM20,19a1,1,0,0,1-1,1H5.41L20,5.41Z" />
    </Svg>
  );
};

UilExposureIncrease.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilExposureIncrease;
