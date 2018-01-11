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
    this.state = {
      url: null,
      title: this.props.title,
      description: this.props.description,
      images: [],
      imgUrl: this.props.imgUrl,
      ctaTitle: this.props.ctaTitle,
      color: this.props.color,
      posterImgUrl: this.props.posterImgUrl,
      postedBy: this.props.postedBy,
      timestamp: this.props.timestamp
    };
	}

  componentDidMount() {
    // LinkPreview.getPreview(this.props.url)
    // .then(function(data) {
    //   if(this.refs.myRef) {
    //     var description = this.state.description ? this.state.description : data.description;
    //     var imgUrl = this.state.imgUrl ? this.state.imgUrl : data.images[0];
    //     var title = this.state.title ? this.state.title : data.title;
    //     this.setState({url: data.url, title: title, description: description, images: data.images, imgUrl: imgUrl});
    //   }
    // }.bind(this));
  }

	render() {
    var imgUrl = this.state.imgUrl;
    var description = this.state.description;

  	return (
      <div className="Card-div" ref="myRef">
        <Header title={this.state.title} color={this.state.color} posterImgUrl={this.state.posterImgUrl} postedBy={this.state.postedBy} timestamp={this.state.timestamp} />
        <div className="link-details">
          <img className="link-image" src={imgUrl} />
        </div>
        <div className="link-description">
          <span className="link-description-span">{description}...</span>
        </div>
        <Cta title={this.state.ctaTitle} url={this.state.url} />
      </div>
  	);
	}
}

export default ShareCard;
