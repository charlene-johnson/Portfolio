import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import logo from '../../img/logocircle.png';

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
    marginBottom: "3.5em",
  },
  logo: {
      height: '7em',
  },
  logoContainer: {
      padding: 0,
      "&:hover": {
          backgroundColor: "transparent",
    }
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginRight: "75px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/about" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/projects" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/resume" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src ={logo} alt="portfolio logo" className={classes.logo} />
            <Typography variant="h1" style={{fontFamily:"Sriracha"}}>Full Stack Web Developer</Typography>
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
                className={classes.tab}
                component={Link}
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
