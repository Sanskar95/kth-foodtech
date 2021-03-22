import React, { useEffect } from "react";
import "./Layout.css";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';
import PlaceIcon from '@material-ui/icons/Place';
import logoSrc from "../assets/pictures/KTHFoodTechLogo.png";
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const Layout = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    // useEffect(() => {
    //   // setRole(localStorage.getItem("role"));
    // });

    function toggleDrawer() {
        setDrawerOpen(!drawerOpen);
    }
    const list =()=>{
        return (
            <List style={{ backgroundColor: "#f2f2f2" }}>
                <Link
                    to={"/"}
                    style={{ textDecoration: "none" }}
                >
                    <ListItem button onClick={() => toggleDrawer()}>
                        <ListItemIcon>
                            <HomeWorkIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                </Link>
                <Link
                    to={"/blogs"}
                    style={{ textDecoration: "none" }}
                >
                    <ListItem button onClick={() => toggleDrawer()}>
                        <ListItemIcon>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Blogs"} />
                    </ListItem>
                </Link>
            </List>
        );
    }
    return (
        <div>
            <AppBar position="sticky" style={{background: 'rgba(254,255,32,0.63)'}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="black"
                        aria-label="menu"
                        onClick={() => toggleDrawer()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ flexGrow: 1 }}>
                       <img style={{height: '4rem', width: '17rem'}} src={logoSrc}/>
                    </Typography>

                </Toolbar>
            </AppBar>

            <Drawer anchor={"left"} open={drawerOpen} onClose={() => toggleDrawer()}>
                {list()}
            </Drawer>
        </div>
    );
};

export default Layout;
