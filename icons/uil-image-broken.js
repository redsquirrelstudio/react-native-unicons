import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilImageBroken = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21.71,14.54,19.21,12a1,1,0,0,0-1.42,0L15,14.84,12.21,12a1,1,0,0,0-1.42,0L8.5,14.34,6.21,12a1,1,0,0,0-1.42,0l-2.5,2.5a1,1,0,0,0-.21.33,1,1,0,0,0-.08.38V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15.25a1,1,0,0,0-.08-.38A1,1,0,0,0,21.71,14.54ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15.66l1.5-1.5,2.29,2.3a1,1,0,0,0,1.42,0l2.29-2.3L14.29,17a1,1,0,0,0,1.42,0l2.79-2.8,1.5,1.5ZM19,2H5A3,3,0,0,0,2,5v5.26a1.17,1.17,0,0,0,0,.27s0,.07,0,.1a1,1,0,0,0,1.66.31L5.5,9.16l2.29,2.3a1,1,0,0,0,1.42,0l2.29-2.3L14.29,12a1,1,0,0,0,1.42,0l2.79-2.8,1.77,1.78a1,1,0,0,0,1.66-.31.28.28,0,0,0,0-.09.88.88,0,0,0,.06-.28V5A3,3,0,0,0,19,2Zm1,5.84L19.21,7a1,1,0,0,0-1.42,0L15,9.84,12.21,7a1,1,0,0,0-1.42,0L8.5,9.34,6.21,7A1,1,0,0,0,4.79,7L4,7.84V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" />
    </Svg>
  );
};

UilImageBroken.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilImageBroken;
