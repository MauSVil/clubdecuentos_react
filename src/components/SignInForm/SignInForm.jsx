import React, { Component } from 'react';
import usuarios from '../../users'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const styles = {
    signUpInputs: {
        display: 'grid',
        gridGap: '20px',
        textAlign: 'center'
    }
  }

class SignInForm extends Component {
    state={
        username: '',
        password: '',
        errors: {
            userCorrect: ''
        }
    }

    
    handleChange= (e)=> {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    
    // Validacion si existe el usuario
    
    handleSubmit = async ()=>{
        const {username, password} = this.state
        const userlog= {username, password}
        const user= await axios.post('http://localhost:3800/api/login/user', userlog)
        this.setState({
            errors: {
                userCorrect: user.data.message
            }
        })
    }
    
    render() {
        const { classes } = this.props
        return (
            <div>
                <div className={classes.signUpInputs}>
                    <TextField
                        id="username"
                        label="Username"
                        margin="normal"
                        onChange={(e)=>this.handleChange(e)}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        margin="normal"
                        onChange={(e)=>this.handleChange(e)}
                    />
                </div>
                <Button size="small" variant="outlined" onClick={()=>this.handleSubmit()}>
                    Sign In
                </Button>
                <p>{this.state.errors.userCorrect}</p>
            </div>
        );
    }
}

export default withStyles(styles)(SignInForm);
