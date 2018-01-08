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
          <h1 className="Home-title">Welcome Deepesh</h1>
        </header>
        <div>
          <CardView />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='5 JANUARY 2018'
            url='https://store.sikkasoft.com/Invisalign' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='5 JANUARY 2018'
            url='https://store.sikkasoft.com/AmazonDental' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='5 JANUARY 2018'
            url='https://store.sikkasoft.com/pa' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='5 JANUARY 2018'
            url='https://store.sikkasoft.com/Rhinogram' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='5 JANUARY 2018'
            url='https://blog.intercom.com/why-cards-are-the-future-of-the-web/' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515375494/sikka_icon_oiaizj.png'
            postedBy='SIKKA'
            timestamp='5 JANUARY 2018'
            url='https://techcrunch.com/2017/10/11/amazon-alexa-devices-can-finally-distinguish-between-different-voices/' />
        </div>
      </div>
    );
  }
}

export default Home;
