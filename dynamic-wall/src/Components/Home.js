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
    console.log("State updated", window.innerWidth);
    if(window.innerWidth <= 760) {
      this.state = { cards: this.props.cards, data: false, height: 4500 };
    } else {
      this.state = { cards: this.props.cards, data: false, height: 32200 };
    }
  }

  componentDidMount() {
    // Add an event listener for screen change
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    console.log("this.props", this.state.cards);
    var requestKey = this.props.requestKey;
    var requestType = "";

    var today = moment().format('YYYY-MM-DD');
    var startDate = "";
    var endDate = "";

    var cards = ["Morning Report", "Day Closing", "Accounts Receivable", "Patients Info",
      "Daily Average Gross Production", "Daily Average Net Production", "Insurance Claims",
      "Top 20 Procedures by Production", "Insurance Claims Pending"];

    cards.forEach(function(card) {
      switch(card) {
        case "Morning Report":
        requestType = "morning%20report"
        startDate = today;
        endDate = today;
        break;

        case "Day Closing":
        requestType = "Day%20Closing%20Report"
        startDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
        endDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
        break

        case "Accounts Receivable":
        requestType = "Accounts%20Receivable"
        startDate = today;
        endDate = today;
        break

        case "Patients Info":
        requestType = "New%20patients%20to%20Total%20Patients%20seen"
        startDate = today;
        endDate = today;
        break

        case "Daily Average Gross Production":
        requestType = "daily%20average%20gross%20production"
        startDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
        endDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
        break

        case "Daily Average Net Production":
        requestType = "daily%20average%20net%20production"
        startDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
        endDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
        break

        case "Insurance Claims":
        requestType = "Insurance%20Claims"
        startDate = moment().subtract(31, 'days').format('YYYY-MM-DD');
        endDate = today;
        break

        case "Top 20 Procedures by Production":
        requestType = "Top%2020%20Procedures%20by%20Production"
        startDate = moment().subtract(31, 'days').format('YYYY-MM-DD');
        endDate = today;
        break

        case "Insurance Claims Pending":
        requestType = "Insurance%20Claims%20Pending"
        startDate = today;
        endDate = today;
        break

        default:
        break;
      }
      $.ajax({
        url: `https://api.sikkasoft.com/v2/sikkanet_cards/${requestType}?request_key=${requestKey}&practice_id=1&startdate=${startDate}&enddate=${endDate}`,
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
          cardModel.title = card;
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
          this.setState({cards: this.props.cards, height: this.state.height+200});
        } else {
          alert("We had trouble fetching your data. Please try again")
          console.log("GET auth!!!", data);
        }
      }.bind(this)
    );
    }.bind(this));
  }

  resize() {
    console.log("RESIZING...");
    if(window.innerWidth <= 760) {
      this.setState({height: 8500});
    } else {
      this.setState({height: 2000});
    }
  }

  render() {
    const cardsStyle = {
      height: `${this.state.height}px`
    }

    console.log("Card height", this.state.height);
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

    return (
      <div>
      	<header className="Home-header">
          <img className="header-logo" src="http://res.cloudinary.com/dya5uydvs/image/upload/v1515375188/sikka_icon_llxsqv.png" />
          <h1 className="Home-title">Welcome</h1>
        </header>
        <div className="Cards" style={cardsStyle}>
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
