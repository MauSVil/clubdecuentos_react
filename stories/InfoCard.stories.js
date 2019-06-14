import React from 'react';
import InfoCard from '../src/components/InfoCard';
import { storiesOf } from '@storybook/react';


const App = () => {
    return (
        <div>
            <InfoCard 
                title='Content' 
                hasLineDivider={true}
                columns={1}
            >
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Inventore repellendus quod qui excepturi necessitatibus eius enim!
                    Eveniet atque animi saepe quibusdam, et amet a perspiciatis neque 
                    tenetur asperiores? Architecto, odio!
                </p>
            </InfoCard>
        </div>
    );
};

export default App;

storiesOf('InfoCard', module)
  .add('View', () => <App/>);