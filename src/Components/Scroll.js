import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{
			margin:'auto',
			overflowY: 'scroll',
			height:'60vh' }}>
		{props.children}
		</div>

		);
}

export default Scroll;