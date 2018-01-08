import React, { Component } from 'react';
import LinkPreview from 'react-native-link-preview';
import Cta from './Rows/Cta';
import Header from './Rows/Header';
import '../../Styles/Cards.css';

const nameStyle = {
  float: 'left',
};

const valueStyle = {
  float: 'right',
};

class ShareCard extends Component {
	constructor(props) {
    super(props);
    this.state = {
      url: null,
      title: null,
      description: null,
      images: []
    };

    LinkPreview.getPreview(this.props.url)
      .then(data => this.setState({url: data.url, title: data.title, description: data.description, images: data.images}));
	}

	render() {
  	return (
      <div className="Card-div">
        <Header title={this.props.title} posterImgUrl={this.props.posterImgUrl} postedBy={this.props.postedBy} timestamp={this.props.timestamp} />
        <div className="link-details">
          <img className="link-image" src={this.state.images[0]} />
        </div>
        <div className="link-description">
          <span className="link-description-span">{this.state.description}...</span>
        </div>
        <Cta title={this.props.ctaTitle} url={this.state.url} />
      </div>
  	);
	}
}

export default ShareCard;
