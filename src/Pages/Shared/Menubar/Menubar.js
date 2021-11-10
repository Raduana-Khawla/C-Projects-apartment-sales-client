import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo-removebg-preview.png'

const Menubar = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <img className="d-inline-block align-top rounded-circle"
                    src={logo}
                    alt="First slide"
                    width="100"
                    height="80"
                  />
                  <h5 className="text-dark">Noor Construction</h5>
                    <Typography>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      Apartment Sales */}
                    </Typography> 
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/notFound"><Button color="inherit">NotFound</Button></NavLink>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Menubar;