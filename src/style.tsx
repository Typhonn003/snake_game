import { styled } from "@stitches/react";

export const Canvas = styled("canvas", {
  border: "1px solid #424242",
  background: "black",
  width: "100%",
  maxWidth: "600px"
});

export const Div = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "20px",
  background: "#424242",
  fontFamily: "sans-serif",
  borderRadius: "10px"
});
