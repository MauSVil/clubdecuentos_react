import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
        name: '',
        username: '',
        email: '',
        gender: '',
        password: '',
        address: '',
      };
    
      handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
      };

      handleSubmit = ()=>{
        console.log(this.state)
      }
      
      render() {
        const { classes } = this.props
        return (
            <div className={classes.signInInputs}>
                <TextField
                    id="name"
                    label="Name"
                    onChange={this.handleChange}
                    // className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="username"
                    label="Username"
                    onChange={this.handleChange}
                    // className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="email"
                    onChange={this.handleChange}
                    // className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="gender"
                    label="Gender"
                    onChange={this.handleChange}
                    // className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="password"
                    label="Password"
                    onChange={this.handleChange}
                    // className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="address"
                    label="Address"
                    onChange={this.handleChange}
                    // className={classes.textField}
                    margin="normal"
                />
                <Button size="small" variant="outlined" onClick={()=>this.handleSubmit()}>
                    Sign Up
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(SignUpForm);
