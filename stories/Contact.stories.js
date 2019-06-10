import React from 'react';
import Contact from '../src/components/Contact';
import { storiesOf } from '@storybook/react';


const App = () => {
    return (
        <div>
            <Contact
                name="Mauricio Sanchez Vilchis"
                role="Developer"
            />
        </div>
    );
};

export default App;

storiesOf('Contact', module)
  .add('View', () => <App/>);