import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const Uil16Plus = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M18,5h1V6a1,1,0,0,0,2,0V5h1a1,1,0,0,0,0-2H21V2a1,1,0,0,0-2,0V3H18a1,1,0,0,0,0,2Zm3.6,4a1,1,0,0,0-.78,1.18,9,9,0,1,1-7-7,1,1,0,1,0,.4-2A10.8,10.8,0,0,0,12,1,11,11,0,1,0,23,12a10.8,10.8,0,0,0-.22-2.2A1,1,0,0,0,21.6,9ZM7,7V17a1,1,0,0,0,2,0V7A1,1,0,0,0,7,7Zm4,2v6a3,3,0,0,0,3,3h1a3,3,0,0,0,3-3V14a3,3,0,0,0-3-3H13V9a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H14A3,3,0,0,0,11,9Zm4,4a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1V13Z" />
    </Svg>
  );
};

Uil16Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Uil16Plus;
