import React, { Component } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { Dropdown } from "react-bootstrap";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Input } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import bluetick from "./bluetick.png"
export class ChatWindow extends Component {
  render() {
    return (
      <div
        className="card"
        style={{
          background: "rgba(46, 46, 51, 0.3)",
          /* height: '160px'*/ height: "120vh",
        }}
      >
        <div
          className="card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#1F1F20",
              margin: "0px",
              borderRadius: "10px 10px 0px 0px",
              padding: "20px",
              height: "70px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={require("./RarikoLogoFinal.png")}
                alt=""
                width="50"
                style={{ borderRadius: "0px" }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  paddingTop: "15px"
                }}
              >
                <h5 style={{ margin: "0px 20px", color: "white",fontSize:"22px",fontWeight:"400" }}>
                  Rariko for the future
                </h5>
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
                      color: "grey",
                      fontWeight: "600",
                      fontSize: "14px",
                      margin: "0px"
                    }}
                  >
                    42600 members
                  </p>
                </div>
              </div>
            </div>
            <div>
              <select name="options" style={{width: "200px", padding: "10px", backgroundColor: "#701BE0", border: "none", borderRadius: "10px", color: "white", fontSize: "15px", fontWeight: "400", cursor: "pointer" }}>
                <option value="common" style={{backgroundColor: "#454242"}}>Common</option>
                <option value="citizens" style={{backgroundColor: "#454242"}}>Citizens</option>
                <option value="announcements" style={{backgroundColor: "#454242"}}>Announcements</option>
                <option value="voting" style={{backgroundColor: "#454242"}}>Voting</option>
              </select>
            </div>
          </div>

          <Box
            sx={{
              borderRadius: "10px",
              backgroundColor: "#222322",
              padding: "30px 0px 0px 0px",
              overflowY: "scroll",
              height: "100vh",
              scrollbarWidth: "thin",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4 style={{color:"#AFB0AF"}}>Yesterday</h4>
            </div>
            <Paper
              style={{
                padding: "10px",
                backgroundColor: "#303130",
                color: "white",
                maxWidth: "340px",
                margin: "0px 30px 30px 30px",
                borderRadius: "20px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <img
                  src={require("./face1.png")}
                  alt=""
                  height="70"
                  width="70"
                  style={{ borderRadius: "0px" }}
                />
                <h4 style={{ marginLeft: "5px",fontWeight:"600" }}>vicky.rariko</h4>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulp
              utate libero et velit interdum Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              <p style={{width: '100%', textAlign: "right", margin: "0px", color: "grey"}}>
                9:41
              </p>
            </Paper>
            <Paper
              style={{
                padding: "10px",
                backgroundColor: "#303130",
                color: "white",
                maxWidth: "340px",
                margin: "0px 30px 30px 30px",
                borderRadius: "20px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <img
                  src={require("./face1.png")}
                  alt=""
                  height="70"
                  width="70"
                  style={{ borderRadius: "50%" }}
                />
                <h4 style={{ marginLeft: "5px",fontWeight:"600" }}>averageindian.rariko</h4>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <p style={{width: '100%', textAlign: "right", margin: "0px", color: "grey"}}>
                9:41
              </p>
            </Paper>
            <Paper
              style={{
                padding: "10px",
                backgroundColor: "#303130",
                color: "white",
                maxWidth: "340px",
                margin: "0px 30px 30px 30px",
                borderRadius: "20px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <img
                  src={require("./face1.png")}
                  alt=""
                  height="70"
                  width="70"
                  style={{ borderRadius: "50%" }}
                />
                <h4 style={{ marginLeft: "5px",fontWeight:"600" }}>rareshot.rariko</h4>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulp
              utate libero et velit interdum Lorem ipsum dolor sit amet,
              <p style={{width: '100%', textAlign: "right", margin: "0px", color: "grey"}}>
                9:41
              </p>
            </Paper>
            <div style={{marginBottom: "30px"}}>
                <Paper
                  style={{
                    padding: "10px",
                    backgroundColor: "rgba(130, 130, 130, 0.3)",
                    color: "white",
                    maxWidth: "340px",
                    margin: "0px 30px 0px auto",
                    borderRadius: "20px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulp
                  utate libero et velit interdum Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </Paper>
                  <div style={{width: "100%", display: "flex", justifyContent: "flex-end", marginRight: "30px"}}>
                    <img src={bluetick} alt="" style={{marginRight: "30px"}}></img>
                  </div>
              </div>
            <Paper
              style={{
                padding: "10px",
                backgroundColor: "#303130",
                color: "white",
                maxWidth: "340px",
                margin: "0px 30px 30px 30px",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <img
                  src={require("./face1.png")}
                  alt=""
                  height="70"
                  width="70"
                  style={{ borderRadius: "50%" }}
                />
                <h4 style={{ marginLeft: "5px",fontWeight:"600" }}>degenape.rariko</h4>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <p style={{width: '100%', textAlign: "right", margin: "0px", color: "grey"}}>
                9:41
              </p>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px",
                backgroundColor: "#2d2d2d",
                position: "sticky",
                bottom: "0px",
                left: "0px",
                borderRadius: "20px",
              }}
            >
              <IconButton style={{ color: "white" }}>
                <AttachFileIcon
                  sx={{ transform: "rotate(45deg)", cursor: "pointer" }}
                ></AttachFileIcon>
              </IconButton>
              <IconButton style={{ color: "white" }}>
                <SentimentSatisfiedAltIcon
                  sx={{ cursor: "pointer" }}
                ></SentimentSatisfiedAltIcon>
              </IconButton>

              <Input
                color="secondary"
                style={{
                  color: "white",
                  padding: "10px",
                  backgroundColor: "inherit",
                  borderRadius: "6px",
                  flex: "0.9",
                }}
                placeholder="Type here...."
              />

              <IconButton style={{ color: "white" }}>
                <SendIcon sx={{ cursor: "pointer" }}></SendIcon>
              </IconButton>
            </Paper>
          </Box>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
