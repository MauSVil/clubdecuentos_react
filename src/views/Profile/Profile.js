// src/components/Profile.js

import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { withStyles } from '@material-ui/styles'
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const styles = {
    profileContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '700px',
    },
    historySelected: {
      display: 'flex',
      alignItems: 'center',
    },
  }

const Profile = (props) => {
    const { loading, user } = useAuth0();
    const { classes } = props;

    console.log(user)

    if (loading || !user) {
        return "Loading...";
    }

    return ( 
    <div className={classes.profileContainer}>
        <ProfileInfo user={user}/>
    </div>
    );
};

export default withStyles(styles)(Profile);