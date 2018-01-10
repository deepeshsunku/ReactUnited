import React, { Component } from 'react';
import '../../../Styles/Cards.css';

class Header extends Component {
	constructor(props) {
	    super(props);
	}

	render() {
		var valueStyle = {
			color: this.props.color, float: 'right', 'fontFamily': 'Roboto'
		}

  	return (
  		<div className="poster-div">
				<div className="poster-image-div">
          <img className="poster-image" src={this.props.posterImgUrl} />
          <div className="poster-details-div">
            <span className="posted-by">{this.props.postedBy}</span>
            <span className="posted-timestamp">{this.props.timestamp}</span>
          </div>
        </div>
        <div className="poster-details">
      		<span style={valueStyle}>{this.props.title}</span>
        </div>
			</div>
  	);
	}
}

export default Header;
