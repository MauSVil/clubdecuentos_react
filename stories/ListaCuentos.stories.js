import React from 'react';
import ListaCuentos from '../src/components/ListaCuentos';
import cuentos from '../src/cuentos';
import { storiesOf } from '@storybook/react';


const App = () => {
    return (
        <div>
            <ListaCuentos cuentos={cuentos}/>
        </div>
    );
};

export default App;

storiesOf('StoryList', module)
  .add('View', () => <App/>);