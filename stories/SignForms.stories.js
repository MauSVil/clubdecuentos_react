import React from 'react';
import { storiesOf } from '@storybook/react';
import SignForms from '../src/components/SignForms';


const App = () => {
    return (
        <div>
            <SignForms/>
        </div>
    );
};

export default App;

storiesOf('SignForms', module)
  .add('View', () => <App/>);