import { Grid } from "@mui/material";
import styled from "styled-components";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

import { mediaQueries } from "../components/MediaQueries";
import { CenteredContainer, CenteredContent, Header } from "../components/pageStyles";

export function Home() {
    const navigateTo = useNavigate();

    // Function to handle card click event and navigate to the desired page
    const handleCardClick = (pageUrl) => {
        navigateTo(pageUrl); // Navigate to the specified page URL
    };

    return (
        <>
            <Header>
                <h1>Corner Resources</h1>
            </Header>
            <CenteredContainer>
                <Grid container spacing={8} justifyContent="center">
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: "auto", position: "relative", height: "100%", display: "flex" }}>
                            <CardActionArea
                                style={{ flexGrow: 1 }}
                                onClick={() => handleCardClick("/Tech/Welcome")} 
                            >
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    width="auto"
                                    image="https://images.unsplash.com/photo-1504904126298-3fde501c9b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                    alt=" Tech Team"
                                    sx={{ filter: "blur(1px)" }}
                                />
                                <CardContent sx={{ height: "100%" }}>
                                    <CenteredContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Tech Team
                                        </Typography>
                                    </CenteredContent>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <Card sx={{ maxWidth: "auto", position: "relative", height: "100%", display: "flex" }}>
                            <CardActionArea
                                style={{ flexGrow: 1 }}
                                onClick={() => handleCardClick("/Worship/Welcome")} 
                            >
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    width="auto"
                                    image="https://images.unsplash.com/photo-1583162061967-eacb13d913a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                    alt=" Worship Team"
                                    sx={{ filter: "blur(1px)" }}
                                />
                                <CardContent sx={{ height: "100%" }}>
                                    <CenteredContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Worship Team
                                        </Typography>
                                    </CenteredContent>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </CenteredContainer>
        </>
    );
}
