import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default {
  title: "Theme/Breakpoints",
  component: Box,
};

export const BreakpointsExample = () => {
  const theme = useTheme();
  const breakpoints = theme.breakpoints.values;

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 2,
        width: {
          xs: "100%",
          sm: breakpoints.sm / 2, // 50% від sm
          md: breakpoints.md / 2, // 50% від md
          lg: breakpoints.lg / 2, // 50% від lg
          xl: breakpoints.xl / 2, // 50% від xl
        },
      }}
    >
      <Typography variant="h6">Breakpoints</Typography>
      <Typography variant="body2">
        <ul>
          {Object.entries(breakpoints).map(([key, value]) => (
            <Box></Box>
          ))}
        </ul>
      </Typography>
    </Box>
  );
};
