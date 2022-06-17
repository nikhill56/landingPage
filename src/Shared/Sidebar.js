import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse, Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";
import Divider from "@mui/material/Divider";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ExploreIcon from "@mui/icons-material/Explore";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/crypto", state: "basicUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }

  render() {
    return (
      <nav
        className="sidebar sidebar-offcanvas sticky-top"
        id="sidebar"
        style={{ background: "rgba(130, 130, 130, 0.12)", minHeight: "100vh" }}
      >
        <div
          className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center"
          style={{ height: "100px", background: "rgba(16,16,16,1)" }}
        >
          <a
            className="sidebar-brand brand-logo"
            href="index.html"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px",
              textDecoration: "none",
            }}
          >
            <img
            //   src={require("../../assets/images/RarikoLogo.png")}
              alt="logo"
            />
            <h4
              style={{
                margin: "0px",
                fontSize: "36px",
                marginLeft: "16px",
                fontWeight: "600",
                border: "0px",
                opacity: "1",
              }}
            >
              <span style={{ color: "white", margin: "0px" }}>Rari</span>
              <span style={{ color: "red", margin: "0px" }}>ko</span>
            </h4>
          </a>
        </div>
        <Divider
          style={{
            margin: "0px auto",
            width: "72%",
            border: "0.5px solid #9100FF",
            opacity: "0.6",
          }}
        />
        <ul className="nav">
          <li
            className={
              this.isPathActive("/home")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
            style={{ width: "84%", margin: "auto" }}
          >
            <Link
              className="nav-link"
              to="/home"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                // src={require("../../assets/images/Logos/dashboard.svg")}
                alt="logo"
                height="16"
                width="16"
              />
              <span
                className="menu-title"
                style={{ flex: "0.84", color: "white" }}
              >
                <Trans>Dashboard</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/profile")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
            style={{ width: "84%", margin: "auto" }}
          >
            {/* <Link
              className="nav-link"
              to="/profile"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src={require("../../assets/images/Logos/chat.svg")}
                alt="logo"
                height="16"
                width="16"
              />
              <span
                className="menu-title"
                style={{ flex: "0.84", color: "white" }}
              >
                <Trans>Profile</Trans>
              </span>
            </Link> */}
            <Link
              className="nav-link"
              to="/chats"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                // src={require("../../assets/images/Logos/chat.svg")}
                alt="logo"
                height="16"
                width="16"
              />
              <span
                className="menu-title"
                style={{ flex: "0.84", color: "white" }}
              >
                <Trans>Chats</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/explore")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
            style={{ width: "84%", margin: "auto" }}
          >
            <Link
              className="nav-link"
              to="/explore"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ExploreIcon style={{ color: "white" }} />
              <span
                className="menu-title"
                style={{ flex: "0.84", color: "white" }}
              >
                <Trans>Explore</Trans>
              </span>
            </Link>
          </li>

          {/* <li
            className={
              this.isPathActive("/crypto")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
            style={{ width: "84%", margin: "auto" }}
          >
            <Link
              className="nav-link"
              to="/crypto"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src={require("../../assets/images/Logos/crypto.svg")}
                alt="logo"
                height="16"
                width="16"
              />
              <span
                className="menu-title"
                style={{ flex: "0.84", color: "white" }}
              >
                <Trans>Crypto</Trans>
              </span>
            </Link>
          </li> */}
          {/* <li
            className={
              this.isPathActive("/nfts")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
            style={{ width: "84%", margin: "auto" }}
          >
            <Link
              className="nav-link"
              to="/nfts"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src={require("../../assets/images/Logos/nft.svg")}
                alt="logo"
                height="16"
                width="16"
              />
              <span
                className="menu-title"
                style={{ flex: "0.84", color: "white" }}
              >
                <Trans>NFTs</Trans>
              </span>
            </Link>
          </li> */}
          {/* <li
            className={
              this.isPathActive("/defi")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
            style={{ width: "84%", margin: "auto" }}
          >
            <Link
              className="nav-link"
              to="/defi"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src={require("../../assets/images/Logos/defi.svg")}
                alt="logo"
                height="16"
                width="16"
              />
              <span
                className="menu-title"
                style={{ flex: "0.84", color: "white" }}
              >
                <Trans>DeFi</Trans>
              </span>
            </Link>
          </li> */}
          <li
            className={
              this.isPathActive("/price-tracker")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
            style={{ width: "84%", margin: "auto" }}
          >
            <Link
              className="nav-link"
              to=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ThumbsUpDownIcon style={{ color: "white" }} />
              <span
                className="menu-title"
                style={{ flex: "0.84", color: "white" }}
              >
                <Trans>Feed</Trans>
              </span>
            </Link>
          </li>

          <li
            className={
              this.isPathActive("/manage-wallets")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
            style={{ width: "84%", margin: "auto" }}
          >
            <Link
              className="nav-link"
              to="/manage-wallets"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                // src={require("../../assets/images/Logos/stocks.svg")}
                alt="logo"
                height="16"
                width="16"
              />
              <span
                className="menu-title"
                style={{ flex: "0.84", color: "white" }}
              >
                <Trans>Manage Wallets</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/price-tracker")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
            style={{ width: "84%", margin: "auto" }}
          >
            <Link
              className="nav-link"
              to=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                // src={require("../../assets/images/Logos/more.svg")}
                alt="logo"
                height="16"
                width="16"
              />
              <span
                className="menu-title"
                style={{ flex: "0.84", color: "white" }}
              >
                <Trans>More</Trans>
              </span>
            </Link>
          </li>
          {/* <li>
            <Dropdown
              style={{
              }}
            >
              <Dropdown.Toggle
                variant="btn btn-outline-secondary"
                id="dropdownMenuOutlineButton2"
                style={{
                  border: "0px",
                  fontSize: "14px",
                }}
              >
                <Link
                  className="nav-link"
                  to=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <img
                    src={require("../../assets/images/Logos/more.svg")}
                    alt="logo"
                    height="16"
                    width="16"
                  />
                  <span
                    className="menu-title"
                    style={{ flex: "0.84", color: "white" }}
                  >
                    <Trans sx={{ marginLeft: "30px" }}>More</Trans>
                  </span>
                </Link>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ background: "rgba(24,24,24, 1)" }}>
                <Link
                  className="nav-link"
                  to="/price-tracker"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={require("../../assets/images/Logos/price.svg")}
                    alt="logo"
                    height="16"
                    width="16"
                  />
                  <span
                    className="menu-title"
                    style={{ flex: "0.84", color: "white" }}
                  >
                    <Trans>Price Tracker</Trans>
                  </span>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </li> */}
          <li
            className={
              this.isPathActive("/price-tracker")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
            style={{ width: "84%", margin: "auto" }}
          >
            <Link
              className="nav-link"
              to="/price-tracker"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                // src={require("../../assets/images/Logos/price.svg")}
                alt="logo"
                height="16"
                width="16"
              />
              <span
                className="menu-title"
                style={{ flex: "0.84", color: "white" }}
              >
                <Trans>Price Tracker</Trans>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default Sidebar;
