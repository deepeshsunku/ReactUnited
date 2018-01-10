import { ADD_REQUEST_KEY, ADD_CARD, ADD_USER_NAME } from '../Actions/actions'

const initialState = {
  	cards: [],
  	requestKey: "df2ac3c53e8c43d26daef1fdf42d8def",
  	username: ""
}

function dynamicWallReducer(state, action) {
  	if (typeof state === 'undefined') {
    	return initialState
  	}
  	console.log("Running reducer...", action);
  	switch (action.type) {
  		case ADD_REQUEST_KEY:
	  		var newState = state;
	  		newState.requestKey = action.data;
	  		console.log("New state.", newState);
	  		return newState

	  	case ADD_USER_NAME:
	  		var newState = state;
	  		newState.username = action.data;
	  		console.log("New state.", newState);
	  		return newState

	  	case ADD_CARD:
	  		var newState = state;
	  		newState.cards.push(action.data);
	  		console.log("New state.", newState);
	  		return newState

	  	default:
	  		return state
  	}
}

export default dynamicWallReducer
