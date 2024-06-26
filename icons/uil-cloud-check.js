import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCloudCheck = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M14.29,14.19,11,17.48,9.71,16.19a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l2,2a1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,0-1.41A1,1,0,0,0,14.29,14.19Zm4.13-5.87a7,7,0,0,0-13.36,1.9,4,4,0,0,0-.38,7.65A1,1,0,1,0,5.32,16,2,2,0,0,1,4,14.1a2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.6,1,1,0,0,0,.78.66A3,3,0,0,1,17.75,16,1,1,0,0,0,18,18l.25,0a5,5,0,0,0,.17-9.62Z" />
    </Svg>
  );
};

UilCloudCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilCloudCheck;
