import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles'

const styles = {
    signInInputs: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px',
        textAlign: 'center'
    },
    signUpInputs: {
        display: 'grid',
        gridGap: '20px',
        textAlign: 'center'
    }
  }

class SignUpForm extends Component {
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
        return (
            <div className={classes.signInInputs}>
                <TextField
                    id="standard-name"
                    label="Name"
                    // className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Username"
                    // className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="email"
                    // className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Gender"
                    // className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Password"
                    // className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Adress"
                    // className={classes.textField}
                    margin="normal"
                />
            </div>
        );
    }
}

export default withStyles(styles)(SignUpForm);
