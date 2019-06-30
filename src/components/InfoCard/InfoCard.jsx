import React from 'react';
import { withStyles } from '@material-ui/styles'
import clsx from 'clsx'

const styles= {
    infoContainer: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        '& h1': {
            textAlign: 'center',
        },
        '& hr': {
            borderColor: '#6258A0',
            width: '50%'
        },
        '& p':{
            textAlign: 'center',
        }
    },
    infoContent: {
        display: 'grid',
        gridGap: '10px'
    },
    infoContent2columns: {
        gridTemplateColumns: '1fr 1fr'
    }

}


const InfoCard = (props) => {

    const { classes, title, hasLineDivider, hasImage, image, columns, children} = props

    const infoContent = clsx(
        classes.infoContent,
        columns===2 && classes.infoContent2columns,
    )

    return (
        <div className={classes.infoContainer}>
            { hasImage && <img src={image} alt="Imagen de Info"/> }
            <h1>
                {title}
            </h1>
            { hasLineDivider && <hr/> }
            <div className={infoContent}>
                {children}
            </div>
        </div>
    );
};

export default withStyles(styles)(InfoCard);
