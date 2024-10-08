import {WIN_PATTERNS} from '../constants';

export const checkWinner = (field, currentPlayer) => {
	return WIN_PATTERNS.some((pattern) =>
		pattern.every((index) => field[index] === currentPlayer),
	);
};
