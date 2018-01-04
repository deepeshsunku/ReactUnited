import React, { Component } from 'react';
import '../../../Styles/Cards.css';

const nameStyle = {
  float: 'left',
};

const valueStyle = {
  float: 'right',
};

class TwoColumn extends Component {
	constructor(props) {
	    super(props);
	    this.state = { name: this.props.name, value: this.props.value };
	}
  	render() {
    	return (
      		<div className="TwoColumn-div">
      			<span>{this.state.name}</span>
      			<span>{this.state.value}</span>
      		</div>
    	);
  	}
}

export default TwoColumn;