import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilFont = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,20H20V3a1,1,0,0,0-1-1H15.5a1,1,0,0,0-.86.5L4.43,20H3a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2H6.74l3.5-6H18v6H17a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-3-8H11.41l4.66-8H18Z" />
    </Svg>
  );
};

UilFont.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilFont;
