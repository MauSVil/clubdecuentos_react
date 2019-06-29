import React from 'react';
import { withStyles } from '@material-ui/styles'
import { Link } from "@reach/router"
import { useAuth0 } from "../../react-auth0-wrapper";

const styles={
    header:{
        backgroundColor: 'lightgray',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '50px',
    },
    links: {
        display: 'flex',
        width: '50%',
        justifyContent: 'space-around',
        '& a': {
            textDecoration: 'none',
            color: 'black',
        },
    }
}

const Header = (props) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    console.log(useAuth0)
    const { classes } = props
    return (
        <header className={classes.header}>
            <div className={classes.links}>
                <Link to="/">Home</Link>&nbsp;
                <Link to="creatucuento">Crea Tu Cuento</Link>
                {isAuthenticated && <span onClick={() => logout()}>Log out</span>}
                {!isAuthenticated && (
                    <span
                    onClick={() =>
                        loginWithRedirect({})
                    }
                    >
                        Log in
                    </span>
                )}

                {isAuthenticated && (
                    <Link to="profile">Profile</Link>
                )
                }
            </div>
        </header>
    );
};

export default withStyles(styles)(Header);