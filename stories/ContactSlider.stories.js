import React from 'react';
import ContactSlider from '../src/components/ContactSlider';
import { storiesOf } from '@storybook/react';


const App = () => {
    return (
        <div>
            <ContactSlider/>
        </div>
    );
};

export default App;

storiesOf('ContactSlider', module)
  .add('View', () => <App/>);