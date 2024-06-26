import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilRainbow = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M5,12a1,1,0,0,0,0,2,5,5,0,0,1,5,5,1,1,0,0,0,2,0A7,7,0,0,0,5,12ZM5,4A1,1,0,0,0,5,6,13,13,0,0,1,18,19a1,1,0,0,0,2,0A15,15,0,0,0,5,4ZM5,8a1,1,0,0,0,0,2,9,9,0,0,1,9,9,1,1,0,0,0,2,0A11,11,0,0,0,5,8Z" />
    </Svg>
  );
};

UilRainbow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilRainbow;
