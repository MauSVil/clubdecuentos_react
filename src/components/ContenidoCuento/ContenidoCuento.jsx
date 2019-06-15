import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'

const styles= {
    superContainer: {
        padding: '30px'
    },
    contenidoContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        userSelect:'none',
    },
    page: {
        textAlign: 'center',
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
            <div className={classes.superContainer}>
                <div className={classes.contenidoContainer}>
                    <div
                        className={classes.page}
                        onClick={this.previousPage}
                    >
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum nobis harum aperiam iusto eos asperiores culpa cum ex dolorem, 
                            repudiandae recusandae totam hic qui facere! Nam adipisci 
                            praesentium voluptatibus repellendus!
                        </p>
                        {this.state.pagina}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum nobis harum aperiam iusto eos asperiores culpa cum ex dolorem, 
                            repudiandae recusandae totam hic qui facere! Nam adipisci 
                            praesentium voluptatibus repellendus!
                        </p>
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
            </div>
        );
    }
}

export default withStyles(styles)(ContenidoCuento);
