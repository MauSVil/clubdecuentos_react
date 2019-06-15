import React, { Component } from 'react';
import usuarios from '../../users'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            userCorrect: false
        }
    }

    handleChange= (e)=> {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    // Validacion si existe el usuario

    handleSubmit = ()=>{
        if (usuarios.some((user)=>{
            return user.user === this.state.username && user.password === this.state.password
        })){
            this.setState({
                errors: {
                    userCorrect: true,
                }
            })
        }
        else {
            this.setState({
                errors: {
                    userCorrect: false,
                }
            })
        }
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
                    Hola
                </Button>
                {this.state.errors.userCorrect ? <p>
                    Lo hiciste bien!
                </p> : <p>Intentalo de nuevo</p>}
            </div>
        );
    }
}

export default withStyles(styles)(SignInForm);
