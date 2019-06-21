import React from 'react';
import { withStyles } from '@material-ui/styles'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from '../Pagination';
import Contact from '../Contact';
import colaborador1 from '../../assets/colaborador01.png'
import colaborador2 from '../../assets/colaborador02.png'
import colaborador3 from '../../assets/colaborador03.png'
import colaborador4 from '../../assets/colaborador04.png'
import colaborador5 from '../../assets/colaborador05.png'
import colaborador6 from '../../assets/colaborador06.png'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
    marginTop: '30px',
    '& img': {
      height: '60px',
      width: '60px',
      borderRadius: '50%',
      border: '2px solid black'
    }
  }
};

class ContactSlider extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {

    const { classes } = this.props

    const { index } = this.state;

    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <Contact name="Karla Puga" projectRole="Fundadora Mi Club De Cuentos">
            <img src={colaborador1} alt="colaborador1"/>
          </Contact>
          <Contact name="Karla Estefani Barboza Marrero" projectRole="Escritora">
            <img src={colaborador2} alt="colaborador2"/>
          </Contact>
          <Contact name="Valentinza Andrade" projectRole="Escritora">
            <img src={colaborador3} alt="colaborador3"/>
          </Contact>
          <Contact name="Dernando José Do Rosario" projectRole="Escritor">
            <img src={colaborador4} alt="colaborador4"/>
          </Contact>
          <Contact name="Caro V. Lucero" projectRole="Ilustradora">
            <img src={colaborador5} alt="colaborador5"/>
          </Contact>
          <Contact name="Jose y Daniel Gil" projectRole="Ilustradores">
            <img src={colaborador6} alt="colaborador6"/>
          </Contact>
        </AutoPlaySwipeableViews>
        <Pagination dots={6} index={index} onChangeIndex={this.handleChangeIndex} />
      </div>
    );
  }
}

export default withStyles(styles)(ContactSlider);

