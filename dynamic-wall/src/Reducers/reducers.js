import { ADD_REQUEST_KEY, ADD_CARD, ADD_USER_NAME } from '../Actions/actions'

const initialState = {
  	cards: [],
  	requestKey: "45f87782f3761f2ba5790f643981a49c",
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
