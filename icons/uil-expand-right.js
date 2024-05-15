import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilExpandRight = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M8.5,14.1L4,18.6V17c0-0.6-0.4-1-1-1s-1,0.4-1,1v4c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.5,0.5C2.7,22,2.9,22,3,22h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H5.4l4.5-4.5c0.4-0.4,0.4-1,0-1.4C9.5,13.7,8.9,13.7,8.5,14.1z M21.7,2.3C21.7,2.3,21.7,2.3,21.7,2.3C21.5,2.1,21.2,2,21,2h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h1.6l-4.5,4.5c-0.4,0.4-0.4,1,0,1.4l0,0c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3L20,5.4V7c0,0.6,0.4,1,1,1s1-0.4,1-1V3C22,2.8,21.9,2.5,21.7,2.3z M15.5,14.1L9.9,8.5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l5.7,5.7c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C15.9,15.2,15.9,14.5,15.5,14.1C15.5,14.1,15.5,14.1,15.5,14.1z" />
    </Svg>
  );
};

UilExpandRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilExpandRight;
