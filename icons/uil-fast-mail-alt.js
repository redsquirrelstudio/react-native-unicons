import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilFastMailAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M15.69,9a2.93,2.93,0,0,0-1-1.71v0h0a3,3,0,0,0-2-.74H4.8A3,3,0,0,0,2.5,7.57h0l0,0,0,.06A3,3,0,0,0,1.84,10l.88,5a3,3,0,0,0,3,2.48h7.94a3,3,0,0,0,2.29-1.07A3,3,0,0,0,16.57,14ZM12.28,8.5,9.94,11.14a1,1,0,0,1-1.38.11L5.17,8.5Zm2.1,6.64a1,1,0,0,1-.76.36H5.68a1,1,0,0,1-1-.83L3.87,10,7.3,12.8a3,3,0,0,0,4.14-.34L13.8,9.8l.8,4.53A1,1,0,0,1,14.38,15.14Zm6.83-4.64h-2a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm0-2a1,1,0,0,0,0-2h-3a1,1,0,0,0,0,2Z" />
    </Svg>
  );
};

UilFastMailAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilFastMailAlt.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilFastMailAlt;