
var cardArr = [{
  type: "TwoColumn",
  title: "Morning Report",
  timestamp: new Date("2018-01-05:9:00:00Z"),
  data: {
	  rows: [{
	    name: "Scheduled Production",
	    value: 7230,
	    type: "Amount"
	  },
	  {
	    name: "Scheduled Appointments",
	    value: 10,
	    type: "Int",
	  }]
  },
  cta: {
    title: "Click here to buy some dental floss.",
    url: "sikkasoft.com/dentalfloss" 
  }
},
{
  type: "MarketingPost",
  title: "Morning Report",
  timestamp: new Date("2018-01-05:9:00:00Z"),
  data: {
  	image: "some url",
    postedBy: "Alan Ji",
    profileImage: "some url",
  },
  cta: {
    title: "Click here to buy some dental floss.",
    url: "sikkasoft.com/dentalfloss" 
  }
}]