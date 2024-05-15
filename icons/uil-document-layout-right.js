import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilDocumentLayoutRight = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M13,18H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2ZM3,8h8a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm0,4h8a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM21,4H15a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V5A1,1,0,0,0,21,4Zm-1,6H16V6h4Z" />
    </Svg>
  );
};

UilDocumentLayoutRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default UilDocumentLayoutRight;
