import './InfoPanel.scss';
import { useSelector } from 'react-redux';
import {
	selectCurrentPlayer,
	selectIsDraw,
	selectIsGameOver,
} from '../../redux/selectors/index.js';

export const InfoPanel = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameOver = useSelector(selectIsGameOver);
	const isDraw = useSelector(selectIsDraw);

	return (
		<section className={`info-panel ${isDraw ? "info-panel__draw" : currentPlayer === "X" ? "info-panel__player-X" : "info-panel__player-O"}`}>
			{isDraw
				? "Ничья"
				: isGameOver
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</section>
	);
};
