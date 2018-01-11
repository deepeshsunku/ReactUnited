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

const masonry = {
  display: 'flex',
  flexFlow: 'column wrap',
  maxHeight: '2500px'
}

class ShareCard extends Component {
	constructor(props) {
    super(props);
<<<<<<< Updated upstream
	}
=======
    this.state = {
      url: null,
      title: null,
      description: null,
      images: []
    };
>>>>>>> Stashed changes

    LinkPreview.getPreview(this.props.url)
      .then(data => this.setState({url: data.url, title: data.title, description: data.description, images: data.images}));
	}

	render() {
<<<<<<< Updated upstream
    var imgUrl = this.props.imgUrl;
    var description = this.props.description;

  	return (
      <div className="Card-div" ref="myRef">
=======
    var imgUrl = this.props.imgUrl ? this.props.imgUrl : this.state.images[0];
    var description = this.props.description ? this.props.description : this.state.description;

  	return (
      <div className="Card-div">
>>>>>>> Stashed changes
        <Header title={this.props.title} color={this.props.color} posterImgUrl={this.props.posterImgUrl} postedBy={this.props.postedBy} timestamp={this.props.timestamp} />
        <div className="link-details">
          <img className="link-image" src={imgUrl} />
        </div>
        <div className="link-description">
          <span className="link-description-span">{description}...</span>
        </div>
<<<<<<< Updated upstream
        <Cta title={this.props.ctaTitle} url={this.props.url} />
=======
        <Cta title={this.props.ctaTitle} url={this.state.url} />
>>>>>>> Stashed changes
      </div>
  	);
	}
}

export default ShareCard;
