import React, { Component } from 'react';
import '../../../Styles/Cards.css';

class TwoColumn extends Component {
	constructor(props) {
	    super(props);
	}
  	render() {
    	return (
    		<div>
    			<div className="Cta-div">
            <a href={this.props.url} target="_blank">{this.props.title}</a>
	      	</div>
    		</div>
    	);
  	}
}

export default TwoColumn;
