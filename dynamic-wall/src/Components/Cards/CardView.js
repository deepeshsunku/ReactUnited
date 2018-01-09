import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../Actions/actions';
import '../../Styles/Cards.css';

// Components
import TwoColumn from './Rows/TwoColumn';
import CardTitle from './Rows/CardTitle';
import Cta from './Rows/Cta';
import Header from './Rows/Header';

class CardView extends Component {
	constructor(props) {
	    super(props);
	    console.log("this props", this.props);
	}

  	render() {
  		var count = 0;
  		var rowItems = this.props.rows.map(function(row) {
	      return (
	        <TwoColumn name={row.name} value={row.value} key={count++}/>
	      );
	    });

    	return (
      		<div className="Card-div">
		        <Header title={this.props.title} posterImgUrl={this.props.posterImgUrl} postedBy={this.props.postedBy} timestamp={this.props.timestamp} />
      			{rowItems}
      			<Cta title={this.props.cta.title} url={this.props.cta.url}/>
      		</div>
    	);
  	}
}

function mapStateToProps(state) {
  return {
    cards: state.cards,
    requestKey: state.requestKey
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardView);