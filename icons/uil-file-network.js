import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilFileNetwork = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,19H14.82A3,3,0,0,0,13,17.18V15h3a3,3,0,0,0,3-3V8s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,12.05,1H8A3,3,0,0,0,5,4v8a3,3,0,0,0,3,3h3v2.18A3,3,0,0,0,9.18,19H3a1,1,0,0,0,0,2H9.18a3,3,0,0,0,5.64,0H21a1,1,0,0,0,0-2ZM13,4.41,15.59,7H14a1,1,0,0,1-1-1ZM8,13a1,1,0,0,1-1-1V4A1,1,0,0,1,8,3h3V6a3,3,0,0,0,3,3h3v3a1,1,0,0,1-1,1Zm4,8a1,1,0,1,1,1-1A1,1,0,0,1,12,21Z" />
    </Svg>
  );
};

UilFileNetwork.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilFileNetwork.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilFileNetwork;