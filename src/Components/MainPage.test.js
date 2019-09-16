import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
// runs before each test as 'middleware'
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	};
	wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders mainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
});

// instance of the wrapper
it('filters robots correctly', () => {
	// props required of main page
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: 3,
				name: 'John',
				email: 'john@gmail.com'
			}
		],
		searchField: 'john',
		isPending: false
	};
	const wrapper2 = shallow(<MainPage {...mockProps} />);
	expect(wrapper2.instance().filterRobots()).toEqual([
		{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}
	]);
});
// redux-mock-store -- npm package

it('filters robots correctly 2', () => {
	// props required of main page
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: 3,
				name: 'John',
				email: 'john@gmail.com'
			}
		],
		searchField: 'a',
		isPending: false
	};
	const filteredRobots = [];
	const wrapper3 = shallow(<MainPage {...mockProps} />);
	expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});

it('is Pending', () => {
	// props required of main page
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: 3,
				name: 'John',
				email: 'john@gmail.com'
			}
		],
		searchField: 'a',
		isPending: true
	};
	const loading = (
		<wrapper>
			<h1> Loading... </h1>
		</wrapper>
	);
	const wrapper4 = shallow(<MainPage {...mockProps} />);
	expect(wrapper4.instance().render()).toEqual(loading);
});
