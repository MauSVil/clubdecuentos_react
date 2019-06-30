import React from 'react';
import { withStyles } from '@material-ui/styles'
import ListaCuentos from '../ListaCuentos';

const cuentos = [
    { title: "Ejemplo", description: "Descripcion Ejemplo"}, 
    {title: "Ejemplo1", description: "Descripcion Ejemplo1"},
    {title: "Ejemplo2", description: "Descripcion Ejemplo2"},
]

const styles={
    storiesSelectedContainer: {
        padding: '30px',
        textAlign: 'center'
    }
}

const SelectedStories = (props) => {
    const {classes} = props
    return ( 
    <div className={classes.storiesSelectedContainer}>
        <h2>
            Historias Seleccionadas
        </h2>
        <ListaCuentos cuentos={cuentos}/>
    </div> );
}
 
export default withStyles(styles)(SelectedStories);
