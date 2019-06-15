import React from 'react';
import { storiesOf } from '@storybook/react';
import SignInForm from '../src/components/SignInForm';


const App = () => {
    return (
        <div>
            <SignInForm/>
        </div>
    );
};

export default App;

storiesOf('SignInForm', module)
  .add('View', () => <App/>);