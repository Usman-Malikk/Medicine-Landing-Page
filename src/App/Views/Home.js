import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../Assets/Colors/colors";
import Header from "../Components/Header/Header";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import { Images } from "../Assets/Images/Images";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <Box sx={{ overflow: "hidden", position: "relative" }}>
      <Header />
      {/* banner Section */}
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            mt: "100px",
            padding: "0px 90px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <Typography
            variant="h2"
            textAlign={"center"}
            sx={{ fontWeight: "600" }}
          >
            Everything you need to grow your business
          </Typography>
          <Typography
            variant="p"
            textAlign={"center"}
            sx={{ fontSize: "20px" }}
          >
            Medicines are chemicals or compounds used to cure, halt, or prevent
            disease; ease symptoms; or help in the diagnosis of illnesses.
            Advances in medicines have enabled doctors to cure many diseases and
            save lives.{" "}
          </Typography>
          <Button
            sx={{
              background: Colors.Secondary,
              color: "white",
              padding: "10px 30px",
              fontSize: "12px",
              borderRadius: "10px",
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
              // fontWeight: "600",
              ":hover": { color: Colors.Secondary },
            }}
          >
            Get Started Today
          </Button>
          <Box sx={{ display: "flex", gap: "40px", color: Colors.Secondary }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <CreditCardIcon
                sx={{
                  background: Colors.Bglight,
                  padding: "10px",
                  borderRadius: "10px",
                }}
              />
              <Typography>No Credit Card needed </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <RocketLaunchIcon
                sx={{
                  background: Colors.Bglight,
                  padding: "10px",
                  borderRadius: "10px",
                }}
              />
              <Typography>Free 3 months trial </Typography>
            </Box>{" "}
          </Box>
        </Box>
      </Box>
      {/* Image Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "50px",
        }}
      >
        <CardMedia
          component={"img"}
          sx={{
            width: "600px",
            borderRadius: "10px",
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
          image={
            "https://media.istockphoto.com/id/1217732380/photo/delivery-services-courier-during-the-coronavirus-pandemic-courier-wearing-medical-mask-and.jpg?b=1&s=170667a&w=0&k=20&c=ZreC2y_IWV2rYwR9DZHO0M6e53r64huGhTRVMQJRmCw="
          }
        />
      </Box>
      {/* Features Section */}
      <Box
        sx={{
          margin: "50px 0px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0px 40px",
          boxSizing: "border-box",
          gap: "30px",
          overflow: "hidden",
        }}
      >
        <Box
          borderRadius={"10px"}
          sx={{
            background: " #bbf7d0",
            padding: "10px 30px",
            color: "rgb(22 163 74)",
            fontWeight: "600",
          }}
        >
          Reach goals that matter
        </Box>
        <Typography variant="h3" fontWeight={"600"}>
          One App, unlimited solution
        </Typography>{" "}
        <Typography variant="h6" fontWeight={"500"} mb="40px" color="#9ba9b4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.{" "}
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs="6">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: Colors.purple,
                  fontFamily: "Architects Daughter, cursive",
                }}
              >
                More speed. Less spend
              </Typography>
              <Typography variant="h4" fontWeight={"600"}>
                Keep everything on schedule
              </Typography>
              <Typography
                variant="p"
                sx={{ color: Colors.lightgray, mb: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
            </Box>
          </Grid>
          <Grid item xs="6" id="ImageSlide" sx={{}}>
            <CardMedia
              component={"img"}
              sx={{
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "20px",
              }}
              image={
                "https://open.cruip.com/assets/features-03-image-01-a6309655.png"
              }
            />
          </Grid>

          <Grid item xs="6">
            <CardMedia
              component={"img"}
              sx={{
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "20px",
              }}
              image={
                "https://open.cruip.com/assets/features-03-image-01-a6309655.png"
              }
            />
          </Grid>
          <Grid item xs="6">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: Colors.purple,
                  fontFamily: "Architects Daughter, cursive",
                }}
              >
                More speed. Less spend
              </Typography>
              <Typography variant="h4" fontWeight={"600"}>
                Keep everything on schedule
              </Typography>
              <Typography
                variant="p"
                sx={{ color: Colors.lightgray, mb: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
            </Box>
          </Grid>

          <Grid item xs="6">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: Colors.purple,
                  fontFamily: "Architects Daughter, cursive",
                }}
              >
                More speed. Less spend
              </Typography>
              <Typography variant="h4" fontWeight={"600"}>
                Keep everything on schedule
              </Typography>
              <Typography
                variant="p"
                sx={{ color: Colors.lightgray, mb: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
            </Box>
          </Grid>
          <Grid item xs="6">
            <CardMedia
              component={"img"}
              sx={{
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "20px",
              }}
              image={
                "https://open.cruip.com/assets/features-03-image-01-a6309655.png"
              }
            />
          </Grid>
        </Grid>
      </Box>
      {/* Download Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          mt: "100px",
        }}
      >
        <Box
          borderRadius={"10px"}
          sx={{
            background: "#53b1bf3b",
            padding: "10px 30px",
            color: Colors.Primary,
            fontWeight: "600",
          }}
        >
          100k+ user
        </Box>
        <Typography variant="h3" fontWeight={"600"}>
          Download Our App
        </Typography>{" "}
        <Typography variant="h6" fontWeight={"500"} mb="20px" color="#9ba9b4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.{" "}
        </Typography>
      </Box>

      <Grid container m="50px 0px" justifyContent={"center"} spacing={2}>
        <Grid xs={6}>
          <Box sx={{ padding: "20px" }}>
            <Typography variant="h4" fontWeight={"600"} color={Colors.Primary}>
              Pharmacy/consultancy everything in just one app
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"500"}
              // mt="40px"
              color="#9ba9b4"
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.{" "}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <CardMedia
                component={"img"}
                image={Images.GoogleLogo}
                sx={{ objectFit: "contain", width: "200px", cursor: "pointer" }}
              />
              <CardMedia
                component={"img"}
                image={Images.Applelogo}
                sx={{ objectFit: "contain", width: "200px", cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <CardMedia
            component={"img"}
            image={
              "http://www.peis.in/vuejs-templates/medpill/multipage/assets/images/faqs.png"
            }
            sx={{ height: "500px", objectFit: "contain" }}
          />
        </Grid>
      </Grid>

      {/* Client Satisfaction */}
      {/* Download Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          mt: "50px",
        }}
      >
        <Box
          borderRadius={"10px"}
          sx={{
            background: "#285d9a30",
            padding: "10px 30px",
            color: Colors.Secondary,
            display: "flex",
            alignItems: "center",
            fontWeight: "600",
          }}
        >
          5 star rating <StarIcon />
        </Box>
        <Typography variant="h3" fontWeight={"600"}>
          Client Satisfaction
        </Typography>{" "}
        <Typography variant="h6" fontWeight={"500"} mb="20px" color="#9ba9b4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.{" "}
        </Typography>
      </Box>

      <Grid container m="20px 0px" justifyContent={"center"} spacing={2}>
        <Grid item xs={12} lg={4}>
          <CardMedia
            component={"img"}
            image={Images.Map}
            sx={{
              width: "100%",
              borderRadius: "20px",
              objectFit: "contain",
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 5px",
            }}
          />
        </Grid>
        <Grid xs={6}>
          <Box sx={{ padding: "20px" }}>
            <Typography variant="h6" color={Colors.Primary}>
              Our Users Clients means everything to us
            </Typography>
            <Typography variant="p" color="#9ba9b4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                height: "fit-content",
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Footer />
      {/* Absolute Boxes */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          height: "500px",
          width: "500px",
          borderRadius: "50%",
          background: Colors.Bglight,
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "100px",
          height: "500px",
          width: "500px",
          borderRadius: "50%",
          background: Colors.Bglight,
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "90%",
          right: "-100px",
          height: "500px",
          width: "500px",
          borderRadius: "50%",
          background: Colors.Bglight,
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateX(-50%)",
          right: "-100px",
          height: "500px",
          width: "500px",
          borderRadius: "50%",
          background: Colors.Bglight,
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "70%",
          transform: "translateX(-20%)",
          left: "-100px",
          height: "500px",
          width: "500px",
          borderRadius: "50%",
          background: Colors.Bglight,
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          // top: "90%"
          transform: "translateX(-20%)",
          left: "-100px",
          height: "500px",
          width: "500px",
          borderRadius: "50%",
          background: Colors.Bglight,
          zIndex: -1,
        }}
      ></Box>
    </Box>
  );
}

export default Home;
