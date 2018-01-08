/*
 * action types
 */

export const ADD_REQUEST_KEY = 'ADD_REQUEST_KEY'
export const ADD_CARDS = 'ADD_CARDS'

/*
 * action creators
 */

export function addRequestKey(requestKey) {
	return({
		data: requestKey,
		type: ADD_REQUEST_KEY
	})
}

export function addCards(cards) {
	return({
		data: cards,
		type: ADD_CARDS
	})
}