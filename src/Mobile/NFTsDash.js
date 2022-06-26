import React, { Component, useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Dropdown } from "react-bootstrap";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import styles from "./custome.module.css";
import Box from "@mui/material/Box";
import "./custom.css";
import axios from "axios";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "10px",
  border: "1px solid black",
  boxShadow: "0px 0px 100px rgba(91, 20, 230, 0.3)",
  overflow: "hidden",
  marginBottom: "10px",
}));
function NFTsDash() {
  const [nftResult, setNftResult] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.opensea.io/api/v1/collections?asset_owner=0x54be3a794282c030b15e43ae2bb182e14c409c5e&offset=0&limit=300"
      )
      .then((res) => {
        setNftResult(res.data);
      });
  }, []);
  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card" style={{ backgroundColor:"#150E21" }}>
        {/* <h3 style={{ padding: "10px", borderRadius: "10px" }}>
          NFTs Valuation:{" "}
          <span style={{ color: "rgba(0, 245, 160, 1)" }}>$1,200,000</span>
        </h3> */}
        <div
          className="card-body"
          style={{ maxHeight: "750px", overflowY: "scroll", scrollbarWidth: "thin" }}
        >
          
          <Grid container rowSpacing = {2} columnSpacing={{xs:3,sm:1}}
          >
            {nftResult.length !== 0 &&
              nftResult.map((nft) => {
                return nft.primary_asset_contracts.map((prim) => {
                  return (
                    <Grid item md={4}>
                      <Item
                        sx={{
                          width: "32vw",
                          height: "32vw",
                          position: "relative",
                          backgroundColor: "black",
                        }}
                      >
                        <img
                          src={prim.image_url}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <div className={styles.blackgradient}></div>
                        {/* <Dropdown style={{ position: 'relative', bottom: '100%', left: '46%', cursor: 'pointer' }}>
                                  <Dropdown.Toggle variant="btn btn-outline-secondary" style={{ border: '0px', padding: '2px', margin: '4px 16px 0px 0px' }}>
                                    <MoreVertIcon style={{ color: 'black' }} />
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu style={{ background: 'rgba(24,24,24, 1)' }}>
                                    <Box>
                                      <div style={{ padding: '10px' }}>Set as Profile Picture</div>
                                    </Box>
                                  </Dropdown.Menu>
                                </Dropdown> */}
                        <div
                          style={{
                            position: "absolute",
                            display: "flex",
                            color: "white",
                            borderRadius: "10px",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "33vw",
                            height: "100%",
                            backgroundImage:
                              "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0))",
                            backgroundColor: "rgba(0,0,0,0)",
                            // transform: "translateY(-18vw)",
                            // margin: "0 auto",
                            // marginTop:"-20px",
                            // backgroundColor: "black",
                            zIndex: 102,
                            fontSize: "10px",
                          }}
                          className={"nftName"}
                        >
                          <div className="nftNameContainer">
                            <p
                              style={{
                                fontWeight: "600",
                                marginBottom: "2px",
                                fontSize: "14px",
                                color: "#EAEAEA",
                                textAlign: "center",
                              }}
                            >
                              {prim.name}
                            </p>
                            {/* <p
                              style={{
                                fontWeight: "600",
                                marginBottom: "2px",
                                fontSize: "10px",
                              }}
                            >
                              Est. Value $
                              {Number.parseFloat(
                                nft.stats.average_price
                              ).toFixed(2)}
                            </p> */}
                          </div>
                        </div>
                      </Item>
                    </Grid>
                  );
                });
              })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default NFTsDash;
