import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default {
  title: "Theme/Shadows",
  component: Box,
};

export const ShadowsExample = () => {
  const theme = useTheme();

  return (
    <>
      {theme.shadows.map((shadow, index) => (
        <Box
          key={index}
          sx={{
            boxShadow: shadow,
            p: 2,
            marginBottom: 4,
            borderRadius: 1,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="body2">boxShadow: {index}: {shadow}</Typography>
        </Box>
      ))}
    </>
  );
};
