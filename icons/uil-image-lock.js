import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilImageLock = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M20,5.18V4a3,3,0,0,0-6,0V5.18A3,3,0,0,0,12,8v2a3,3,0,0,0,3,3h4a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5.18ZM16,4a1,1,0,0,1,2,0V5H16Zm4,6a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Zm-1,5a1,1,0,0,0-1,1v3a.89.89,0,0,1-.18.53L9.41,11.12a2.86,2.86,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h5a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16A1,1,0,0,0,19,15ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0L15.46,20Z" />
    </Svg>
  );
};

UilImageLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilImageLock;
