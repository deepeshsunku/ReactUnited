import { ADD_REQUEST_KEY, ADD_CARD } from '../Actions/actions'

const initialState = {
  	cards: [],
  	requestKey: "cfeda940846ed3c835225ac7c677df9a"
}

function dynamicWallReducer(state, action) {
  	if (typeof state === 'undefined') {
    	return initialState
  	}
  	console.log("Running reducer...", action);
  	switch (action.type) {
  		case ADD_REQUEST_KEY:
	  		var newState = state;
	  		newState.jwt = action.data;
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