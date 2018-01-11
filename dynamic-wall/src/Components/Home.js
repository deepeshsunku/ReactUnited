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
    // Add an event listener for screen change
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    console.log("this.props", this.state.cards);
    var requestKey = this.props.requestKey;
    var requestType = "";

    var today = moment().format('YYYY-MM-DD');
    var yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
    var startDate = "";
    var endDate = "";

    var sikkaPosterImgUrl = 'http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png';
    var vijayImgUrl = 'https://media-exp2.licdn.com/media/AAEAAQAAAAAAAA1cAAAAJGJlNjVjY2JiLTI2ZmQtNGM3My05ZTI1LWVmMDJiNzBhM2JlMA.jpg';

    var cards = [
      {type: "TwoColumn", color: '#2071B3', name: "Morning Report", requestType: "morning%20report", timestamp: 'TODAY', startDate: today, endDate: today},
      {type: "ShareCard", color: '#22689F', postedBy: 'SIKKA', posterImgUrl: sikkaPosterImgUrl, timestamp: 'TODAY', url: 'https://store.sikkasoft.com/Invisalign', title: 'INVISALIGN', ctaTitle: 'Learn more at the Sikka Marketplace'},
      {type: "TwoColumn", color: '#2071B3', name: "Day Closing", requestType: "Day%20Closing%20Report", timestamp: 'TODAY', startDate: yesterday, endDate: yesterday},
      {type: "TwoColumn", color: '#2071B3', name: "Accounts Receivable", requestType: "Accounts%20Receivable", timestamp: 'TODAY', startDate: today, endDate: today},
      {type: "ShareCard", color: '#BB1D2C', postedBy: 'VIJAY SIKKA', posterImgUrl: vijayImgUrl, timestamp: 'YESTERDAY', url: 'http://www.dentalproductsreport.com/dental/article/latest-trends-dental-practice-accounts-receivable', title: 'Accounts Receivable', ctaTitle: 'Learn More'},
      {type: "ShareCard", color: '#1169B2', postedBy: 'JASON FOLK', posterImgUrl: 'https://media-exp2.licdn.com/media/AAEAAQAAAAAAAAroAAAAJDQ0MjhlMmEyLWNlOTctNDAyYS04MzlhLTU5MDVhMDY0N2EwOQ.jpg', timestamp: 'TODAY', url: 'https://store.sikkasoft.com/AmazonDental', title: 'AMAZON DENTAL', ctaTitle: 'Learn more at the Sikka Marketplace'},
      {type: "ShareCard", color: '#2071B3', postedBy: 'SIKKA', posterImgUrl: sikkaPosterImgUrl, timestamp: 'TODAY', url: 'https://store.sikkasoft.com/pa', title: 'Practice Assistant', ctaTitle: 'Learn more at the Sikka Marketplace'},
      {type: "ShareCard", color: '#2071B3', postedBy: 'SIKKA', posterImgUrl: sikkaPosterImgUrl, timestamp: 'YESTERDAY', url: 'https://store.sikkasoft.com/Rhinogram', title: 'Rhinogram', ctaTitle: 'Learn more at the Sikka Marketplace'},
      {type: "ShareCard", color: '#BB1D2C', postedBy: 'PHIL MORA', posterImgUrl: 'https://media-exp2.licdn.com/media/AAEAAQAAAAAAAApLAAAAJDZiMTQzNTM3LTViNzgtNDIxNi1hM2VmLWMzNGNkNWJmMWJkYg.jpg', timestamp: '30 DECEMBER 2017', url: 'https://blog.intercom.com/why-cards-are-the-future-of-the-web/', title: 'Cards', ctaTitle: 'Learn More'},
      {type: "ShareCard", color: '#2071B3', postedBy: 'SIKKA', posterImgUrl: sikkaPosterImgUrl, timestamp: '2 JANUARY 2018', url: 'https://techcrunch.com/2017/10/11/amazon-alexa-devices-can-finally-distinguish-between-different-voices/', title: 'Alexa', ctaTitle: 'Learn More'},
      {type: "ShareCard", color: '#5458B0', postedBy: 'SIKKA', posterImgUrl: sikkaPosterImgUrl, timestamp: '27 DECEMBER 2017', url: 'https://store.sikkasoft.com/PatientPopRegister', title: 'Patient Pop', ctaTitle: 'Learn more at the Sikka Marketplace', imgUrl: 'https://marketplaceportal.s3.amazonaws.com/201801042246548979.png'},
      {type: "ShareCard", color: '#681c9a', postedBy: 'VIJAY SIKKA', posterImgUrl: vijayImgUrl, timestamp: '22 DECEMBER 2017', url: 'https://techcrunch.com/2017/12/31/voice-interfaces-beginning-to-find-their-way-into-business/', title: 'Voice Interfaces', ctaTitle: 'Learn More'},
      {type: "ShareCard", color: '#BB1D2C', postedBy: 'SIKKA', posterImgUrl: sikkaPosterImgUrl, timestamp: '20 DECEMBER 2017', url: 'https://newsroom.cnb.com/6-tips-to-improve-your-accounts-receivable-collections', title: 'Accounts Receivable', ctaTitle: 'Learn More'},
      {type: "ShareCard", color: '#174D8B', postedBy: 'SIKKA', posterImgUrl: sikkaPosterImgUrl, timestamp: 'TODAY', url: 'https://store.sikkasoft.com/ICSystem', title: 'IC System', ctaTitle: 'Learn more at the Sikka Marketplace', imgUrl: 'https://marketplaceportal.s3.amazonaws.com/201712072204032930.png', description: 'IC System’s Dental Debt Collection services will bring more revenue into your office while preserving your sensitive patient relationships. Our Dental Debt Collection services ensure that your staff saves time from having to recover patient debts. Whether you’re part of a large clinic or a single-dentist practice, our products will meet your needs, allowing you to focus on what’s important: your patients.'},
      {type: "TwoColumn", color: '#2071B3', name: "Patients Info", requestType: "New%20patients%20to%20Total%20Patients%20seen", timestamp: 'TODAY', startDate: today, endDate: today},
      {type: "TwoColumn", color: '#2071B3', name: "Daily Average Gross Production", requestType: "daily%20average%20gross%20production", timestamp: 'TODAY', startDate: yesterday, endDate: yesterday},
      {type: "TwoColumn", color: '#681c9a', name: "Daily Average Net Production", requestType: "daily%20average%20net%20production", timestamp: 'TODAY', startDate: yesterday, endDate: yesterday},
      {type: "TwoColumn", color: '#681c9a', name: "Insurance Claims", requestType: "Insurance%20Claims", timestamp: 'TODAY', startDate: moment().subtract(31, 'days').format('YYYY-MM-DD'), endDate: today},
      {type: "TwoColumn", color: '#681c9a', name: "Top 20 Procedures by Production", requestType: "Top%2020%20Procedures%20by%20Production", timestamp: 'TODAY', startDate: moment().subtract(31, 'days').format('YYYY-MM-DD'), endDate: today},
      {type: "TwoColumn", color: '#681c9a', name: "Insurance Claims Pending", requestType: "Insurance%20Claims%20Pending", timestamp: 'TODAY', startDate: today, endDate: today},
      {type: "TwoColumn", color: '#2071B3', name: "Morning Report", requestType: "morning%20report", timestamp: 'YESTERDAY', startDate: yesterday, endDate: yesterday},
      {type: "TwoColumn", color: '#2071B3', name: "Day Closing", requestType: "Day%20Closing%20Report", timestamp: 'YESTERDAY', startDate: moment().subtract(2, 'days').format('YYYY-MM-DD'), endDate: moment().subtract(2, 'days').format('YYYY-MM-DD')},
      {type: "ShareCard", color: '#BB1D2C', postedBy: 'SIKKA', posterImgUrl: sikkaPosterImgUrl, timestamp: 'TODAY', url: 'https://store.sikkasoft.com/patientnews', title: 'Patient News', ctaTitle: 'Learn more at the Sikka Marketplace', imgUrl: 'https://marketplaceportal.s3.amazonaws.com/201707281601027416.png'},
      {type: "ShareCard", color: '#2071B3', postedBy: 'SIKKA', posterImgUrl: sikkaPosterImgUrl, timestamp: 'TODAY', url: 'https://store.sikkasoft.com/hydra', title: 'Hydra', ctaTitle: 'Learn more at the Sikka Marketplace', imgUrl: 'https://marketplaceportal.s3.amazonaws.com/201710040005175562.png'},
      {type: "ShareCard", color: '#681c9a', postedBy: 'VIJAY SIKKA', posterImgUrl: vijayImgUrl, timestamp: '5 JANUARY 2018', url: 'https://www.eff.org/ai/metrics', title: 'AI Progress Measurement', ctaTitle: 'Learn More'},
      {type: "ShareCard", color: '#681c9a', postedBy: 'VIJAY SIKKA', posterImgUrl: vijayImgUrl, timestamp: '2 JANUARY 2018', url: 'https://www.linkedin.com/pulse/sikka-software-partner-summit-vijay-sikka/', title: 'Sikka Software Partner Summit', ctaTitle: 'Learn More'},
      {type: "ShareCard", color: '#681c9a', postedBy: 'VIJAY SIKKA', posterImgUrl: vijayImgUrl, timestamp: '22 DECEMBER 2017', url: 'https://betterhumans.coach.me/this-is-how-to-get-real-feedback-without-asking-for-it-4e877e939b2c', title: 'Real Feedback', ctaTitle: 'Learn More'},
    ];

    cards.forEach(function(card) {
      if(card.type === "TwoColumn") {
        $.ajax({
          url: `https://api.sikkasoft.com/v2/sikkanet_cards/${card.requestType}?request_key=${requestKey}&practice_id=1&startdate=${card.startDate}&enddate=${card.endDate}`,
          type: "GET",
          contentType: "application/json",
        }).done(function(data) {
          if(data) {
            var dataItems = data.KPIData[0] ? data.KPIData[0].Value : [];
            var rows = [];
            console.log("GET success!!!", dataItems);
            dataItems.forEach(function(item) {
              rows.push({
                name: item.ColName.charAt(0).toUpperCase() + item.ColName.slice(1),
                value: item.RegionalValue,
                type: "String",
                color: card.color
              });
            });

            var cardModel = {};
            cardModel.type = "TwoColumn";
            cardModel.title = card.name.toUpperCase();
            cardModel.color = card.color;
            cardModel.timestamp = card.timestamp;
            cardModel.data = {
              rows: rows
            };
            cardModel.cta = {
              title: "Learn More",
              url: "https://practicemobilizer.com"
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
    } else if(card.type === "ShareCard") {
      var shareCardModel = {};
      shareCardModel.type = "ShareCard";
      shareCardModel.title = card.title.toUpperCase();
      shareCardModel.color = card.color;
      shareCardModel.timestamp = card.timestamp;
      shareCardModel.data = {
        url: card.url,
        postedBy: card.postedBy,
        posterImgUrl: card.posterImgUrl,
        imgUrl: card.imgUrl,
        description: card.description
      };
      shareCardModel.cta = {
        title: card.ctaTitle,
        url:  card.url
      };

      setTimeout(function(){ console.log("setTimeout"); }, 2000);
      this.props.dispatch(addCard(shareCardModel));
      this.setState({cards: this.props.cards});
      this.resize();
    }

    }.bind(this));
  }

  resize() {
    console.log("RESIZING...", window.innerWidth);
    if(window.innerWidth <= 760) {
      console.log("Mobile Card height", this.state.height);
      this.setState({height: (this.state.cards.length+9)* 950});
    } else if(window.innerWidth > 860 && window.innerWidth <= 1000) {
      console.log("Inbetween Card height", this.state.height);
      this.setState({height: (this.state.cards.length+9)* 200});
    } else if(window.innerWidth > 1000 && window.innerWidth <= 1200) {
      console.log("Inbetween Card height 2", this.state.height);
      this.setState({height: (this.state.cards.length+9)* 140});
    } else {
      console.log("All other card height", this.state.height);
      this.setState({height: (this.state.cards.length+9) * 120});
    }
  }

  render() {
    const cardsStyle = {
      height: `${this.state.height}px`
    }

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
            color={card.color}
            cta={card.cta}
            key={count++} />
          );
        } else if(card.type === "ShareCard") {
          return (
            <ShareCard
              posterImgUrl={card.data.posterImgUrl}
              imgUrl={card.data.imgUrl}
              description={card.data.description}
              postedBy={card.data.postedBy}
              timestamp={card.timestamp}
              url={card.data.url}
              title={card.title}
              color={card.color}
              ctaTitle={card.cta.title}
              key={count++} />
          );
        }
    });

    return (
      // console.log("username", this.props.username);
      <div>
      	<header className="Home-header">
          <img className="header-logo" src="http://res.cloudinary.com/dya5uydvs/image/upload/v1515375188/sikka_icon_llxsqv.png" />
          <h1 className="Home-title">Welcome {this.props.username}</h1>
        </header>
        <div className="Cards" style={cardsStyle}>
          {cardItems}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards,
    requestKey: state.requestKey,
    username: state.username
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
