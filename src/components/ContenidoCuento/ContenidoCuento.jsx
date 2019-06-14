import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'

const styles= {
    contenidoContainer: {
        display: 'flex',
    },
    page: {
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

class ContenidoCuento extends Component {
    state= {
        pagina: 0,
    }

    previousPage = () => {
        console.log(this.state.pagina)
        this.setState({
            pagina: this.state.pagina = this.state.pagina-1
        })
    }
    nextPage= ()=>{
        console.log(this.state.pagina)
        this.setState({
            pagina: this.state.pagina = this.state.pagina+1
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.contenidoContainer} >
                <div
                    className={classes.page}
                    onClick={this.previousPage}
                >
                    {this.state.pagina}
                </div>
                <div
                    className={classes.page}
                    onClick={this.nextPage}
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure illo sapiente nemo laborum corrupti, minus natus 
                        a beatae odio, tenetur, repudiandae ipsum obcaecati vel 
                        deserunt vero! Eveniet quia corporis eius.
                    </p>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ContenidoCuento);
