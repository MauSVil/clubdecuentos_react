import React, { Component } from 'react';
import ListaCuentos from '../../components/ListaCuentos';
import OutsideClickHandler from 'react-outside-click-handler';
import { withStyles } from '@material-ui/styles'
import cuentos from '../../cuentos'
import ContenidoCuento from '../../components/ContenidoCuento/ContenidoCuento';
import clsx from 'clsx';

const styles={
    creaTuCuentoContainer: {
        padding: '30px',
        position: 'relative',
    },
    completeStory: {
        display:'flex',
        left: '0',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'white',
        transition: 'all 3s',
        overflow: 'hidden'
    },
    showStory: {
        top: '-80px',
        height: '500px',
    },
    hideStory: {
        top: '-320px',
        height: '0px',
    },
    blur: {
        filter: 'blur(4px)',
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
        const completeStory = clsx(
            classes.completeStory,
            {
                [classes.showStory]: showStory,
                [classes.hideStory]: !showStory,
            }
        )
        return (
            <>
                <div className={classes.creaTuCuentoContainer}>
                    <div className={completeStory}>
                        <OutsideClickHandler
                            onOutsideClick={()=>this.setState({showStory :false})}
                            >
                                <ContenidoCuento/>
                        </OutsideClickHandler>
                    </div>
                    <div className={showStory ? classes.blur : classes.normal}>
                        <ListaCuentos
                            cuentos={cuentos}
                            toggleStory={this.toggleStory}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(CreaTuCuento);