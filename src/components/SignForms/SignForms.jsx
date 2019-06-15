import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/styles'
import SignUpForm from '../SignUpForm';
import SignInForm from '../SignInForm';

const styles = {
    formContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        padding: '30px',
    },
    tabs: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}

class SignForms extends Component {
    state = {
        index: 0,
      };
    
    handleChange = (event, value) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };
    render() {
        const { classes } = this.props
        const { index } = this.state;
        return (
            <div className={classes.formContainer}>
                <Tabs value={index} fullWidth onChange={this.handleChange} className={classes.tabs}>
                    <Tab label="Sign In" />
                    <Tab label="Sign Up" />
                </Tabs>
                <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <SignInForm/>
                    <SignUpForm/>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles)(SignForms);