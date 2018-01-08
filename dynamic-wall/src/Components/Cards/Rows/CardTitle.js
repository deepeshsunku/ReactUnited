import React, { Component } from 'react';
import '../../../Styles/Cards.css';

class CardTitle extends Component {
	constructor(props) {
	    super(props);
	    this.state = { title: this.props.title, timestamp: this.props.timestamp };
	}
  	render() {
    	return (
    		<div className="Title-div">
    			<span className="Title">{this.state.title}</span>
    			<span className="Timestamp">{this.state.timestamp}</span>
    		</div>
    	);
  	}
}

export default CardTitle;