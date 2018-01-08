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
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515346151/3e08283_hpktlv.jpg'
            postedBy='Ben Holland'
            timestamp='5 JANUARY 2018'
            url='https://store.sikkasoft.com/Invisalign' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515346151/3e08283_hpktlv.jpg'
            postedBy='Ben Holland'
            timestamp='5 JANUARY 2018'
            url='https://store.sikkasoft.com/AmazonDental' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515346151/3e08283_hpktlv.jpg'
            postedBy='Ben Holland'
            timestamp='5 JANUARY 2018'
            url='https://store.sikkasoft.com/pa' />
          <ShareCard
            posterImgUrl='http://res.cloudinary.com/dya5uydvs/image/upload/v1515346151/3e08283_hpktlv.jpg'
            postedBy='Ben Holland'
            timestamp='5 JANUARY 2018'
            url='https://store.sikkasoft.com/Rhinogram' />
        </div>
      </div>
    );
  }
}

export default Home;
