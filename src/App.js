import React from 'react';
import { Router } from "@reach/router"
import CreaTuCuento from './views/CreaTuCuento';
import Header from './components/Header';
import Home from './views/Home/Home';
import { withStyles } from '@material-ui/styles'
import texture from './assets/texture1.png'
import Footer from './components/Footer';
import SignIn from './views/SingIn';
import SignUp from './views/SingUp';


const styles = {
  app: {
    backgroundImage: `url(${texture})`,
  },
  contentContainer:{
    display: 'flex',
    justifyContent: 'center',
    padding: '30px',
  }
}

function App(props) {

  const { classes } = props

  return (
    <div className={classes.app}>
      <Header/>
      <div className={classes.contentContainer}>
        <Router>
          <Home path="/" />
          <CreaTuCuento path="/creatucuento" />
          <SignIn path="/signin" />
          <SignUp path="/signup" />
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default withStyles(styles)(App);

