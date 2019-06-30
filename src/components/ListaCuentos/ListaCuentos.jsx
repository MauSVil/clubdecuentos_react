import React, { Component } from 'react';
import Cuento from '../Cuento'
import Character from '../Character';
import { withStyles } from '@material-ui/styles'
import clsx from 'clsx';

const styles = {
  storiesContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '20px',
  },
  historySelected: {
    display: 'flex',
    alignItems: 'center',
  },
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
      selected: false,
    })
  }
  
  render() {
    const {toggleStory, cuentos, classes} = this.props;
    const {showCharacter} = this.state
    const storyAppearance = clsx(
      {
        [classes.historySelected] : showCharacter,
        [classes.storiesContainer] : !showCharacter,
      }
    )
    return (
      <div className={storyAppearance}>
      {cuentos && cuentos.map((cuento, i)=>{
        const {title, author, cost, description, image} = cuento
        return(
          <Cuento
            key={i}
            image={image}
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

