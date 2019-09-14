import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

// Tests if exports one
it('expect to render CardList Component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'JohnJohn',
			email: 'john@gmail.com'
		}
	];
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
