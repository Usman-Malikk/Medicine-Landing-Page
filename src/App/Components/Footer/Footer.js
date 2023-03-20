import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../Assets/Colors/colors";
import { Images } from "../../Assets/Images/Images";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box
      sx={{
        background: Colors.Primary,
        color: "white",
        padding: "50px 20px",
      }}
    >
      <Typography variant="h2" fontWeight={"600"}>
        Scriptio
      </Typography>
      <Typography variant="p" sx={{ color: "white", m: "20px 0px" }}>
        Scriptio is not a pharmacy or a platform for selling medications
        directly to the public. We are contracted with licensed pharmacies in
        the UAE, these pharmacies handle and process the prescriptions and/or
        medications/items requests of users according to UAE healthcare laws and
        regulations. We do not deal with any controlled/semi-controlled
        medications
      </Typography>
      <Box
        sx={{ display: "flex", gap: "10px", justifyContent: "end", mt: "50px" }}
      >
        <FacebookIcon sx={{ cursor: "pointer" }} />
        <InstagramIcon sx={{ cursor: "pointer" }} />
        <TwitterIcon sx={{ cursor: "pointer" }} />
        <WhatsAppIcon sx={{ cursor: "pointer" }} />
        <EmailIcon sx={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
}

export default Footer;
