import React from "react";
import { Box } from "@mui/material";

const MenuRight = ({ Children }) => {
  return (
    <>
      <Box 
      marginLeft={15} 
      // maxWidth={108} 
      width={108} 
      style={{border: "1px solid #000000"}}
      >
        {Children}
      </Box>
    </>
  );
};

export default MenuRight;
