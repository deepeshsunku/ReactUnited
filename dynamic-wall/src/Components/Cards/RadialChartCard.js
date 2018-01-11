import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../Actions/actions';
import { XAxis, YAxis, LineChart, Line, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../../Styles/Cards.css';

// Components
import TwoColumn from './Rows/TwoColumn';
import CardTitle from './Rows/CardTitle';
import Cta from './Rows/Cta';
import Header from './Rows/Header';

class RadialChartCard extends Component {
	constructor(props) {
	    super(props);
	    console.log("this props LineChartCard", this.props);
	}

	render() {
  	return (
    		<div className="Card-div">
	        <Header title={this.props.title} color={this.props.color} posterImgUrl={this.props.posterImgUrl} postedBy={this.props.postedBy} timestamp={this.props.timestamp} />
					<LineChart width={375} height={400} data={this.props.data.rows}
            margin={{top: 5, right: 15, left: 15, bottom: 5}}>
			       <XAxis dataKey="colName"/>
			       <YAxis hide="true" domain={[this.props.data.minValue, this.props.data.maxValue]}/>
						 <CartesianGrid strokeDasharray="3 3"/>
			       <Tooltip />
			       <Legend />
						 <Line name='Gross' type='monotone' dataKey='grossValue' stroke='#82ca9d' strokeWidth={2} />
			       <Line name='Net' type='monotone' dataKey='netValue' stroke='#8884d8' strokeWidth={2} />
					</LineChart>
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
)(RadialChartCard);
