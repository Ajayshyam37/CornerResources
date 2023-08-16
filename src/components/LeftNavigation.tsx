import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { Audio } from '../../public/assets/Audio';
import { Video } from '../../public/assets/Video';
import { Lights } from '../../public/assets/Lights';
import { Band } from '../../public/assets/Band';
import { PlanningCenter } from '../../public/assets/PlanningCenter';
import { MultiTracks } from '../../public/assets/MultiTracks';

import { useEffect } from 'react';
import { CenteredTitle, PageDescription, PageHeader, RoundedRectangle, selectedButtonStyles, StyledBox, StyledHeading3, TagsText } from './pageStyles';
import Grid from '@mui/material/Grid';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 15,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
    blur : 15
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

const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);


export default function MUIDrawerLeft(props: { tabs: string[]; title: string ;}) {
    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState<string | undefined>(undefined);
    const [selectedDescription, setSelectedDescription] = React.useState<string | TrustedHTML>("");
    const [selectedTags, setSelectedTags] = React.useState<string | undefined>(undefined);
    const [selectedURL, setSelectedURL] = React.useState<string | undefined>(undefined);
    const [selectedPage, setSelectedPage] = React.useState<string>('');

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        // Check if there is a stored selection in local storage
        const storedSelectedItem = localStorage.getItem(`${props.title}_selectedItem`);
        const storedSelectedPage = localStorage.getItem(`${props.title}_selectedPage`);
    
    
        // If there is a stored selection, use it
        if (storedSelectedItem && storedSelectedPage) {
            const selectedItemData = JSON.parse(storedSelectedItem);
            setSelectedItem(selectedItemData.Title);
            setSelectedDescription(selectedItemData.Description);
            setSelectedTags(selectedItemData.Tag);
            setSelectedURL(selectedItemData.Url);
            setSelectedPage(storedSelectedPage);
        } else {
            // Otherwise, automatically select the first item
            if (props.tabs.length > 0) {
                let x = props.tabs[0];
                handlePageClick(x);
            }
        }
    }, [props.tabs]);
    
    const handleItemClick = (item: { Title: string; Description: string; Tag: string; Url: string }) => {
        setSelectedItem(item.Title);
        setSelectedDescription(item.Description);
        setSelectedTags(item.Tag);
        setSelectedURL(item.Url);
    
        // Store the selected item data in local storage
        const selectedItemData = {
            Title: item.Title,
            Description: item.Description,
            Tag: item.Tag,
            Url: item.Url,
            Page: selectedPage, // Store the selected page as well
        };
        localStorage.setItem(`${props.title}_selectedItem`, JSON.stringify(selectedItemData));
        localStorage.setItem(`${props.title}_selectedPage`, selectedPage);
    };
    
    const handlePageClick = (x: string) => {
        setSelectedPage(x);
    
        // Update your data arrays accordingly
        let jsonData;
        if (x === 'Audio') {
            jsonData = Audio;
        } else if (x === 'Video') {
            jsonData = Video;
        } else if (x === 'Lights') {
            jsonData = Lights;
        } else if (x === 'Band') {
            jsonData = Band;
        } else if (x === 'PlanningCenter') {
            jsonData = PlanningCenter;
        } else if (x === 'MultiTracks') {
            jsonData = MultiTracks;
        }
    
        // Automatically select the first item from the data array
        if (jsonData && jsonData.length > 0) {
            handleItemClick(jsonData[0]);
        }
    
        // Store the selected page in local storage
        localStorage.setItem(`${props.title}_selectedPage`, x);
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
                                            marginTop: '15px',
                                            '@media (max-width: 600px)': {
                                                height: '24px',
                                                fontSize: '10px',
                                                margin: '0px'
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
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                anchor="left"
                open={open}
                onBackdropClick={handleDrawerClose}
                onOpen={handleDrawerOpen}
                onClose={handleDrawerClose}
            >
                <DrawerHeader>
                    <CenteredTitle>{props.title}</CenteredTitle>
                    <IconButton onClick={handleDrawerClose}>
                        <CloseIcon/>
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem key={'Home'} disablePadding>
                        <ListItemButton component={Link} to="/">
                            <ListItemText primary={'Home'} />
                        </ListItemButton>
                    </ListItem>
                    {!jsonData || jsonData.map((item: { Title: string; Description: string; Tag: string; Url: string }) => (
                        <ListItem key={item.Title} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    handleItemClick(item);
                                    handleDrawerClose();
                                }}                                
                                style={selectedItem === item.Title ? selectedButtonStyles : {}}
                            >
                                <ListItemText primary={item.Title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
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
