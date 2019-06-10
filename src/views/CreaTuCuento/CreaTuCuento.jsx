import React, { Component } from 'react';
import ListaCuentos from '../../components/ListaCuentos';
import Character from '../../components/Character';

import { withStyles } from '@material-ui/styles'
import cuentos from '../../cuentos'

const styles={
    creaTuCuentoContainer: {
        width: '100%',
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