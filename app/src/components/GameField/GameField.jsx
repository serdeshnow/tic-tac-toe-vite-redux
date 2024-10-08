import './GameField.scss'
import { useDispatch, useSelector } from 'react-redux';
import { changePlayer, checkWinner } from '../../utils';
import { RESET_GAME } from '../../redux/index.js';
import {
	selectCurrentPlayer,
	selectField,
	selectIsDraw,
	selectIsGameOver,
} from '../../redux/selectors';

export const GameField = () => {
	const dispatch = useDispatch();

	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameOver = useSelector(selectIsGameOver);
	const isDraw = useSelector(selectIsDraw);
	const field = useSelector(selectField);

	const handleCell = (target, cellIndex) => {
		if (isGameOver || isDraw) {
			dispatch(RESET_GAME);
		 }
		else if (!field[cellIndex]) {
			const newField = [
				...field.slice(0, cellIndex),
				currentPlayer,
				...field.slice(cellIndex + 1),
			];
			dispatch({type: 'SET_FIELD', payload: newField});

			// Winner
			if (checkWinner(newField, currentPlayer)) {
				dispatch({type : 'SET_GAME_OVER', payload: true});
				return;
			}
			// Draw
			if (newField.every((cell) => cell !== "")) {
				dispatch({type: 'SET_DRAW', payload: true})
				return;
			}
			// ChangeCurrentPlayer
			dispatch({type: 'SET_CURRENT_PLAYER', payload: changePlayer(currentPlayer)});
		}
		else console.log('nothing should happen');
	}

	return (
		<section className="game-field">
			{field.map((cell, cellIndex) => (
				<button
					className={
						cell === "X" ?  `game-field__cell-btn game-field__cell-btn-X`
						: cell === "O" ? `game-field__cell-btn game-field__cell-btn-O`
							: `game-field__cell-btn`
					}
					onClick={({target}) => handleCell(target, cellIndex)}
					key={cellIndex}
				/>
			))}
		</section>
	);
};
