import React, { Component } from 'react';
import Cuento from '../Cuento'
import Character from '../Character';
import { withStyles } from '@material-ui/styles'

const styles = {
  storiesContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '20px'
  },
  historySelected: {
    display: 'flex',
    alignItems: 'center',
  }
}

class ListaCuentos extends Component {
  state={
    index: -1,
    firstTime: true,
    showCharacter: false,
  }

  
  historySelected= (i)=>{
    this.setState({
      index: i,
      firstTime: false,
      showCharacter: true,
    })
  }
  
  handleClickDecline=(e)=>{
    e.preventDefault()
    this.setState({
      showCharacter: false,
      firstTime: true,
    })
  }
  
  render() {
    const {cuentos, toggleStory} = this.props;
    const {showCharacter} = this.state
    const { classes } = this.props;
    return (
      <div className={showCharacter ? classes.historySelected : classes.storiesContainer}>
      {cuentos.map((cuento, i)=>{
        const {title, author, cost, description} = cuento
        return(
          <Cuento
            firstTime={this.state.firstTime}
            i={i}
            selected={i===this.state.index}
            onClick={this.historySelected}
            title={title}
            author={author}
            cost={cost}
            description={description}
          />
        )
      })}
      {showCharacter && 
      <Character
        onClick={this.handleClickDecline}
        toggleStory={toggleStory}
      />}
    </div>
    );
  }
}

export default withStyles(styles)(ListaCuentos);

