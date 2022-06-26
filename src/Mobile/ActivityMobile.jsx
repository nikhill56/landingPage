import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import messageIcon from "./Vector.svg";
import Button from "@mui/material/Button";
import { styled, useTheme } from "@mui/material/styles";
import NFTsDash from "./NFTsDash";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import Footer from './Footer'
const ButtonBootstrap = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: 16,
  border: "3px solid #5a2cbb",
  backgroundColor: "rgba(255,255,255,0.05)",
  color: "white",
  padding: "0px 40px",
  borderRadius: "10px",
  fontWeight: theme.typography.fontWeightRegular,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
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
export default function                     ActivityMobile() {
  return (
    <div style={{backgroundColor:"black"}}>
      <div className="row">
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <div className="">
            <ArrowBackIcon style={{ fontSize: "30px", color: "white" }} />
          </div>
          <div className="" style={{width: "60px", height: "60px", borderRadius: "50%", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img
              src={require("./user.png")}
              alt=""
              height=""
              width=""
              style={{ borderRadius: "39px", width: "150%", height: '150%', objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",          
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "0px 26px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h4 style={{ margin: "10px 5px", color: "white" }}>
                manikumar.eth
              </h4>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                margin: "0px 0px",
              }}
            >
              <ButtonBootstrap
                style={{
                  background:
                    "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)",
                  width: "3rem",
                }}
              >
                Follow
              </ButtonBootstrap>
              <ButtonBootstrap style={{ width: "3rem" }}>
                Message
              </ButtonBootstrap>
              <ButtonBootstrap
                style={{ width: "1rem", fontSize: "10px", padding: "5px" }}
              >
                <img src={messageIcon} alt="share" style={{ width: "20px" }} />
              </ButtonBootstrap>
            </div>
          </div>
        </div>
      </div>
      
      <div
        className="row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "10px",
          margin: "10px 0px",
          color:"white"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            width: "120px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            padding: "5px",
            justifyContent: "center",
            border:"1px solid #5a2cbb",
            alignItems: "center",
          }}
        >
          <h4 style={{ paddingTop: "10px", margin: "5px" }}>NFTs</h4>
          <p>$1,142,589</p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            border:"1px solid #5a2cbb",
            width: "100px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            padding: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 style={{ paddingTop: "10px", margin: "5px" }}>Followers</h4>
          <p>311</p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            border:"1px solid #5a2cbb",
            width: "100px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            padding: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 style={{ paddingTop: "10px", margin: "5px" }}>Following</h4>
          <p>311</p>
        </div>
      </div>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
            <Stack direction="row" spacing={6}>
                <Typography variant="subtitle" sx={{color:"white", margin: "10px 0px !important", fontWeight: "600", borderBottom: "2px solid white", padding: "0px 10px"}}>Collectibles</Typography>
                <Typography variant="subtitle" sx={{color:"white", margin: "10px 50px !important"}}>Communities</Typography>
                <Typography variant="subtitle" sx={{color:"white", margin: "10px 0px !important"}}>Activity</Typography>
            </Stack>
            <div style={{width: "100%", display: "flex", justifyContent: "flex-end", padding: "10px 40px", boxSizing: "border-box"}}>
              <select name="options" style={{width: "100px", padding: "10px", backgroundColor: "black", border: "none", borderRadius: "10px", color: "grey", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>
                <option value="common" style={{backgroundColor: "#454242"}}>All chains</option>
                <option value="citizens" style={{backgroundColor: "#454242"}}>Citizens</option>
                <option value="announcements" style={{backgroundColor: "#454242"}}>Announcements</option>
                <option value="voting" style={{backgroundColor: "#454242"}}>Voting</option>
              </select>
            </div>
        </Grid>
      </Grid>
      <Grid container rowSpacing={6} columnSpacing={{xs:3,sm:1}}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <NFTsDash />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      
    </div>
  );
}
