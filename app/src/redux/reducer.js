import { PLAYER } from '../constants';
import { createEmptyField } from '../utils';

const initialState = {
	currentPlayer: PLAYER.cross,
	field: createEmptyField(),
	isGameOver: false,
	isDraw: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_PLAYER': {
			return {...state, currentPlayer: action.payload};
		}
		case 'SET_FIELD': {
			return {...state, field: action.payload};
		}
		case 'SET_DRAW' : {
			return {...state, isDraw: action.payload};
		}
		case 'SET_GAME_OVER' : {
			return {...state, isGameOver: action.payload};
		}
		case 'RESET_GAME': {
			return initialState;
		}
		default:
			return state;
	}
};

