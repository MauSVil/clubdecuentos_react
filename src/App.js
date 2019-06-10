import React from 'react';
import { Router } from "@reach/router"
import CreaTuCuento from './views/CreaTuCuento';
import Header from './components/Header';
import Home from './views/Home/Home';
import { withStyles } from '@material-ui/styles'


const styles = {
  contentContainer:{
    display: 'flex',
    justifyContent: 'center',
    padding: '30px',
  }
}

function App(props) {

  const { classes } = props

  return (
    <div className="App">
      <Header/>
      <div className={classes.contentContainer}>
        <Router>
          <Home path="/" />
          <CreaTuCuento path="/creatucuento" />
        </Router>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);

