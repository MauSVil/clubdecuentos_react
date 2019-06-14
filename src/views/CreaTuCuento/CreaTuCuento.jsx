import React, { Component } from 'react';
import ListaCuentos from '../../components/ListaCuentos';

import { withStyles } from '@material-ui/styles'
import cuentos from '../../cuentos'
import ContenidoCuento from '../../components/ContenidoCuento/ContenidoCuento';

const styles={
    creaTuCuentoContainer: {
        padding: '30px'
    }
}

class CreaTuCuento extends Component {
    state={
        showStory: false,
    }

    toggleStory = ()=>{
        this.setState({
            showStory: true,
        })
    }

    render() {
        const { classes } = this.props
        const { showStory } = this.state
        return (
            showStory ?
            <ContenidoCuento/> :
            <div className={classes.creaTuCuentoContainer}>
                <ListaCuentos
                    cuentos={cuentos}
                    toggleStory={this.toggleStory}
                />
            </div>
        );
    }
}

export default withStyles(styles)(CreaTuCuento);