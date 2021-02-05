import React from 'react';
import configureStore from 'redux-mock-store';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import createApiMock from '../../../app/createApiMock';
import { mockSelectedAndorra, mockSelectedTirane } from '../mocks';

import SelectedTimezone from './SelectedTimezone';

const SELECTED_TIMEZONE = 'Europe/Andorra';
const CURRENT_TIME = '2021-02-05 14:29:17';

const mockStore = configureStore();
const storeWithSelected = mockStore({
  timezones: {
    selected: SELECTED_TIMEZONE,
  },
});

const storeEmpty = mockStore({
  timezones: {
    selected: '',
  },
});

describe('SelectedTimezone', () => {
  let mock;

  beforeEach(() => {
    mock = createApiMock();
    mockSelectedAndorra(mock);
    mockSelectedTirane(mock);
  });

  describe('default state', () => {
    beforeEach(() => {
      render(
        <Provider store={storeEmpty}>
          <SelectedTimezone />
        </Provider>
      );
    });

    it('renders correctly', async () => {
      expect(screen.getByText('Current time:')).toBeInTheDocument();

      await waitFor(() => {
        expect(mock.history.get.length).toBe(0);
      });
    });

    it('does not show current time if no option is selected', async () => {
      expect(screen.queryByTestId(CURRENT_TIME)).not.toBeInTheDocument();
    });
  });

  describe('with selected timezone state', () => {
    beforeEach(() => {
      render(
        <Provider store={storeWithSelected}>
          <SelectedTimezone />
        </Provider>
      );
    });

    it('shows current time if there is a selected timezone', async () => {
      await waitFor(() => {
        expect(
          screen.getByText(`Current time: ${CURRENT_TIME}`)
        ).toBeInTheDocument();
      });
    });
  });
});
