import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilLaptopCloud = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M4.5,10H10a3,3,0,0,0,1.07-5.8,4,4,0,0,0-7.48,1A2.5,2.5,0,0,0,4.5,10Zm0-3a1,1,0,0,0,1-1,2,2,0,0,1,3.89-.64,1,1,0,0,0,.78.66A1,1,0,0,1,11,7a1,1,0,0,1-1,1H4.5a.5.5,0,0,1,0-1ZM21,16H20V9a3,3,0,0,0-3-3H16a1,1,0,0,0,0,2h1a1,1,0,0,1,1,1v7H6V13a1,1,0,0,0-2,0v3H3a1,1,0,0,0-1,1v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V17A1,1,0,0,0,21,16Zm-1,3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V18H20Z" />
    </Svg>
  );
};

UilLaptopCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilLaptopCloud;
