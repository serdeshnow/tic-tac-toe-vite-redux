import './styles/App.scss';
import { GameField, InfoPanel, ResetButton } from './components/index.js';

export const App = () => {

	return (
		<>
			<InfoPanel />
			<GameField />
			<ResetButton/>
		</>
	);
};
