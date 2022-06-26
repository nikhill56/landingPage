import React, { Component, useState } from "react";
import Navbar from "../Shared/Navbar";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Input } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/lab/TabList";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import PropTypes from "prop-types";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Sidebar from "../Shared/Sidebar";
// import face from "../Communities/face1.png";
import face from "./user.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import polygon from "../Communities/polygon.png";
import solana from "../Communities/solana.png";
import polytrade from "../Communities/polytrade.png";
import ethereum from "../Communities/face1.png";
import women from "../Communities/women.png";
import boredape from "../Communities/boredape.png";
import Footer from "./Footer";
export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const AntTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  margin: "auto",
  width: "100%",
  borderRadius: "10px",
  backgroundColor: "rgba(130, 130, 130, 0.1)",
  "& .MuiTabs-indicator": {
    display: "none",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "fit-content",
    backgroundColor: "#635ee7",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontSize: "16px",
    borderRadius: "10px",
    textTransform: "none",
    color: "white",
    height: "30px",
    width: "70%",
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
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
    },
    "&.Mui-selected": {
      color: "white",
      fontWeight: theme.typography.fontWeightMedium,
      background:
        "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);
export default function ExploreMobile2({ setActiveTab }) {
  const [buttonText, setButtonText] = useState("Follow");
  const [buttonText1, setButtonText1] = useState(false);
  const [buttonText2, setButtonText2] = useState(false);
  const [buttonText3, setButtonText3] = useState(false);
  const [buttonText4, setButtonText4] = useState(false);
  const [buttonText5, setButtonText5] = useState(false);
  const [buttonText6, setButtonText6] = useState(false);
  const changeText = (text) => {
    setButtonText(text);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={3} style={{ height: "30px", margin: "10px" }}>
          <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
            <ArrowBackIcon style={{ color: "white" }} />
            <h5 style={{ color: "white" }}>Explore</h5>
          </Stack>
        </Grid>
        {/* <Grid item xs={4}></Grid> */}
        <Grid
          item
          xs={6}
          sx={{
            height: "30px",
            width: "1000px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "80px",
            marginTop: "10px",
          }}
        >
          <h5 style={{ color: "white", width: "60px", margin: "0px" }}>
            Sort by:
          </h5>
          <div>
            <select
              name="options"
              style={{
                width: "100px",
                padding: "10px",
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "10px",
                color: "white",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              <option value="common" style={{ backgroundColor: "#454242" }}>
                Select
              </option>
              <option value="citizens" style={{ backgroundColor: "#454242" }}>
                Citizens
              </option>
              <option
                value="announcements"
                style={{ backgroundColor: "#454242" }}
              >
                Announcements
              </option>
              <option value="voting" style={{ backgroundColor: "#454242" }}>
                Voting
              </option>
            </select>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={8}>
          <TabContext value={0}>
            <AntTabs
              centered
              aria-label="basic tabs example"
              value={1}
              style={{
                width: "290px",
                border: "1px solid grey",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              {/* <div onClick={()=>setActiveTab(2)}> */}

              <AntTab
                label="People"
                style={{ width: "150px" }}
                onClick={() => setActiveTab(2)}
              />
              {/* </div> */}
              {/* <div onClick={()=>setActiveTab(5)}> */}

              <AntTab
                label="Communities"
                style={{ width: "150px" }}
                onClick={() => setActiveTab(4)}
              />
              {/* </div> */}
            </AntTabs>
          </TabContext>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: "1",
            }}
          >
            <Input
              color="secondary"
              style={{
                color: "white",
                padding: "5px 10px",
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: "10px 0px 0px 10px",
                borderTop: "1px solid grey",
                borderLeft: "1px solid grey",
                borderBottom: "1px solid grey",
                flex: "1",
              }}
              placeholder="Search"
            />
            <Paper
              sx={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: "0px 10px 10px 0px",
                height: "42px",
                width: "48px",
                display: "flex",
                borderTop: "1px solid grey",
                borderRight: "1px solid grey",
                borderBottom: "1px solid grey",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton sx={{ color: "white" }}>
                <SearchIcon></SearchIcon>
              </IconButton>
            </Paper>
          </Box>
        </Grid>
        <div
          style={{
            height: "67vh",
            overflowY: "scroll",
            scrollbarWidth: "thin",
            width: "100%",
          }}
        >
          <Grid container sx={{ margin: "10px 0px" }}>
            <Grid item xs={1} sx={{ color: "white" }}></Grid>
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid white",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <div
                  className=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={require("./user.png")}
                    alt=""
                    height=""
                    width=""
                    style={{
                      borderRadius: "39px",
                      width: "150%",
                      height: "150%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  mani.rariko
                </h4>
                <h6
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  580 Followers
                </h6>
                <button
                  style={{
                    background: `${
                      !buttonText1
                        ? "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)"
                        : "rgba(0,0,0,0.0)"
                    }`,
                    border: `${!buttonText1 ? "none" : "1px solid #7240FF"}`,
                    borderRadius: "10px",
                    width: "min-content",
                    color: "white",
                  }}
                  onClick={() => setButtonText1((prev) => !prev)}
                >
                  {!buttonText1 ? "Follow" : "Unfollow"}
                </button>
              </div>
            </Grid>
            <Grid item xs={2} sx={{ color: "white" }}></Grid>
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid white",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <div
                  className=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={require("./user.png")}
                    alt=""
                    height=""
                    width=""
                    style={{
                      borderRadius: "39px",
                      width: "150%",
                      height: "150%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  vicky.rariko
                </h4>
                <h6
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  580 Followers
                </h6>
                <button
                  style={{
                    background: `${
                      !buttonText2
                        ? "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)"
                        : "rgba(0,0,0,0.0)"
                    }`,
                    border: `${!buttonText2 ? "none" : "1px solid #7240FF"}`,
                    borderRadius: "10px",
                    width: "min-content",
                    color: "white",
                  }}
                  onClick={() => setButtonText2((prev) => !prev)}
                >
                  {!buttonText2 ? "Follow" : "Unfollow"}
                </button>
              </div>
            </Grid>
          </Grid>
          <Grid container sx={{ margin: "10px 0px" }}>
            <Grid item xs={1} sx={{ color: "white" }}></Grid>
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid white",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <div
                  className=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={require("./user.png")}
                    alt=""
                    height=""
                    width=""
                    style={{
                      borderRadius: "39px",
                      width: "150%",
                      height: "150%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  shashank.rar..
                </h4>
                <h6
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  580 Followers
                </h6>
                <button
                  style={{
                    background: `${
                      !buttonText6
                        ? "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)"
                        : "rgba(0,0,0,0.0)"
                    }`,
                    border: `${!buttonText6 ? "none" : "1px solid #7240FF"}`,
                    borderRadius: "10px",
                    width: "min-content",
                    color: "white",
                  }}
                  onClick={() => setButtonText6((prev) => !prev)}
                >
                  {!buttonText6 ? "Follow" : "Unfollow"}
                </button>
              </div>
            </Grid>
            <Grid item xs={2} sx={{ color: "white" }}></Grid>
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid white",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <div
                  className=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={require("./user.png")}
                    alt=""
                    height=""
                    width=""
                    style={{
                      borderRadius: "39px",
                      width: "150%",
                      height: "150%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  punit.crypto
                </h4>
                <h6
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  580 Followers
                </h6>
                <button
                  style={{
                    background: `${
                      !buttonText3
                        ? "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)"
                        : "rgba(0,0,0,0.0)"
                    }`,
                    border: `${!buttonText3 ? "none" : "1px solid #7240FF"}`,
                    borderRadius: "10px",
                    width: "min-content",
                    color: "white",
                  }}
                  onClick={() => setButtonText3((prev) => !prev)}
                >
                  {!buttonText3 ? "Follow" : "Unfollow"}
                </button>
              </div>
            </Grid>
          </Grid>
          <Grid container sx={{ margin: "10px 0px" }}>
            <Grid item xs={1} sx={{ color: "white" }}></Grid>
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid white",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <div
                  className=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={require("./user.png")}
                    alt=""
                    height=""
                    width=""
                    style={{
                      borderRadius: "39px",
                      width: "150%",
                      height: "150%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  lorem.crypto
                </h4>
                <h6
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  580 Followers
                </h6>
                <button
                  style={{
                    background: `${
                      !buttonText4
                        ? "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)"
                        : "rgba(0,0,0,0.0)"
                    }`,
                    border: `${!buttonText4 ? "none" : "1px solid #7240FF"}`,
                    borderRadius: "10px",
                    width: "min-content",
                    color: "white",
                  }}
                  onClick={() => setButtonText4((prev) => !prev)}
                >
                  {!buttonText4 ? "Follow" : "Unfollow"}
                </button>
              </div>
            </Grid>
            <Grid item xs={2} sx={{ color: "white" }}></Grid>
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid white",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <div
                  className=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={require("./user.png")}
                    alt=""
                    height=""
                    width=""
                    style={{
                      borderRadius: "39px",
                      width: "150%",
                      height: "150%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  manan.eth
                </h4>
                <h6
                  style={{
                    color: "white",
                    margin: "5px 0px",
                    textAlign: "center",
                  }}
                >
                  580 Followers
                </h6>
                <button
                  style={{
                    background: `${
                      !buttonText5
                        ? "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)"
                        : "rgba(0,0,0,0.0)"
                    }`,
                    border: `${!buttonText5 ? "none" : "1px solid #7240FF"}`,
                    borderRadius: "10px",
                    width: "min-content",
                    color: "white",
                  }}
                  onClick={() => setButtonText5((prev) => !prev)}
                >
                  {!buttonText5 ? "Follow" : "Unfollow"}
                </button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Footer></Footer>
    </div>
  );
}
