import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import axios from 'axios'

const styles= {
    superContainer: {
        padding: '30px',
        height: '440px',
        '& p': {
            lineHeight: '35px'
        }
    },
    contenidoContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        userSelect:'none',
        gridRowGap: '70px',
        height: '350px'
    },
    page: {
        padding: '20px',
        textAlign: 'center',
    },
    buttonContainer:{
        position: 'absolute',
        bottom: '40px',
        left: '450px'
    },
    title:{
        display:'flex',
        justifyContent: 'center',
        '& h3':{
            margin: 0,
        }
    }
}

class ContenidoCuento extends Component {
    state= {
        pagina: 0,
        content: [],
        title: "",
    }

    componentDidMount = async ()=>{
        const response = await axios.get('http://localhost:3800/api/cuentos/cuentos')
        this.setState({
            content: response.data.stories[3].content,
            title: response.data.stories[3].title
        })
    }

    
    previousPage = () => {
        if (this.state.pagina > 0){
            this.setState({
                pagina: this.state.pagina = this.state.pagina-1
            })
        }
    }
    nextPage= ()=>{
        if (this.state.pagina < this.state.content.length -1){
            this.setState({
                pagina: this.state.pagina = this.state.pagina+1
            })
        }
    }
    
    render() {
        const { classes, handleClick } = this.props
        
        return (
            <div className={classes.superContainer}>
                <div className={classes.title}>
                    <h3>{this.state.title}</h3>
                </div>
                <div className={classes.contenidoContainer}>
                    <div
                        className={classes.page}
                        onClick={this.previousPage}
                    >
                        <p>
                            {this.state.content.length > 0 && this.state.content[this.state.pagina][0]}
                        </p>
                    </div>
                    <div
                        className={classes.page}
                        onClick={this.nextPage}
                    >
                        <p>
                            {this.state.content.length > 0 && this.state.content[this.state.pagina][1]}
                        </p>
                    </div>
                </div>
                <div className={classes.buttonContainer}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={()=>handleClick()}
                    >
                        Cerrar
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ContenidoCuento);
