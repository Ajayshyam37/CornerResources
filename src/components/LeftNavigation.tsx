import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';


import { Audio } from '../assets/audio';
import { Video } from '../assets/Video';
import { Lights } from '../assets/Lights';
import { useEffect } from 'react';
import { PageDescription, PageHeader, StyledBox, StyledBoxVideo } from './pageStyles';

const drawerWidth = 240;


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



export default function MUIDrawerLeft(props: string[]) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
    const [selectedDescription, setSelectedDescription] = React.useState<string | null>(null);
    const [selectedTags, setSelectedTags] = React.useState<string | null>(null);
    const [selectedURL, setSelectedURL] = React.useState<string | null>(null);
    const [selectedPage, setSelectedPage] = React.useState<string | null>(null);

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

    const handleItemClick = (item: { Title: string; Description: string; Tag: string; Url: string; }) => {
        setSelectedItem(item.Title);
        setSelectedDescription(item.Description);
        setSelectedTags(item.Tag);
        setSelectedURL(item.Url);
    };

    const handlePageClick = (x: string) => {
        setSelectedPage(x);
        if (x == 'Audio') {
            handleItemClick(Audio[0]);
        } else if (x == 'Video') {
            handleItemClick(Video[0]);
        } else if (x == 'Lights') {
            handleItemClick(Lights[0]);
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
                    <h1>Corner Resources</h1>
                    <StyledBox>
                        {props.tabs.map((page, index) => (
                            <Button
                                key={page}
                                sx={{
                                    color: 'black',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                }}
                                onClick={() => handlePageClick(page)}
                            >
                                <h4>{page}</h4>
                            </Button>
                        ))}
                    </StyledBox>
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
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem key={"Home"} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={"Home"} />
                        </ListItemButton>
                    </ListItem>
                    {!jsonData || jsonData.map((item) => (
                        <ListItem key={item.Title} disablePadding>
                            <ListItemButton onClick={() => handleItemClick(item)}>
                                <ListItemText primary={item.Title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <PageHeader>
                    {selectedItem}
                </PageHeader>
                <Typography paragraph>
                    {selectedTags}
                </Typography>
                <iframe width="70%" height="80%" src={selectedURL} title= {selectedItem} frameborder="25" allow="autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen;"></iframe>
                <PageDescription>
                    {selectedDescription}
                </PageDescription>

            </Main>
        </Box>
    );
}
