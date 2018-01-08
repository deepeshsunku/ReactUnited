import { ADD_BUSINESSES, UPDATE_ADVANCE_INFO, ADD_DEBIT_INFO, ADD_JWT } from '../Actions/actions'

const initialState = {
  	cards: [],
  	requestKey: ""
}

function dynamicWallReducer(state, action) {
  	if (typeof state === 'undefined') {
    	return initialState
  	}
  	console.log("Running reducer...", action);
  	switch (action.type) {
  		case ADD_JWT:
	  		var newState = state;
	  		newState.jwt = action.data;
	  		return newState
	  		break

	  	case ADD_BUSINESSES:
	  		var newState = state;
	  		newState.businesses = action.data;
	  		return newState
	  		break

	  	case UPDATE_ADVANCE_INFO:
	  		var newState = state;
	  		let advanceInfo = action.data;
	  		var businessIndex = filterBusiness(action.business, newState.businesses);
	  		console.log("businessIndex", businessIndex, newState);
	  		newState.businesses[businessIndex].AdvanceInfo.AdvanceLimit = advanceInfo.AdvanceLimit;
	  		newState.businesses[businessIndex].AdvanceInfo.Fees = advanceInfo.Fees;
	  		newState.businesses[businessIndex].AdvanceInfo.CreditLeft = advanceInfo.CreditLeft;
	  		return newState
	  		break

	  	case ADD_DEBIT_INFO:
	  		var newState = state;
	  		let debitInfo = action.data;
	  		var businessIndex = filterBusiness(action.businessId, newState.businesses);
	  		if(newState.businesses[businessIndex].DebitInfo) {
	  			newState.businesses[businessIndex].DebitInfo.push(debitInfo);
	  		} else {
	  			newState.businesses[businessIndex].DebitInfo = [];
	  			newState.businesses[businessIndex].DebitInfo.push(debitInfo);
	  		}
	  		return newState
	  		break

	  	default:
	  		return state
  	}
}

function filterBusiness(businessId, businesses) {
	var business = {};
	var businessIndex = 0;
    businesses.forEach(function(item, index) {
      if(item.Id === businessId) {
      	console.log("return filterBusiness", item, index);
        businessIndex = index
      }
    })
    return businessIndex;
}

export default dynamicWallReducer