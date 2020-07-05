import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import logo from "../../img/logocircle.png";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2.5em",
  },
  logo: {
    height: "7em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginRight: "75px",
  },
  menu: {
    backgroundColor: theme.palette.common.pink,
    color: theme.palette.common.green,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: "Projects", link: "/projects" },
    { name: "Project 1", link: "/project1" },
    { name: "Project 2", link: "/project2" },
    { name: "Arc Development", link: "/arcdevelopment" },
  ];

  useEffect(() => {
    // if (window.location.pathname === "/" && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === "/about" && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === "/projects" && value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === "/resume" && value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === "/contact" && value !== 4) {
    //   setValue(4);
    // }
    switch (window.location.pathname) {
        case "/":
            if (value !==0) {
                setValue(0);
            }
            break;
        case '/about':
            if (value !== 1) {
                setValue(1)
            }
            break;
        case '/projects':
            if (value !== 2) {
                setValue(2);
                setSelectedIndex(0);
            }
            break;
        case '/project1':
            if (value !== 2) {
                setValue(2);
                setSelectedIndex(1)
            }
            break;
        case '/project2':
            if (value !== 2) {
                setValue(2);
                setSelectedIndex(2)
            }
            break;
        case '/arcdevelopment':
            if (value !== 2) {
                setValue(2);
                setSelectedIndex(3);
            }
            break;
        case '/resume':
            if (value !== 3) {
                setValue(3)
            }
            break;
        case '/contact':
            if (value !== 4) {
                setValue(4)
            }
            break;
            default:
                break;
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => setValue(0)}
              className={classes.logoContainer}
            >
              <img src={logo} alt="portfolio logo" className={classes.logo} />
              <Typography variant="h1" style={{ fontFamily: "Sriracha" }}>
                Full Stack Web Developer
              </Typography>
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Me"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={(event) => handleClick(event)}
                to="/projects"
                label="Projects"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/resume"
                label=" My Resume"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Me"
              />
            </Tabs>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
              <MenuItem
                key={option}
                onClick={(event) => {
                  handleMenuItemClick(event, i)
                  handleClose();
                  setValue(2);
                  
                }}
                component={Link}
                to={option.link}
                classes={{ root: classes.menuItem }}
                selected={ i=== selectedIndex && value === 2}
              >
                {option.name}
              </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
