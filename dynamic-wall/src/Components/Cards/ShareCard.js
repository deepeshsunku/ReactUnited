import React, { Component } from 'react';
import LinkPreview from 'react-native-link-preview';
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
        <div className="poster-image-div">
          <img className="poster-image" src={this.props.posterImgUrl} />
        </div>
        <div className="poster-details">
    			<span className="posted-by">{this.props.postedBy}</span>
          <br />
          <span className="posted-timestamp">{this.props.timestamp}</span>
        </div>
        <div className="link-details">
          <img className="link-image" src={this.state.images[0]} />
        </div>
        <div className="link-description">
          <span className="link-description-span">{this.state.description}...</span>
        </div>
      </div>
  	);
	}
}

export default ShareCard;
