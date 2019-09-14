import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

// Tests if exports one
it('expect to render CounterButton Component', () => {
	const mockColor = 'red';
	expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
	const mockColor = 'red';
	// Wrapper is the component
	const wrapper = shallow(<CounterButton color={mockColor} />);

	// Find query in component and simulate a click event
	wrapper.find('[id="counter"]').simulate('click');
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 2 });

	// check props
	expect(wrapper.props().color).toEqual('red');
});
