import React, { Component } from 'react';
import '../../../Styles/Cards.css';

class Header extends Component {
	constructor(props) {
	    super(props);
	}

	render() {
  	return (
  		<div>
				<div className="poster-image-div">
          <img className="poster-image" src={this.props.posterImgUrl} />
        </div>
        <div className="poster-details">
    			<span className="posted-by">{this.props.postedBy}</span>
      		<span className="title">{this.props.title}</span>
          <br />
          <span className="posted-timestamp">{this.props.timestamp}</span>
        </div>
			</div>
  	);
	}
}

export default Header;
