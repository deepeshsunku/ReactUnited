import React, { Component } from 'react';
import $ from "jquery";
import '../../Styles/Cards.css';

// Components
import TwoColumn from './Rows/TwoColumn';
import CardTitle from './Rows/CardTitle';
import Cta from './Rows/Cta';
import Header from './Rows/Header';

class CardView extends Component {
	constructor(props) {
	    super(props);
	    console.log("Fetching morning report..");
	    $.ajax({
	      url: "https://api.sikkasoft.com/v2/sikkanet_cards/morning%20report?request_key=a7f4a6da5b542e141a506fa389dcb2b7&practice_id=1&startdate=2018-01-03&enddate=2018-02-02",
	      type: "GET",
	      beforeSend: function(request) {
	        request.setRequestHeader("X-Auth-Token", "a7f4a6da5b542e141a506fa389dcb2b7");
	      },
	      contentType: "application/json",
	      }).done(function(data) {
	        if(data) {
	          console.log("GET success!!!", data);
	          // this.props.dispatch(addCard(data.Card));
	        } else {
	          alert("We had trouble fetching your data. Please try again.")
	          console.log("GET auth!!!", data);
	        }
	      }
	    );

	    this.state = {
		  type: "TwoColumn",
		  title: "Morning Report",
		  timestamp: "2018-01-05:9:00:00Z",
		  data: {
			  rows: [{
			    name: "Scheduled Production",
			    value: 7230,
			    type: "Amount"
			  },
			  {
			    name: "Scheduled Appointments",
			    value: 10,
			    type: "Int",
			  }]
		  },
		  cta: {
		    title: "Like what you see? Try the evening report",
		    url: "sikkasoft.com/dentalfloss" 
		  }
		}
	}
  	render() {
  		var rowItems = this.state.data.rows.map(function(row) {
	      return (
	        <TwoColumn name={row.name} value={row.value} />
	      );
	    });

    	return (
      		<div className="Card-div">
		        <Header title={this.props.title} posterImgUrl={this.props.posterImgUrl} postedBy={this.props.postedBy} timestamp={this.props.timestamp} />
      			{rowItems}
      			<Cta title={this.state.cta.title} url={this.state.cta.url}/>
      		</div>
    	);
  	}
}

export default CardView;
