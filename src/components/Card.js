import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";

export default function Card({ title, img, subtitle, description, price }) {
  if (description.length > 100) {
    description = description.substring(0, 100) + "...";
  }
  if (title.length > 20) {
    title = title.substring(0, 20) + "...";
  }

  return (
    <Box
      sx={{
        width: "300px",
        height: "500px",
        bgcolor: "gray.200",
        borderRadius: "15px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.14)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "100%",
          aspectRatio: "1/0.8",
          objectFit: "contain",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.11)",
        }}
        src={img}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "700", color: "#2F343A" }}>
            {title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#6C757D" }}>
            {subtitle}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "500", color: "#0A58CA" }}>
            ${price}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "0 12px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#6C757D", fontWeight: "300" }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          right: "0",
          padding: "12px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button variant="contained" color="primary">
          Order Now
        </Button>
      </Box>
    </Box>
  );
}
