import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";
import insta from "./insta.svg";
import telegram from "./telegram.svg";
import medium from "./medium.svg";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import style from "./LandingNew.module.css";
const ButtonBootstrap = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: 16,
  width: "190px",
  border: "3px solid #5a2cbb",
  backgroundColor: "#5a2cbb",
  color: "white",
  padding: "1px",
  borderRadius: "10px",
  fontWeight: theme.typography.fontWeightRegular,
  fontFamily: "Poppins,sans-serif",
  "&:hover": {
    opacity: 1,
    backgroundColor: "#5a2cbb",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
  },
  "&:active": {
    boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
  },
}));
export default function LandingMobile() {
  return (
    <div  style={{background:"linear-gradient(306.26deg, #120D42 29.75%, #160324 66.09%, #100D2A 96.72%)",width:"100%",height:"100%"}}>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "baseline",
              marginLeft: "0px",
            }}
          >
            <img
              src={require("../RarikoLogoFinal.png")}
              height="80"
              width="80"
            />
            <h2
              style={{
                margin: "0px",
                fontSize: "70px",
                marginLeft: "16px",
                fontWeight: "800",
              }}
            >
              <span style={{ color: "white", margin: "0px" }}>Rari</span>
              <span style={{ color: "red", margin: "0px" }}>ko</span>
            </h2>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} className={style.landingContainer}>
          <div style={{ marginTop: "100px" }}>
            <Typography
              variant="body2"
              style={{
                color: "white",
                fontSize: "26px",
                fontWeight: "600",
                fontFamily: "Poppins,sans-serif",
              }}
            >
              Bringing in a safer and easier way to manage your communities in
              the world of Web3.0 hello
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}></Grid>
        <Grid item xs={12} lg={5}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "100px",
              fontFamily: "Poppins,sans-serif",
            }}
          >
            <FormControl sx={{}}>
              <OutlinedInput
                placeholder="Enter your Email"
                id="subscribe"
                sx={{
                  color: "white",
                  backgroundColor: "rgba(255, 253, 253, 0.34)",
                  boxShadow:"inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  fontFamily: "Poppins,sans-serif",
                  borderRadius: "15px",
                }}
              />
            </FormControl>
            <FormControl>
              <OutlinedInput
                placeholder="Paste ETH address"
                id="subscribe"
                sx={{
                  color: "white",
                  backgroundColor: "rgba(255, 253, 253, 0.34)",
                  boxShadow:"inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px",
                  fontFamily: "Poppins,sans-serif",
                  marginTop: "15px",
                }}
              />
            </FormControl>
            <ButtonBootstrap style={{ marginTop: "25px" }}>
              Get early access
            </ButtonBootstrap>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack sx={{ marginTop: "200px" }}>
            <Typography
              variant="h6"
              style={{ color: "white", fontFamily: "Poppins,sans-serif",textAlign:"center" }}
            >
              {" "}
              Want to collaborate or invest?
            </Typography>
            <Typography
              variant="h6"
              style={{ color: "white", fontFamily: "Poppins,sans-serif",textAlign:"center" }}
            >
              {" "}
              info@rariko.io
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={2}>
          <div
            className=""
            style={{
              width: "95%",
              backgroundColor: "rgba(114, 64, 255, 1)",
              height: "1px",
              marginTop: "20px",
            }}
          ></div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Stack sx={{ marginTop: "15px" }}>
            <Typography
              variant="body2"
              style={{ color: "white", fontFamily: "Poppins,sans-serif",textAlign:"center" }}
            >
              {" "}
              Follow us here
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent:"space-around",
                alignItems:"strech",
                marginTop:"10px"
              }}
            >
              <img src={linkedin} style={{width:"38px",height:"48px"}} alt="" />
              <img src={twitter} style={{width:"38px",height:"48px"}} alt="" />
              <img src={medium} style={{width:"32px",height:"48px"}} alt="" />
              <img src={insta} style={{width:"38px",height:"48px"}} alt="" />
              <img src={telegram} style={{width:"38px",height:"48px"}} alt="" />
            </div>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
