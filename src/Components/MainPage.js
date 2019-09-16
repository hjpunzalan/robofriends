import React, { Component } from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import Header from '../Components/Header';
import './MainPage.css';

class MainPage extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	filterRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name
				.toLowerCase()
				.includes(this.props.searchField.toLowerCase());
		});
	};

	render() {
		const { onSearchChange, isPending } = this.props;
		const wrapper = child => (
			<div className="tc">
				<h1 className="f1"> My Robo Friends</h1>
				<Header />
				<SearchBox searchChange={onSearchChange} />
				<Scroll>{child}</Scroll>
			</div>
		);
		return (
			<wrapper>
				{isPending ? (
					<h1> Loading... </h1>
				) : (
					<ErrorBoundary>
						<CardList robots={this.filterRobots} />
					</ErrorBoundary>
				)}
			</wrapper>
		);
	}
}

export default MainPage;
