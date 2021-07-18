import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles,
        Grid,
        Hidden,
} from '@material-ui/core';

import facebook from '../../img/facebook-brands.svg';
import linkedin from '../../img/linkedin-brands.svg';
import twitter from '../../img/twitter-brands.svg';
import github from '../../img/github-brands.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.pink,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },

    gridItem: {
        margin: "3em"
    },
    link: {
        color: "#AFD275",
        fontFamily: "Montserrat",
        fontSize: "0.95rem",
        fontWeight: "Bold",
        textDecoration: "None"
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em"
        }
    },
    icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em"
        }
    }
}));

export default function Footer(props) {
    const classes = useStyles()
  
    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center">
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(0)} to="/" className={classes.link}>
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction ="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(1)} to="/about" className={classes.link}>
                                About Me
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => {props.setValue(2); props.setSelectedIndex(0)}} to="/projects" className={classes.link}>
                                Projects
                            </Grid>
                            <Grid item component={Link} onClick={() => {props.setValue(2); props.setSelectedIndex(1)}} to="/project1" className={classes.link}>
                                Project 1
                            </Grid>
                            <Grid item component={Link} onClick={() => {props.setValue(2); props.setSelectedIndex(2)}} to="/project2" className={classes.link}>
                                Project 2
                            </Grid>
                            <Grid item component={Link} onClick={() => {props.setValue(2); props.setSelectedIndex(3)}} to="/arcdevelopment" className={classes.link}>
                                Arc Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(3)} to="/resume" className={classes.link}>
                                Resume
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(4)} to="/contact" className={classes.link}>
                            Contact Me
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={"a"} href="https://www.facebook.com/charlene.johnson8" rel="noopener noreferrer" target="blank">
                    <img alt='facebook logo' src={facebook} className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://www.linkedin.com/in/charlene-johnson-codes/" rel="noopener noreferrer" target="blank">
                    <img alt='linkedin logo' src={linkedin} className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://github.com/charlene-johnson" rel="noopener noreferrer" target="blank">
                    <img alt='github logo' src={github} className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://twitter.com/CharJ8234" rel="noopener noreferrer" target="blank">
                    <img alt='twitter logo' src={twitter} className={classes.icon} />
                </Grid>
            </Grid>
            <div style={{color:"#AFD275", fontFamily:"Montserrat"}}>&copy; Charlene Johnson 2021</div>
        </footer>
    );
}