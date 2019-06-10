import React, { Component } from 'react';
import Cuento from '../Cuento'
import '../../syles/ListaCuentos/listaCuentos.css';

class ListaCuentos extends Component {
  state={
    selected: false,
  }

  resaltar= (e)=>{
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    const {cuentos} = this.props;
    return (
      <div className="storiesContainer">
      {cuentos.map(cuento=>{
        const {title, author, cost, description} = cuento
        return(
          <Cuento
            selected={this.state.selected}
            onClick={this.resaltar}
            title={title}
            author={author}
            cost={cost}
            description={description}
          />
        )
      })}
    </div>
    );
  }
}

export default ListaCuentos;
