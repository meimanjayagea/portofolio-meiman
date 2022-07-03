import React from "react";
import { Box } from "@mui/material";

const MenuLeft = ({Children}) => {
  return (
      <Box 
      marginRight={15} 
      // maxWidth={305} 
      height={1315}
      style={{border: "1px solid #000000"}}>
        {Children}
      </Box>
  );
};

export default MenuLeft;
