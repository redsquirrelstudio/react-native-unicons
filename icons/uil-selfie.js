import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilSelfie = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V18H17Zm-5-5a3,3,0,0,1,2.82,2H9.18A3,3,0,0,1,12,14Zm-1-3a1,1,0,1,1,1,1A1,1,0,0,1,11,11Zm6,5h-.1a5,5,0,0,0-2.42-3.32A3,3,0,0,0,15,11a3,3,0,0,0-6,0,3,3,0,0,0,.52,1.68A5,5,0,0,0,7.1,16H7V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1ZM12,5a1,1,0,1,0,1,1A1,1,0,0,0,12,5Z" />
    </Svg>
  );
};

UilSelfie.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilSelfie;
