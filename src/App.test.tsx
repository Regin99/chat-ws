import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

test('renders correctly', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
