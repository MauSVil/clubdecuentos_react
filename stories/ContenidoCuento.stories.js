import React from 'react';
import ContenidoCuento from '../src/components/ContenidoCuento';
import { storiesOf } from '@storybook/react';


const App = () => {
    return (
        <div>
            <ContenidoCuento/>
        </div>
    );
};

export default App;

storiesOf('ContenidoCuento', module)
  .add('View', () => <App/>);