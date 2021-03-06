import React from 'react';
import { Router } from "@reach/router"
import Header from './components/Header';
import Home from './views/Home/Home';
import { withStyles } from '@material-ui/styles'
import texture from './assets/texture1.png'
import Footer from './components/Footer';
import CreateStory from './views/CreateStory';
import Profile from "./views/Profile/Profile";


const styles = {
    app: {
        backgroundImage: `url(${texture})`,
    },
    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '30px',
        minHeight: '80.8vh'
    }
}

function App(props) {

    const { classes } = props

    return ( 
    <div className = { classes.app }>
        <Header/>
        <div className = { classes.contentContainer } >
            <Router >
                <Home path = "/" />
                <CreateStory path = "/creatucuento" />
                <Profile path = "/profile"/>
            </Router>
        </div>
        <Footer/>
    </div>
    );
}

export default withStyles(styles)(App);