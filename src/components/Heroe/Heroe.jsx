import React from 'react';
import { withStyles } from '@material-ui/styles'
import logo from '../../assets/logo.png'
import cuento1 from '../../assets/Cuento1.png'
import cuento2 from '../../assets/Cuento2.png'
import cuento3 from '../../assets/Cuento3.png'
import cuento4 from '../../assets/Cuento4.png'

const styles= {
    heroeContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px'
    },
    logo: {
        backgroundImage: `url(${logo})`,
        width: '300px',
        height: '300px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    cuentosContainer: {
        display: 'flex',
    },
    cuento: {
        height: '110px',
        width: '110px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    cuento1: {
        backgroundImage: `url(${cuento1})`,
    },
    cuento2: {
        backgroundImage: `url(${cuento2})`,
    },
    cuento3: {
        backgroundImage: `url(${cuento3})`,
    },
    cuento4: {
        backgroundImage: `url(${cuento4})`,
    }
}

const Heroe = (props) => {

    const { classes }= props

    return (
        <div className={classes.heroeContainer}>
            {/* <img src="" alt="Logo"/> */}
            <div className={classes.logo}/>
            <div className={classes.cuentosContainer}>
                <div className={`${classes.cuento} ${classes.cuento1}`}/>
                <div className={`${classes.cuento} ${classes.cuento2}`}/>
                <div className={`${classes.cuento} ${classes.cuento3}`}/>
                <div className={`${classes.cuento} ${classes.cuento4}`}/>
            </div>
        </div>
    );
};

export default withStyles(styles)(Heroe);
