import React, { Component } from 'react';
import '../../../Styles/Cards.css';

var valueStyle = {
	color: '#41295a'
}

class TwoColumn extends Component {
	constructor(props) {
	    super(props);
	    this.state = { name: this.props.name, value: this.props.value };
	}
  	render() {
    	return (
    		<div>
    			<div className="TwoColumn-div">
	      			<span>{this.state.name}</span>
	      			<span style={valueStyle}>{this.state.value}</span>
	      		</div>
	      		<div className="Card-line-div"></div>
    		</div>
    	);
  	}
}

export default TwoColumn;