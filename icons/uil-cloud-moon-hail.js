import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCloudMoonHail = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M9.21,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33A.84.84,0,0,0,7.5,17a1,1,0,0,0,1.38.92,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1.15,1.15,0,0,0,9.21,16.29Zm0,4a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33,1,1,0,1,0,1.84,0A1.15,1.15,0,0,0,9.21,20.29Zm3.85-6.12-.18-.09L12.7,14a1,1,0,0,0-.58.06.93.93,0,0,0-.33.21,1,1,0,0,0-.29.71,1,1,0,0,0,.29.71,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,13.5,15a1.05,1.05,0,0,0-.29-.71Zm.15,4.12a1,1,0,0,0-1.09-.21.9.9,0,0,0-.54.54,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1.15,1.15,0,0,0,13.21,18.29ZM21.7,7.07a1,1,0,0,0-.94-.26,3,3,0,0,1-.65.08,3,3,0,0,1-3-3,3,3,0,0,1,.08-.65A1,1,0,0,0,16,2a4.93,4.93,0,0,0-3.83,4.21A6.24,6.24,0,0,0,10.5,6a6,6,0,0,0-5.94,5.13,3.5,3.5,0,0,0-.46,6.58,1.14,1.14,0,0,0,.4.08,1,1,0,0,0,.4-1.92A1.48,1.48,0,0,1,4,14.5,1.5,1.5,0,0,1,5.5,13a1,1,0,0,0,1-1,4,4,0,0,1,4-4,4.06,4.06,0,0,1,2.19.66h0a4,4,0,0,1,1.58,2,1,1,0,0,0,.78.67A2.32,2.32,0,0,1,16,15.61a1,1,0,0,0,1.1,1.68A4.34,4.34,0,0,0,19,13.67a4.23,4.23,0,0,0-.49-2A4.94,4.94,0,0,0,22,8,1,1,0,0,0,21.7,7.07ZM17.11,9.89a2.72,2.72,0,0,1-.42,0A4.6,4.6,0,0,0,16,9.54a6.06,6.06,0,0,0-1.82-2.28c0-.12,0-.25,0-.37a3,3,0,0,1,1.05-2.28,5,5,0,0,0,4.23,4.23A3,3,0,0,1,17.11,9.89Z" />
    </Svg>
  );
};

UilCloudMoonHail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilCloudMoonHail;
