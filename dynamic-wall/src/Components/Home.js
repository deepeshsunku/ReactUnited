import React, { Component } from 'react';
import '../App.css';

// Components
import CardView from './Cards/CardView.js'
import ShareCard from './Cards/ShareCard'

class Home extends Component {
  render() {
    return (
      <div>
      	<header className="Home-header">
          <img className="header-logo" src="http://res.cloudinary.com/dya5uydvs/image/upload/v1515375188/sikka_icon_llxsqv.png" />
          <h1 className="Home-title">Welcome Deepesh</h1>
        </header>
        <div>
          <CardView
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='NOW'
            title='Morning Report' />
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

export default Home;
