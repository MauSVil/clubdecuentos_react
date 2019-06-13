import React from 'react';
import { withStyles } from '@material-ui/styles'

const styles={
    footerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    socialMediaContainer:{
        display: 'flex',
        alignItems: 'center',
    },
    socialMedia: {
        borderRight: '1px solid black',
        padding: '5px',
    },
    instagram: {
        padding: '5px',
    }
}

const Footer = (props) => {
    const { classes } = props
    return (
        <footer className={classes.footerContainer}>
            <p>
                Mi club de cuentos by <strong>Grupo Kitma</strong>
            </p>
            <div className={classes.socialMediaContainer}>
                <p>
                    Siguenos
                </p>
                <div className= {classes.socialMedia}>
                    <img src="" alt="Facebook"/>
                </div>
                <div className= {classes.socialMedia}>
                    <img src="" alt="Twitter"/>
                </div>
                <div className= {classes.instagram}>
                    <img src="" alt="Instagram"/>
                </div>
            </div>
        </footer>
    );
};

export default withStyles(styles)(Footer);