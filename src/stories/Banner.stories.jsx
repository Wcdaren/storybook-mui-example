import React from 'react';
import { CBanner } from '../components/banner.component';


export default {
  title: 'Example/Banner',
  component: CBanner,

};

const Template = (args) => <CBanner {...args} />;

export const Playground = Template.bind({});

export const Size = () => {
  return <>
    <CBanner >
      Text
    </CBanner>
  </>
}
