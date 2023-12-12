import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import Container from "@mui/material/Container";
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Backdrop from '@mui/material/Backdrop';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import BarChartIcon from '@mui/icons-material/BarChart';
import {useLocation, useNavigate} from "react-router-dom";
import {getState} from "../shared/utilities";
import Header from "../components/Header";



export default function BasicSpeedDial() {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateToPage = (page) => {
        navigate(page, getState(location, location.state.currentUserDetails, location.state.id))
    }

    const actions = [
        { icon: <ThumbsUpDownIcon fontSize={"small"}/>, name: 'Rate!', onClick: () => navigateToPage("/jellies") },
        { icon: <BarChartIcon />, name: 'Ratings', onClick: () => navigateToPage("/chart") },
        { icon: <ListIcon />, name: 'WishList', onClick: () => navigateToPage("/table") },
        { icon: <LogoutIcon />, name: 'Logout', onClick: () => navigateToPage("/login") },
    ];
    return (
        <Container sx={{marginBottom:"70px"}}>
        <Box sx={{ height: 200, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: 'absolute', bottom: -116, right: -15 }}
                icon={<SpeedDialIcon />}
                direction={"down"}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={action.onClick}
                    />
                ))}
            </SpeedDial>
            <Header/>
        </Box>
        </Container>
    );
}