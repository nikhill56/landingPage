import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

// import { styled } from '@mui/material/styles';
const CssTextField = styled(TextField)({
    '& label': {
      color: 'rgba(202, 202, 202, 1)',
    },
    '& label.Mui-focused': {
      color: 'rgba(202, 202, 202, 1)',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'black',
      color: 'rgba(202, 202, 202, 1)',
      '& fieldset': {
        borderColor: '#434343',
      },
      '&:hover fieldset': {
        borderColor: '#434343',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#434343',
      },
    },
  });
  
  class Navbar extends Component {
    toggleOffcanvas() {
      document.querySelector('.sidebar-offcanvas').classList.toggle('active');
    }
    toggleRightSidebar() {
      document.querySelector('.right-sidebar').classList.toggle('open');
    }
  
    render() {
      return (
        <nav className="navbar p-0 d-flex flex-row" style={{ backgroundColor: 'inherit', left: '0px', position: 'relative', top: '-0.875rem', height: '70px', width: `${this.props.width}` }}>
          <div className="navbar-menu-wrapper flex-grow d-flex align-items-center" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 style={{color:"white" }}>{this.props.heading}</h2>
  
            <ul className="navbar-nav navbar-nav-right" style={{ flex: '0.6', display: 'flex', justifyContent: 'space-between' }}>
              <li className="nav-item d-none d-lg-block">
                {/* <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', background: 'linear-gradient(180deg, #FF40A5 0%, #E14CD1 100%)', padding: '7px 12px', borderRadius: '14px', width: '64px', boxShadow: '0px 4px 31px #5414C3' }}>
                  <img src={require('./noti.png')} alt="" style={{color:"white"}}/>
                  <p style={{ margin: '0px' }}>1</p>
                </div> */}
              </li>
              <li className="nav-item d-none d-lg-block">
                
              </li>
  
              {/* <Dropdown style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <Dropdown.Toggle variant="btn btn-outline-secondary" id="dropdownMenuOutlineButton2" style={{ border: '0px',padding: '10px 16px' }}>
                  manikumar.eth
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ background: 'rgba(24,24,24, 1)' }}>
                  <Dropdown.Header>Settings</Dropdown.Header>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else here</Dropdown.Item>
                  <Dropdown.Divider></Dropdown.Divider>
                  <Dropdown.Item>Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <img src={require('../Communities/face1.png')} alt="" style={{ cursor: 'pointer',height:"80px",width:"80px",borderRadius:"1%"}} />
              <h4 style={{padding: "10px", color: "white"}}>
                manikumar.eth
              </h4>
              <img src={require('./noti.png')} alt="" style={{ cursor: 'pointer',height:"80px",width:"80px",borderRadius:"1%"}} />
              {/* <CssTextField
                name='search'
                // value={formik.values.email}
                // onChange={formik.handleChange}
                label="Search"
                variant="outlined"
                // error={formik.touched.email && Boolean(formik.errors.email)}
                // helperText={formik.touched.email && formik.errors.email}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'>
                        <img src={require('../assets/images/Logos/search.svg')} alt="" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              /> */}
  
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
              <span className="mdi mdi-format-line-spacing"></span>
            </button>
          </div>
        </nav>
      );
    }
  }
  
  export default Navbar;