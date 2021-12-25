import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hello } from '@src/components/Helloo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Hello',
  component: Hello,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
