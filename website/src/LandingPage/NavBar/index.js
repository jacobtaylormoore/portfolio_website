import './index.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

function NavBar() {

    const NavButton = styled(Button)(() => ({
        color: "#3D405B",
        borderColor: "#3D405B",
        fontFamily: "WorkSans",
        '&:hover': {
            color: "#3D405B",
            borderColor: "#3D405B",
        }
    }))

    return (
        <section id="NavBar">
            <div id="TextContainer">
                <Stack spacing={2} direction="row">
                    <NavButton variant="outlined" href="#Projects">Projects</NavButton>
                    <NavButton variant="outlined" href="#Experience">Experience</NavButton>
                    <NavButton variant="outlined" href="#AboutPage">About Me</NavButton>
                    <NavButton variant="outlined" href="#ContactPage">Contact</NavButton>
                </Stack>
            </div>
        </section>
    );
}

export default NavBar;