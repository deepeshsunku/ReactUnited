import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../Actions/actions';
import { XAxis, YAxis, LineChart, Line, CartesianGrid, Tooltip, Legend, RadialBarChart, RadialBar } from 'recharts';
import '../../Styles/Cards.css';

// Components
import TwoColumn from './Rows/TwoColumn';
import CardTitle from './Rows/CardTitle';
import Cta from './Rows/Cta';
import Header from './Rows/Header';

var textStyle = {
	fontSize: '10pt'
}

class RadialChartCard extends Component {
	constructor(props) {
	    super(props);
	    console.log("this props LineChartCard", this.props);
	}

	render() {
		const style = {
	  	top: 350,
	  	left: 100,
	  	lineHeight: '24px'
	  };

  	return (
    		<div className="Card-div">
	        <Header title={this.props.title} color={this.props.color} posterImgUrl={this.props.posterImgUrl} postedBy={this.props.postedBy} timestamp={this.props.timestamp} />
					<RadialBarChart width={500} height={470} cx={187} cy={175} innerRadius={25} outerRadius={185} barSize={40} data={this.props.data.rows} startAngle={180} endAngle={-180}>
		        <RadialBar minAngle={15} label={{ style: textStyle, fill: '#000', position: 'insideStart'}} background clockWise={true}  dataKey='value' />
		        <Legend iconSize={10} width={400} height={150} layout='vertical' verticalAlign='middle' wrapperStyle={style} />
						<Tooltip />
	        </RadialBarChart>
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
