import React, { Component } from 'react';
import ListaCuentos from '../../components/ListaCuentos';
import OutsideClickHandler from 'react-outside-click-handler';
import { withStyles } from '@material-ui/styles'
import ContenidoCuento from '../../components/ContenidoCuento/ContenidoCuento';
import clsx from 'clsx';
import axios from 'axios';

const styles={
    creaTuCuentoContainer: {
        padding: '30px',
        position: 'relative',
        '& h2': {
            textAlign: 'center',
        }
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
    },
    storyContentContainer: {
        zIndex: '1000',
        backgroundColor: 'white',
        
    }
}

class CreaTuCuento extends Component {
    state={
        showStory: false,
    }

    componentDidMount = async () =>{
        const response = await axios.get('http://localhost:3800/api/users')
        console.log(response.data.users)
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
            <div className={classes.creaTuCuentoContainer}>
                <div className={completeStory}>
                    <div className={classes.storyContentContainer}>

                        <OutsideClickHandler
                            onOutsideClick={()=>this.setState({showStory :false})}
                            >
                            <ContenidoCuento/>
                        </OutsideClickHandler>
                    </div>
                </div>
                <h2>Crea Tu Cuento</h2>
                <div className={showStory ? classes.blur : classes.normal}>
                    <ListaCuentos
                        toggleStory={this.toggleStory}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CreaTuCuento);