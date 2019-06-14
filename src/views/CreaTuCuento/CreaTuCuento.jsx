import React, { Component } from 'react';
import ListaCuentos from '../../components/ListaCuentos';
import Character from '../../components/Character';

import { withStyles } from '@material-ui/styles'
import cuentos from '../../cuentos'

const styles={
    creaTuCuentoContainer: {
        padding: '30px'
    }
}

class CreaTuCuento extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.creaTuCuentoContainer}>
                <ListaCuentos cuentos={cuentos}/>
                {/* <Character/> */}
            </div>
        );
    }
}

export default withStyles(styles)(CreaTuCuento);