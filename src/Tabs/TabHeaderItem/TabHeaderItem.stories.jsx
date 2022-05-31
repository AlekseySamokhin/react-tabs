import React from 'react';

import { TabHeaderItem } from './TabHeaderItem';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'TabHeaderItem',
	component: TabHeaderItem,
	argTypes: {
		text: { control: 'text' },
		active: { control: 'boolean' },
		onClick: { action: 'clicked' },
	},
};

const Template = (args) => <TabHeaderItem {...args} />;

export const Base = Template.bind({});
Base.args = {
	text: 'Profile',
};
