import React, { Component } from 'react';
import $ from "jquery";
import '../../Styles/Cards.css';

// Components
import TwoColumn from './Rows/TwoColumn.js';

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
	}
  	render() {
    	return (
      		<div className="Card-div">
      			<TwoColumn name="Scheduled Production" value="$7,243" />
      		</div>
    	);
  	}
}

export default CardView;