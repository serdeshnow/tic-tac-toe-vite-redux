import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import './styles/index.css';
import './styles/class-names.scss';
import './styles/variables.css';
import './styles/normalize.css';

const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
