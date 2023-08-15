import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { Audio } from '../assets/Audio';
import { Video } from '../assets/Video';
import { Lights } from '../assets/Lights';
import { Band } from '../assets/Band';
import { PlanningCenter } from '../assets/PlanningCenter';
import { MultiTracks } from '../assets/MultiTracks';

import { useEffect } from 'react';
import { CenteredTitle, PageDescription, PageHeader, RoundedRectangle, selectedButtonStyles, StyledBox, StyledHeading3, TagsText } from './pageStyles';
import Grid from '@mui/material/Grid';

const drawerWidth = 340;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    marginTop: 15,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    backgroundColor: 'white',
    color: 'black',
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function MUIDrawerLeft(props: { tabs: string[]; title: string }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [selectedItem, setSelectedItem] = React.useState<string | undefined>(undefined);
    const [selectedDescription, setSelectedDescription] = React.useState<string | TrustedHTML>("");
    const [selectedTags, setSelectedTags] = React.useState<string | undefined>(undefined);
    const [selectedURL, setSelectedURL] = React.useState<string | undefined>(undefined);
    const [selectedPage, setSelectedPage] = React.useState<string | undefined>(undefined);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        // Automatically select the first item when the component mounts
        if (props.tabs.length > 0) {
            let x = props.tabs[0];
            handlePageClick(x);
        }
    }, []);

    const handleItemClick = (item: { Title: string; Description: string; Tag: string; Url: string }) => {
        setSelectedItem(item.Title);
        setSelectedDescription(item.Description);
        setSelectedTags(item.Tag);
        setSelectedURL(item.Url);
    };

    const handlePageClick = (x: string) => {
        setSelectedPage(x);
        if (x === 'Audio') {
            handleItemClick(Audio[0]);
        } else if (x === 'Video') {
            handleItemClick(Video[0]);
        } else if (x === 'Lights') {
            handleItemClick(Lights[0]);
        } else if (x === 'Band') {
            handleItemClick(Band[0]);
        } else if (x === 'PlanningCenter') {
            handleItemClick(PlanningCenter[0]);
        } else if (x === 'MultiTracks') {
            handleItemClick(MultiTracks[0]);
        }
    };

    // Determine which JSON data to use based on the selected page
    let jsonData;
    if (selectedPage === 'Audio') {
        jsonData = Audio;
    } else if (selectedPage === 'Video') {
        jsonData = Video;
    } else if (selectedPage === 'Lights') {
        jsonData = Lights;
    } else if (selectedPage === 'Band') {
        jsonData = Band;
    } else if (selectedPage === 'PlanningCenter') {
        jsonData = PlanningCenter;
    } else if (selectedPage === 'MultiTracks') {
        jsonData = MultiTracks;
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar elevation={0} open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container spacing={0}>
                        <Grid item md={8} sm={8} xs={12}>
                            <StyledHeading3>Corner Resources</StyledHeading3>
                        </Grid>
                        <Grid item md={4} sm={4} xs={12}>
                            <StyledBox>
                                {props.tabs.map((page) => (
                                    <Button
                                    variant="text"
                                        key={page}
                                        sx={{
                                            color: 'black',
                                            backgroundColor: selectedPage === page ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                                            height: '40px',
                                            marginTop:'15px',
                                            '@media (max-width: 600px)': {
                                                height: '24px',
                                                fontSize: '10px',
                                                margin:'0px'
                                            },
                                        }}
                                        onClick={() => handlePageClick(page)}
                                    >
                                        <h4>{page}</h4>
                                    </Button>

                                ))}
                            </StyledBox>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
            
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <CenteredTitle>{props.title}</CenteredTitle>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem key={'Home'} disablePadding>
                        <ListItemButton component={Link} to="/">
                            <ListItemText primary={'Home'} />
                        </ListItemButton>
                    </ListItem>
                    {!jsonData || jsonData.map((item) => (
                        <ListItem key={item.Title} disablePadding>
                            <ListItemButton
                                onClick={() => handleItemClick(item)}
                                style={selectedItem === item.Title ? selectedButtonStyles : {}}
                            >
                                <ListItemText primary={item.Title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <PageHeader>
                            {selectedItem}
                        </PageHeader>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <RoundedRectangle>
                            <TagsText>{selectedTags}</TagsText>
                        </RoundedRectangle>
                    </Grid>
                </Grid>

                {selectedURL && (
                    <iframe
                        width="100%" // Set to 100% to ensure responsiveness
                        height="450" // Set an appropriate height
                        src={selectedURL}
                        title={selectedItem}
                        frameBorder="0"
                        allow=" encrypted-media; gyroscope; fullscreen;"
                    />
                )}
                <PageDescription>
                    <div dangerouslySetInnerHTML={{ __html: selectedDescription }}></div>
                </PageDescription>
            </Main>
        </Box>
    );
}
