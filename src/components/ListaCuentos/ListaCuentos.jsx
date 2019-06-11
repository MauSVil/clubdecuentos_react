import React, { Component } from 'react';
import Cuento from '../Cuento'
import '../../syles/ListaCuentos/listaCuentos.css';
import Character from '../Character';

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
    const {cuentos} = this.props;
    const {showCharacter} = this.state
    return (
      <div className="storiesContainer">
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
      {showCharacter && <Character onClick={this.handleClickDecline}/>}
    </div>
    );
  }
}

export default ListaCuentos;
