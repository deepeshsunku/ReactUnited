import React, { Component } from 'react';
import '../../../Styles/Cards.css';

class TwoColumn extends Component {
	constructor(props) {
	    super(props);
	    this.state = { title: this.props.title, url: this.props.url };
	}
  	render() {
    	return (
    		<div>
    			<div className="Cta-div">
            <a href={this.state.url}>{this.state.title}</a>
	      	</div>
    		</div>
    	);
  	}
}

export default TwoColumn;