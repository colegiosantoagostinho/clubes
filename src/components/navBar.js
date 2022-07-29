import { Toolbar, AppBar, styled } from "@mui/material";
import React from "react";

const NavBar = () => {

    const StyledTypography = styled('Typography')(({ theme }) => ({
        ...theme.typography.button,
    }));

    return <AppBar position="static" color="primary">
        <Toolbar style={{margin:"auto"}}>
            <StyledTypography sx={{fontSize:36}}>
                Clubes
            </StyledTypography>
        </Toolbar>
    </AppBar>
}

export default NavBar