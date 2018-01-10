import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../Actions/actions';
import moment from 'moment';
import $ from "jquery";
import '../App.css';

// Components
import CardView from './Cards/CardView.js'
import ShareCard from './Cards/ShareCard'

class Home extends Component {

  constructor(props) {
    super(props);
    console.log("State updated");
    this.state = { cards: this.props.cards, data: false };
  }

  componentDidMount() {
    console.log("this.props", this.state.cards);
    var requestKey = this.props.requestKey;
    var requestType = "";

    var today = moment().format('YYYY-MM-DD');
    var yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
    var startDate = "";
    var endDate = "";

    var cards = [
      {type: "TwoColumn", name: "Morning Report", requestType: "morning%20report", startDate: today, endDate: today},
      {type: "TwoColumn", name: "Day Closing", requestType: "Day%20Closing%20Report", startDate: yesterday, endDate: yesterday},
      {type: "TwoColumn", name: "Accounts Receivable", requestType: "Accounts%20Receivable", startDate: today, endDate: today},
      {type: "TwoColumn", name: "Patients Info", requestType: "New%20patients%20to%20Total%20Patients%20seen", startDate: today, endDate: today},
      {type: "TwoColumn", name: "Daily Average Gross Production", requestType: "daily%20average%20gross%20production", startDate: yesterday, endDate: yesterday},
      {type: "TwoColumn", name: "Daily Average Net Production", requestType: "daily%20average%20net%20production", startDate: yesterday, endDate: yesterday},
      {type: "TwoColumn", name: "Insurance Claims", requestType: "Insurance%20Claims", startDate: moment().subtract(31, 'days').format('YYYY-MM-DD'), endDate: today},
      {type: "TwoColumn", name: "Top 20 Procedures by Production", requestType: "Top%2020%20Procedures%20by%20Production", startDate: moment().subtract(31, 'days').format('YYYY-MM-DD'), endDate: today},
      {type: "TwoColumn", name: "Insurance Claims Pending", requestType: "Insurance%20Claims%20Pending", startDate: today, endDate: today}
    ];

    cards.forEach(function(card) {
      $.ajax({
        url: `https://api.sikkasoft.com/v2/sikkanet_cards/${card.requestType}?request_key=${requestKey}&practice_id=1&startdate=${card.startDate}&enddate=${card.endDate}`,
        type: "GET",
        contentType: "application/json",
      }).done(function(data) {
        if(data) {
          var dataItems = data.KPIData[0].Value;
          var rows = [];
          console.log("GET success!!!", dataItems);
          dataItems.forEach(function(item) {
            rows.push({
              name: item.ColName.charAt(0).toUpperCase() + item.ColName.slice(1),
              value: item.RegionalValue,
              type: "String"
            });
          });

          var cardModel = {};
          cardModel.type = "TwoColumn";
          cardModel.title = card.name;
          cardModel.timestamp = "NOW";
          cardModel.data = {
            rows: rows
          };
          cardModel.cta = {
            title: "Like what you see? Try the closing report",
            url: "sikkasoft.com/dentalfloss"
          };
          console.log("GET success!!!", cardModel);
          this.props.dispatch(addCard(cardModel));
          this.setState({cards: this.props.cards});
        } else {
          alert("We had trouble fetching your data. Please try again.")
          console.log("GET auth!!!", data);
        }
      }.bind(this)
    );
    }.bind(this));
  }

  render() {
    console.log("Card state", this.state.cards);
    var count = 0;
    var cardItems = this.state.cards.map(function(card) {
        if(card.type === "TwoColumn") {
          return (
            <CardView
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp={card.timestamp}
            title={card.title}
            rows={card.data.rows}
            cta={card.cta}
            key={count++}/>
          );
        }
    });

    var shareCardModel = {};
    shareCardModel.type = "ShareCard";
    shareCardModel.title = 'Invisalign';
    shareCardModel.timestamp = "NOW";
    shareCardModel.data = {
      url: 'https://store.sikkasoft.com/Invisalign'
    };
    shareCardModel.cta = {
      title: 'Learn more at the Sikka Marketplace',
      url: 'https://store.sikkasoft.com/Invisalign'
    };

    return (
      <div>
      	<header className="Home-header">
          <img className="header-logo" src="http://res.cloudinary.com/dya5uydvs/image/upload/v1515375188/sikka_icon_llxsqv.png" />
          <h1 className="Home-title">Welcome</h1>
        </header>
        <div className="Cards">
          {cardItems}
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='30 MINS AGO'
            url='https://store.sikkasoft.com/Invisalign'
            title='Invisalign'
            ctaTitle='Learn more at the Sikka Marketplace' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='TODAY'
            url='https://store.sikkasoft.com/AmazonDental'
            title='Amazon Dental'
            ctaTitle='Learn more at the Sikka Marketplace' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='TODAY'
            url='https://store.sikkasoft.com/pa'
            title='Practice Assistant'
            ctaTitle='Learn more at the Sikka Marketplace' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='YESTERDAY'
            url='https://store.sikkasoft.com/Rhinogram'
            title='Rhinogram'
            ctaTitle='Learn more at the Sikka Marketplace' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='5 JANUARY 2018'
            url='https://blog.intercom.com/why-cards-are-the-future-of-the-web/'
            title='Cards'
            ctaTitle='Learn More' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='2 JANUARY 2018'
            url='https://techcrunch.com/2017/10/11/amazon-alexa-devices-can-finally-distinguish-between-different-voices/'
            title='Alexa'
            ctaTitle='Learn More' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='27 DECEMBER 2017'
            url='https://store.sikkasoft.com/PatientPopRegister'
            title='Patient Pop'
            ctaTitle='Learn more at the Sikka Marketplace' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='27 DECEMBER 2017'
            url='https://techcrunch.com/2017/12/31/voice-interfaces-beginning-to-find-their-way-into-business/'
            title='Voice Interfaces'
            ctaTitle='Learn more' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='27 DECEMBER 2017'
            url='http://www.dentistryiq.com/articles/apex360/2017/07/here-s-the-average-number-of-single-crowns-dentists-are-placing-and-where-the-trend-is-going.html'
            title='Crowns'
            ctaTitle='Learn more' />
        </div>
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
)(Home);
