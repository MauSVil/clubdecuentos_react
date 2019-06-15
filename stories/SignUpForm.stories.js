import React from 'react';
import { storiesOf } from '@storybook/react';
import SignUpForm from '../src/components/SignUpForm/SignUpForm';


const App = () => {
    return (
        <div>
            <SignUpForm/>
        </div>
    );
};

export default App;

storiesOf('SignUpForm', module)
  .add('View', () => <App/>);