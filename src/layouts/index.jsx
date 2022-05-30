import React from "react";
import { Box } from "@mui/material";
import MenuLeft from "../Components/MenuLeft";
import MenuRight from "../Components/MenuRight";

const TempletLayout = ({ Children }) => {
  return (
    <Box display="flex" margin={0}>
      <MenuLeft marginX={15}>
        <Box>
          <h1>Profile</h1>
        </Box>
      </MenuLeft>

      <Box marginX={15} width={970}>
        {Children}
      </Box>

      <MenuRight marginX={15}>
        <h3>Icon</h3>
      </MenuRight>
    </Box>
  );
};

export default TempletLayout;
