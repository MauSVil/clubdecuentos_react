import React from 'react';
import { withStyles } from '@material-ui/styles'

const styles= {
    contactContainer:{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& p':{
            textAlign: 'center'
        }
    },
    imageContainer: {
        backgroundSize: 'cover',
        borderRadius: '50%',
        border: '2px solid black',
        height: '70px',
        width: '70px'
    }
}

const Contact = (props) => {
    const { classes, name, projectRole, children } = props
    const work = projectRole.toUpperCase()
    return (
        <div className={classes.contactContainer}>
            <div>
                {children}
            </div>
            <p>
                <strong>
                    {name}
                </strong>
            </p>
            <p>
                {work}
            </p>
        </div>
    );
};

export default withStyles(styles)(Contact);
