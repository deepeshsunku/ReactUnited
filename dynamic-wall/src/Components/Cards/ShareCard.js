import React, { Component } from 'react';
import Cta from './Rows/Cta';
import Header from './Rows/Header';
import '../../Styles/Cards.css';

const nameStyle = {
  float: 'left',
};

const valueStyle = {
  float: 'right',
};

const masonry = {
  display: 'flex',
  flexFlow: 'column wrap',
  maxHeight: '2500px'
}

class ShareCard extends Component {
	constructor(props) {
    super(props);
	}

	render() {
    var imgUrl = this.props.imgUrl;
    var description = this.props.description;

  	return (
      <div className="Card-div" ref="myRef">
        <Header title={this.props.title} color={this.props.color} posterImgUrl={this.props.posterImgUrl} postedBy={this.props.postedBy} timestamp={this.props.timestamp} />
        <div className="link-details">
          <img className="link-image" src={imgUrl} />
        </div>
        <div className="link-description">
          <span className="link-description-span">{description}...</span>
        </div>
        <Cta title={this.props.ctaTitle} url={this.props.url} />
      </div>
  	);
	}
}

export default ShareCard;
