import './ResetButton.scss';
import {store} from '../../redux';
import { useSelector } from 'react-redux';
import { selectIsDraw, selectIsGameOver } from '../../redux/selectors/index.js';

export const ResetButton = () => {

	const isGameOver = useSelector(selectIsGameOver);
	const isDraw = useSelector(selectIsDraw);

	const handleReset = () => {
		store.dispatch({type : 'RESET_GAME'});
	}

	return (
	(isDraw || isGameOver) ? (
		<button className="reset-btn" onClick={handleReset}>
			Перезапустить
		</button>
	) : (
		<div className="reset-btn__void"></div>
		)
	)
};
