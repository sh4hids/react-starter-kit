import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import App from '../App';
import { ThemeContext } from '../components/ThemeProvider';

test('renders learn react link', () => {
  const { getByText } = render(
    <ThemeContext.Provider value={{ colorMode: 'light' }}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeContext.Provider>
  );

  expect(getByText(/This is home page/i)).toBeInTheDocument();
});
