import React from 'react';
import {render} from '@testing-library/react-native';
import UserContextProvider from '../../../components/UserContext';
import ChangesYouDo from '../ChangesYouDo';

describe('ChangesYouDo component', () => {
  it('renders all InfoBoxes with correct titles', () => {
    const {getByText} = render(
      <UserContextProvider>
        <ChangesYouDo />
      </UserContextProvider>,
    );

    expect(getByText('Give your clients your new bank details')).toBeTruthy();
    expect(
      getByText('Set up your Direct Debits and scheduled payments'),
    ).toBeTruthy();
    expect(getByText('Set up any pots you need')).toBeTruthy();
    expect(getByText('Set up Apple Pay')).toBeTruthy();
    expect(getByText('Connect Xero or Quickbooks')).toBeTruthy();
  });
});
