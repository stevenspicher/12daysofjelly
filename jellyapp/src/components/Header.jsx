import React, {useEffect} from "react";
import { Row, Col} from "react-bootstrap";
import {Container, Grid, Box, MenuList, MenuItem, Stack, AppBar, Toolbar, Tooltip, IconButton, ListItemIcon, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import BarChartIcon from '@mui/icons-material/BarChart';
import {useLocation, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import {getState, blink} from "../shared/utilities";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        blink()
    }, []);
    return (

            <Box sx={{maxWidth:"50%"}}>
                <h1  className="title">
                    <b className="blink">1</b>
                    <b className="blink">2</b>
                    <b> </b>
                    <b className="blink">D</b>
                    <b className="blink">a</b>
                    <b className="blink">y</b>
                    <b className="blink">s</b>
                    <b> </b>
                    <b className="blink">o</b>
                    <b className="blink">f</b>
                    <b> </b>
                    <b className="blink">S</b>
                    <b className="blink">p</b>
                    <b className="blink">r</b>
                    <b className="blink">e</b>
                    <b className="blink">a</b>
                    <b className="blink">d</b>
                    <b className="blink">s</b>
                </h1>
            </Box>

    )
}
export default Header;