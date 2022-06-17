import React, { Component } from "react";
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
import ChatWindow from "./ChatWindow.jsx";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/lab/TabList";
import ExploreIcon from "@mui/icons-material/Explore";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import PropTypes from "prop-types";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Sidebar from "../Shared/Sidebar";
import rarikoImg from "./RarikoLogoFinal.png";
import community from "./community.png";
import reload from "./reload.png";
import gps from "./gps.png";
import wallet from "./wallet.png";
import user from "./user.png";
import medal from "./medal.png";
import direct from "./direct.png";
import chat from "./chat.png";
import more from "./more.png";
import shutdown from "./shutdown.png";
import noti from "./noti.png";
import face from "./face1.png";
import people from "./people.png";

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
    height: "40px",
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

const ButtonBootstrap = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: 16,
  background:
    "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)",
  color: "white",
  padding: "8px 40px",
  border: "0px",
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

const BootstrapButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: 18,
  background: "inherit",
  color: "white",
  padding: "12px 20px",
  margin: "10px",
  width: "410px",
  border: "0px",
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
    backgroundColor: "#353535",
  },
}));

export class ManageWallet extends Component {
  state = {
    value: 0,
  };

  changeTabs = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    return (
      <>
        {/* <Navbar heading="Communities" width="70%" style={{ color: "white" }} /> */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",

          }}
        >
          <div 
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}         
          >
            <div>
              <p style={{color: "white", fontSize: "20px", fontWeight: "700"}}>Communities</p>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
            }}>
              <img src={face} alt=""></img>
              <p style={{color: "white"}}>theworkblunt.rariko</p>
              <img src={noti} alt=""></img>
            </div>
          </div>
        </div>
        <Divider
          style={{
            border: "0.5px solid #9100FF",
            opacity: "0.6",
            marginBottom: "50px",
          }}
        />
        <Grid container>
          <Grid container>
            <Grid item md={2} sx={{color: "white", padding: "10px", transform: "translateY(-150px)", backgroundColor: "#1F1D3A", height: "140vh"}}>
             <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <img src={rarikoImg} alt="" width="60px"></img>

               <h2
              style={{
                margin: "0px",
                fontSize: "40px",
                paddingTop: "20px",
                marginLeft: "16px",
                fontWeight: "800",
              }}
            >
              <span style={{ color: "white", margin: "0px" }}>Rari</span>
              <span style={{ color: "red", margin: "0px" }}>ko</span>
            </h2>
             </div>
             <div style={{padding: "20px"}}>
              <div style={{padding: "10px", backgroundColor: "#701BE0",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}>
              <img src={community} alt=""></img>
              <p style={{
                margin: "0px",
                paddingLeft: "10px"
              }}>
                Community
              </p>
              </div>
              <div>
                <nav>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px 10px 10px",
                    cursor: "pointer",
                  }} className="sidebar-item">
                    <img src={direct} alt=""></img>
                    <p
                    style={{
                      margin: "0px",
                      paddingLeft: "10px",
                      marginTop: "5px",
                    }}
                    >
                    Direct
                    </p>
                    </div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px 10px 10px",
                    cursor: "pointer",
                  }} className="sidebar-item">
                    <img src={reload} alt=""></img>
                    <p
                    style={{
                      margin: "0px",
                      paddingLeft: "10px",
                      marginTop: "5px",
                    }}
                    >

                    Send Crypto
                    </p>
                    </div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px 10px 10px",
                    cursor: "pointer",
                  }} className="sidebar-item">
                    <img src={gps} alt=""></img>
                    <p
                    style={{
                      margin: "0px",
                      paddingLeft: "10px",
                      marginTop: "5px",
                    }}
                    >
                      Explore
                    </p>
                    </div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px 10px 10px",
                    cursor: "pointer",
                  }} className="sidebar-item">
                    
                    <img src={wallet} alt=""></img>
                    <p
                    style={{
                      margin: "0px",
                      paddingLeft: "10px",
                      marginTop: "5px",
                    }}
                    >

                    Wallet
                    </p>
                    </div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px 10px 10px",
                    cursor: "pointer",
                  }} className="sidebar-item">
                    <img src={user} alt=""></img>
                    <p
                    style={{
                      margin: "0px",
                      paddingLeft: "10px",
                      marginTop: "5px",
                    }}
                    >
                    Profile

                    </p>
                    </div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px 10px 10px",
                    cursor: "pointer",
                  }} className="sidebar-item">
                    <img src={medal} alt=""></img>
                    <p
                    style={{
                      margin: "0px",
                      paddingLeft: "10px",
                      marginTop: "5px",
                    }}
                    >

                    Rewards
                    </p>
                    </div>
                  <div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px 10px 10px",
                    cursor: "pointer",
                  }} className="sidebar-item">
                    <img src={more} alt=""></img>
                    <p
                    style={{
                      margin: "0px",
                      paddingLeft: "10px",
                      marginTop: "0px",
                    }}
                    >
                    More
                    </p>
                    </div>
                    <div style={{
                      paddingLeft: "30px",
                    }}>
                    <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px 10px 10px",
                    cursor: "pointer",
                  }} className="sidebar-item">
                    <img src={chat} alt=""></img>
                    <p
                    style={{
                      margin: "0px",
                      paddingLeft: "10px",
                      marginTop: "5px",
                    }}
                    >

                    FAQs
                    </p>
                    </div>
                    <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px 10px 10px",
                    cursor: "pointer",
                  }} className="sidebar-item">
                    <img src={shutdown} alt=""></img>
                    <p
                    style={{
                      margin: "0px",
                      paddingLeft: "10px",
                      marginTop: "5px",
                    }}
                    >

                    Logout
                    </p>
                    </div>
                    </div>
                  </div>
                </nav>
              </div>
             </div>
            </Grid>
            {/* <Grid item md={1}/> */}
            <Grid item md={3} sx={{marginLeft:"30px"}}>
              <Container
                sx={{
                  width: "100%",
                  height: "120vh",
                  borderRadius: "10px",
                  background: "rgba(46, 46, 51, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  // overflowY: "scroll",
                }}
              >
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
                      padding: "10px",
                      backgroundColor: "black",
                      borderRadius: "10px 0px 0px 10px",
                      flex: "1",
                    }}
                    placeholder="Search"
                  />
                  <Paper
                    sx={{
                      background:
                        "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)",
                      borderRadius: "0px 10px 10px 0px",
                      height: "52px",
                      width: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton sx={{ color: "white" }}>
                      <SearchIcon></SearchIcon>
                    </IconButton>
                  </Paper>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <Paper
                    sx={{
                      background:
                        "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)",
                      borderRadius: "10px",
                      height: "52px",
                      width: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <img src={people} alt="" style={{marginRight: "10px"}} />
                    <p>Create New Communities</p>
                  </Paper>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <Paper
                    sx={{
                      background: "transparent",
                      height: "52px",
                      width: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        width: "28rem",
                        margin: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={require("./polygon.png")}
                        alt=""
                        height="40"
                        width="40"
                        style={{ borderRadius: "29px" }}
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px",
                          color: "#9100FF",
                          // marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <h4 style={{ margin: "0px 20px", color: "white" }}>
                            Polygon
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              margin: "0px 20px",
                            }}
                          >
                            <p
                              style={{
                                margin: "10px 5px 10px 0px",
                                color: "white",
                                fontSize: "14px",
                              }}
                            >
                              yadavvicky2d@gmail.com
                            </p>
                          </div>
                        </div>
                        08:43
                      </div>
                    </div>
                  </Paper>
                </Box>
                <Divider
                  style={{
                    border: "0.5px solid #9100FF",
                    opacity: "0.6",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <Paper
                    sx={{
                      background: "transparent",
                      height: "52px",
                      width: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        width: "28rem",
                        margin: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={require("../assets/images/faces/face1.jpg")}
                        alt=""
                        height="40"
                        width="40"
                        style={{ borderRadius: "29px" }}
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px",
                          color: "#9100FF",
                          // marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <h4 style={{ margin: "0px 20px", color: "white" }}>
                            Ethereum
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              margin: "0px 20px",
                            }}
                          >
                            <p
                              style={{
                                margin: "10px 5px 10px 0px",
                                color: "white",
                                fontSize: "14px",
                              }}
                            >
                              Uploaded file
                            </p>
                          </div>
                        </div>
                        Sun
                      </div>
                    </div>
                  </Paper>
                </Box>
                <Divider
                  style={{
                    border: "0.5px solid #9100FF",
                    opacity: "0.6",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <Paper
                    sx={{
                      background: "transparent",
                      height: "52px",
                      width: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        width: "28rem",
                        margin: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={require("./solana.png")}
                        alt=""
                        height="40"
                        width="40"
                        style={{ borderRadius: "29px" }}
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px",
                          color: "#9100FF",
                          // marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <h4 style={{ margin: "0px 20px", color: "white" }}>
                            Solana
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              margin: "0px 20px",
                            }}
                          >
                            <p
                              style={{
                                margin: "10px 5px 10px 0px",
                                color: "white",
                                fontSize: "14px",
                              }}
                            >
                              Will do ,super ,thank you
                            </p>
                          </div>
                        </div>
                        Tue
                      </div>
                    </div>
                  </Paper>
                </Box>
                <Divider
                  style={{
                    border: "0.5px solid #9100FF",
                    opacity: "0.6",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <Paper
                    sx={{
                      background: "transparent",
                      height: "52px",
                      width: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        width: "28rem",
                        margin: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={require("../assets/images/faces/face1.jpg")}
                        alt=""
                        height="40"
                        width="40"
                        style={{ borderRadius: "29px" }}
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px",
                          fontSize: "14px",
                          color: "#9100FF",
                          // marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <h4 style={{ margin: "0px 20px", color: "white" }}>
                            Bitcoin
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              margin: "0px 20px",
                            }}
                          >
                            <p
                              style={{
                                margin: "10px 5px 10px 0px",
                                color: "white",
                                fontSize: "14px",
                              }}
                            >
                              Lorem ipsum dolor sit amet consectetur
                            </p>
                          </div>
                        </div>
                        Tue
                      </div>
                    </div>
                  </Paper>
                </Box>
                <Divider
                  style={{
                    border: "0.5px solid #9100FF",
                    opacity: "0.6",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <Paper
                    sx={{
                      background: "transparent",
                      height: "52px",
                      width: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        width: "28rem",
                        margin: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={require("./boredape.png")}
                        alt=""
                        height="40"
                        width="40"
                        style={{ borderRadius: "29px" }}
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px",
                          color: "#9100FF",
                          // marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <h4 style={{ margin: "0px 20px", color: "white",marginTop:"5px" }}>
                            Bored Ape Yacht Club
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              margin: "0px 20px",
                            }}
                          >
                            <p
                              style={{
                                margin: "10px 5px 10px 0px",
                                color: "white",
                                fontSize: "14px",
                              }}
                            >
                              Lorem ipsum dolor sit amet consectetur
                            </p>
                          </div>
                        </div>
                        Tue
                      </div>
                    </div>
                  </Paper>
                </Box>
                <Divider
                  style={{
                    border: "0.5px solid #9100FF",
                    opacity: "0.6",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <Paper
                    sx={{
                      background: "transparent",
                      height: "52px",
                      width: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        width: "28rem",
                        margin: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={require("./women.png")}
                        alt=""
                        height="40"
                        width="40"
                        style={{ borderRadius: "29px" }}
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px",
                          fontSize: "14px",
                          color: "#9100FF",
                          // marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <h4 style={{ margin: "0px 20px", color: "white" }}>
                            World of Women NFTs
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              margin: "0px 20px",
                            }}
                          >
                            <p
                              style={{
                                margin: "10px 5px 10px 0px",
                                color: "white",
                                fontSize: "14px",
                              }}
                            >
                              no pracujemy z domu przez
                            </p>
                          </div>
                        </div>
                        01 Feb
                      </div>
                    </div>
                  </Paper>
                </Box>
                <Divider
                  style={{
                    border: "0.5px solid #9100FF",
                    opacity: "0.6",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <Paper
                    sx={{
                      background: "transparent",
                      height: "52px",
                      width: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        width: "28rem",
                        margin: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={require("./buidl.png")}
                        alt=""
                        height="40"
                        width="40"
                        style={{ borderRadius: "29px" }}
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px",
                          fontSize: "14px",
                          color: "#9100FF",
                          // marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <h4 style={{ margin: "0px 20px", color: "white" }}>
                            BUIDL GanG
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              margin: "0px 20px",
                            }}
                          >
                            <p
                              style={{
                                margin: "10px 5px 10px 0px",
                                color: "white",
                                fontSize: "14px",
                              }}
                            >
                              potem sie zmieni
                            </p>
                          </div>
                        </div>
                        01 Feb
                      </div>
                    </div>
                  </Paper>
                </Box>
                <Divider
                  style={{
                    border: "0.5px solid #9100FF",
                    opacity: "0.6",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <Paper
                    sx={{
                      background: "transparent",
                      height: "52px",
                      width: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        width: "28rem",
                        margin: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={require("./polytrade.png")}
                        alt=""
                        height="40"
                        width="40"
                        style={{ borderRadius: "29px" }}
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px",
                          fontSize: "14px",
                          color: "#9100FF",
                          // marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <h4 style={{ margin: "0px 20px", color: "white" }}>
                            PolyTrade
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              margin: "0px 20px",
                            }}
                          >
                            <p
                              style={{
                                margin: "10px 5px 10px 0px",
                                color: "white",
                                fontSize: "14px",
                              }}
                            >
                              yadavvicky2d@gmail.com
                            </p>
                          </div>
                        </div>
                        08:43
                      </div>
                    </div>
                  </Paper>
                </Box>
                <Divider
                  style={{
                    border: "0.5px solid #9100FF",
                    opacity: "0.6",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <Paper
                    sx={{
                      background: "transparent",
                      height: "52px",
                      width: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        width: "28rem",
                        margin: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={require("./opensea.png")}
                        alt=""
                        height="40"
                        width="40"
                        style={{ borderRadius: "29px" }}
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px",
                          fontSize: "14px",
                          color: "#9100FF",
                          // marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <h4 style={{ margin: "0px 20px", color: "white" }}>
                            OpenSea
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              margin: "0px 20px",
                            }}
                          >
                            <p
                              style={{
                                margin: "10px 5px 10px 0px",
                                color: "white",
                                fontSize: "14px",
                              }}
                            >
                              Will do , super thank you
                            </p>
                          </div>
                        </div>
                        Tue
                      </div>
                    </div>
                  </Paper>
                </Box>
                <Divider
                  style={{
                    border: "0.5px solid #9100FF",
                    opacity: "0.6",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <Paper
                    sx={{
                      background: "transparent",
                      height: "52px",
                      width: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        width: "28rem",
                        margin: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={require("./compund.png")}
                        alt=""
                        height="40"
                        width="40"
                        style={{ borderRadius: "29px" }}
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px",
                          fontSize: "14px",
                          color: "#9100FF",
                          // marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <h4 style={{ margin: "0px 20px", color: "white" }}>
                            OpenSea
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              margin: "0px 20px",
                            }}
                          >
                            <p
                              style={{
                                margin: "10px 5px 10px 0px",
                                color: "white",
                                fontSize: "14px",
                              }}
                            >
                              Will do , super thank you
                            </p>
                          </div>
                        </div>
                        Tue
                      </div>
                    </div>
                  </Paper>
                </Box>
              </Container>
            </Grid>
            <Grid item md={6}>
              <ChatWindow></ChatWindow>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default ManageWallet;
