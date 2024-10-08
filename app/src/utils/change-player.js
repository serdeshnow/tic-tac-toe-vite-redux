import {PLAYER} from '../constants';

export const changePlayer = (prev) => (prev === PLAYER.cross ?
	PLAYER.nought :
	PLAYER.cross);
