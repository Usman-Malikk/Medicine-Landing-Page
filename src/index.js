import { Box } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App/app";
import './index.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
    <Box sx={{ width: { lg: "1400px", xs: "100%" } }}>
      <App />
    </Box>
  </Box>
);
