import React, { Component } from 'react';
import '../../../Styles/Cards.css';

var valueStyle = {
	color: '#41295a'
}
// var valueStyle = {
// 				color: Please.make_color({
// 					golden: false,
// 					base_color: 'purple'
// 				})
// }

class TwoColumn extends Component {
	constructor(props) {
	    super(props);
	    // this.state = { name: this.props.name, value: this.props.value };
	}
  	render() {

			// .Card-line-div {
			// 	height: 0.8pt;
			// 	background: #eee;
			// 	margin: 0pt 5pt 0pt 5pt;
			// }

			var dividerStyle = {
				background: this.props.color, height: '0.5pt', margin: '0pt 5pt 0pt 5pt'
			}

    	return (
    		<div>
    			<div className="TwoColumn-div">
	      			<span>{this.props.name}</span>
	      			<span style={valueStyle}>{this.props.value}</span>
	      		</div>
	      		<div style={dividerStyle}></div>
    		</div>
    	);
  	}
}

export default TwoColumn;
