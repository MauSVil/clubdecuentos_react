import React from 'react';
import { withStyles } from '@material-ui/styles'
import SelectedStories from '../SelectedStories/SelectedStories';

const styles = {
    profileInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileInfo: {
        padding: '30px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '80px',
        backgroundColor: 'mediumpurple',
        borderRadius: '75% 0px 75%',
        color: 'white',
    },
    name: {
        display:'flex',
        justifyContent:'center',
        flexDirection: 'column',
        textAlign: 'center',
        paddingLeft: '40px'
    },
    profileAvatar: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
    },
}

const ProfileInfo = (props) => {
    const {user, classes} = props;
    return ( 
        <div className={classes.profileInfoContainer}>
            <div className={classes.profileInfo}>
                <div className={classes.name}>
                    <p>{user.name.toUpperCase()}</p>
                    <p>{user.email}</p>
                </div>
                <img src={user.picture} alt="Profile" className={classes.profileAvatar}/>
            </div>
            <SelectedStories/>
        </div>
     );
}
 
export default withStyles(styles)(ProfileInfo);