/*
 * action types
 */

export const ADD_REQUEST_KEY = 'ADD_REQUEST_KEY'
export const ADD_USER_NAME = 'ADD_USER_NAME'
export const ADD_CARD = 'ADD_CARD'

/*
 * action creators
 */

export function addRequestKey(requestKey) {
	return({
		data: requestKey,
		type: ADD_REQUEST_KEY
	})
}

export function addUserName(name) {
	return({
		data: name,
		type: ADD_USER_NAME
	})
}

export function addCard(card) {
	return({
		data: card,
		type: ADD_CARD
	})
}