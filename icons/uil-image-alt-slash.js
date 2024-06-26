import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilImageAltSlash = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21.71,20.29l-.93-.93-.09-.1-.06-.07-.5-.5L20,18.62l-5.18-5.2-.09-.08-3.2-3.21L11.43,10,3.71,2.29A1,1,0,0,0,2.29,3.71l1,1A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a2.9,2.9,0,0,0,1.27-.31l0,0h0s0,0,.05,0l.95,1a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM5,6.41,8.24,9.65a2.84,2.84,0,0,0-.67.48L5,12.71ZM6,19a1,1,0,0,1-1-1V15.54l4-4a.81.81,0,0,1,1.1,0L17.59,19ZM9.66,5H18a1,1,0,0,1,1,1v5.94l0,0a1,1,0,1,0-1.42,1.42l1.74,1.74a1,1,0,0,0,1.42,0,1,1,0,0,0,.29-.72h0V6a3,3,0,0,0-3-3H9.66a1,1,0,0,0,0,2Z" />
    </Svg>
  );
};

UilImageAltSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilImageAltSlash;
