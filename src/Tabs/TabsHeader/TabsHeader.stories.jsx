import React from 'react'

import { TabsHeader } from './TabsHeader'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'TabsHeader',
  component: TabsHeader,
  argTypes: {
    tabs: { control: 'object' },
    activeIndex: { control: 'number' },
    onTabClick: { action: 'clicked' },
  },
}

const Template = (args) => <TabsHeader {...args} />

export const Base = Template.bind({})
Base.args = {
  tabs: [
    {
      text: 'Profile',
      onClick: () => console.log('Profile clicked'),
    },
    {
      text: 'Contact',
      onClick: () => console.log('Contact clicked'),
    },
    {
      text: 'Settings',
      onClick: () => console.log('Settings clicked'),
    },
  ],
  activeIndex: 0,
}
