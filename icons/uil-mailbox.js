import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilMailbox = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M8,12h2a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Zm9-6H12V4h1a1,1,0,0,0,0-2H11a1,1,0,0,0-1,1V6H7a4,4,0,0,0-4,4v6a1,1,0,0,0,1,1h6v4a1,1,0,0,0,2,0V17h8a1,1,0,0,0,1-1V10A4,4,0,0,0,17,6Zm-4,4v5H5V10A2,2,0,0,1,7,8h6.56A3.91,3.91,0,0,0,13,10Zm6,5H15V10a2,2,0,0,1,4,0Z" />
    </Svg>
  );
};

UilMailbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilMailbox;
