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
    var today = moment().format('YYYY-MM-DD');
    var cards = ["Morning report"];
    cards.forEach(function(card) {
      switch(card) {
        case "Morning report":
          $.ajax({
              url: `https://api.sikkasoft.com/v2/sikkanet_cards/morning%20report?request_key=${requestKey}&practice_id=1&startdate=${today}&enddate=${today}`,
              type: "GET",
              contentType: "application/json",
            }).done(function(data) {
              if(data) {
                var dataItems = data.KPIData[0].Value;
                var rows = [];
                console.log("GET success!!!", dataItems);
                dataItems.forEach(function(item) {
                  rows.push({
                    name: item.ColName,
                    value: item.RegionalValue,
                    type: "String"
                  });
                });

                var cardModel = {};
                cardModel.title = "Morning Report";
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
        break;

        default:
        break;
      }
    }.bind(this));
  }

  render() {
    console.log("Card state", this.state.cards);
    var count = 0;
    var cardItems = this.state.cards.map(function(card) {
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
    });

    return (
      <div>
      	<header className="Home-header">
          <img className="header-logo" src="http://res.cloudinary.com/dya5uydvs/image/upload/v1515375188/sikka_icon_llxsqv.png" />
          <h1 className="Home-title">Welcome</h1>
        </header>
        <div>
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