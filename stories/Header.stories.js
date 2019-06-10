import React from 'react';
import Header from '../src/components/Header';
import { storiesOf } from '@storybook/react';


const App = () => {
    return (
        <div>
            <Header/>
        </div>
    );
};

export default App;

storiesOf('Header', module)
  .add('View', () => <App/>);