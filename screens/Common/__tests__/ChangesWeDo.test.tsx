import React from 'react';
import {render} from '@testing-library/react-native';
import ChangesWeDo from '../ChangesWeDo';
import {UserContextProvider} from '../../../components/UserContext';

describe('ChangesWeDo component', () => {
  it('renders all InfoBoxes with correct titles', () => {
    const {getByText} = render(
      <UserContextProvider>
        <ChangesWeDo />
      </UserContextProvider>,
    );

    expect(
      getByText('Give you a new account number and sort code'),
    ).toBeTruthy();
    expect(getByText('Close your e-money account')).toBeTruthy();
    expect(getByText('Move your money')).toBeTruthy();
    expect(getByText('Email your data')).toBeTruthy();
    expect(getByText('Send you a new card in 3-5 working days')).toBeTruthy();
    expect(getByText('Keep FreeAgent connected')).toBeTruthy();
  });
});
