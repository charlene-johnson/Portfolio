import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles,
        Grid,
        Hidden,
} from '@material-ui/core';

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
    }
}));

export default function Footer() {
    const classes = useStyles()
  
    return (
        <footer className={classes.footer}>
            <Grid container justify="center">
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/" className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction ="column" spacing={2}>
                        <Grid item component={Link} to="/about" className={classes.link}>
                            About Me
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/projects" className={classes.link}>
                            Projects
                        </Grid>
                        <Grid item component={Link} to="/project1" className={classes.link}>
                            Project 1
                        </Grid>
                        <Grid item component={Link} to="/project2" className={classes.link}>
                            Project 2
                        </Grid>
                        <Grid item component={Link} to="/arcdevelopment" className={classes.link}>
                            Arc Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/resume" className={classes.link}>
                            Resume
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/contact" className={classes.link}>
                        Contact Me
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>

    )
}