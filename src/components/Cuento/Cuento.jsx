import React from 'react';
import { withStyles } from '@material-ui/styles'
import clsx from 'clsx';
import PropTypes from 'prop-types';

const styles = {
    storyContainer: {
        display: 'flex',
        maxWidth: '300px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
        boxSizing: 'border-box',
        textAlign: 'center',
        borderRadius: '10px',
        boxShadow: '7px 10px 5px 0px rgba(255,255,255,1)',
        border: '1px solid black',
    },
    selected: {
        opacity: '1',
    },
    disable: {
        display: 'none',
    },
    storyTitle: {   
        marginTop: '10px',
        marginBottom: '5px',
    },
    storyInfo: {
        margin: '5px',
    }
}

const Cuento = (props) => {
    const { title, author, cost, selected, classes, onClick, i, firstTime } = props;
    
    const cuento = clsx(
        classes.storyContainer,
        selected || firstTime ? classes.selected : classes.disable
    )

    const handleClick= (i)=>{
        onClick(i)
    }

    return (
        // selected && (
        <div
            onClick={()=>{handleClick(i, firstTime)}} 
            className={cuento}
        >
            <img src="" alt="Foto Cuento"/>
            <h3 className={classes.storyTitle}>{title}</h3>
            <p className={classes.storyInfo}><strong>{author}</strong></p>
            <p className={classes.storyInfo}>{cost}</p>
            <p className={classes.storyInfo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. Magnam quo molestiae fuga, fugit cumque maiores 
                rerum totam natus ab temporibus a quos 
                illo corrupti perferendis dolores 
                voluptatibus architecto in dolorum!
            </p>
        </div>
        )
    // );
};

Cuento.propTypes = {
    selected: PropTypes.bool,
};

export default withStyles(styles)(Cuento);