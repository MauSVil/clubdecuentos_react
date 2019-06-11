import React from 'react';
import Heroe from '../src/components/Heroe';
import { storiesOf } from '@storybook/react';


const App = () => {
    return (
        <div>
            <Heroe/>
        </div>
    );
};

export default App;

storiesOf('Heroe', module)
  .add('View', () => <App/>);