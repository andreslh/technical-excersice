import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import createApiMock from '../../app/createApiMock';
import store from '../../app/store';

import { mockSelectedAndorra, mockTimezones } from './mocks';
import Timezones from './Timezones';

describe('Timezones', () => {
  let mock;

  beforeEach(() => {
    mock = createApiMock();
    mockTimezones(mock);
    mockSelectedAndorra(mock);

    render(
      <Provider store={store}>
        <Timezones />
      </Provider>
    );
  });

  it('renders correctly', async () => {
    expect(screen.getByText('Select a zone:')).toBeInTheDocument();

    await waitFor(() => {
      expect(mock.history.get.length).toBe(1);
    });

    expect(screen.getByText('Europe/Andorra')).toBeInTheDocument();
  });

  it('does not show current time if no option is selected', async () => {
    expect(screen.queryByTestId('current-time')).not.toBeInTheDocument();
  });

  it('shows current time if one option is selected', async () => {
    const selected = screen.getByLabelText('Select a zone:');
    fireEvent.change(selected, { target: { value: 'Europe/Andorra' } });

    await waitFor(() => {
      expect(screen.getByTestId('current-time')).toBeInTheDocument();
    });
  });
});
