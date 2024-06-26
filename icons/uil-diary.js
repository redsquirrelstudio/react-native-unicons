import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilDiary = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M17,2H5A1,1,0,0,0,4,3V19a1,1,0,0,0,1,1H6v1a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V20h9a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2ZM14,18H6V4h8Zm4-1a1,1,0,0,1-1,1H16V4h1a1,1,0,0,1,1,1Z" />
    </Svg>
  );
};

UilDiary.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilDiary;
