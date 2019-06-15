import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';

const styles = {
    signUpInputs: {
        display: 'grid',
        gridGap: '20px',
        textAlign: 'center'
    }
  }

class SignInForm extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.signUpInputs}>
                <TextField
                    id="standard-name"
                    label="Username"
                    // className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Password"
                    // className={classes.textField}
                    margin="normal"
                />
            </div>
        );
    }
}

export default withStyles(styles)(SignInForm);
