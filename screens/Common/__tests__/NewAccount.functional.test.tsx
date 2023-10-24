import React from 'react';
import {render} from '@testing-library/react-native';
import UserContextProvider from '../../../components/UserContext';
import NewAccount from '../NewAccount';

describe('NewAccount component', () => {
  it('renders all InfoBoxes with correct titles', () => {
    const {getByText} = render(
      <UserContextProvider>
        <NewAccount />
      </UserContextProvider>,
    );

    expect(
      getByText('Your app will be locked while we open your new account'),
    ).toBeTruthy();
    expect(getByText('Your account won’t accept CHAPS payments')).toBeTruthy();
    expect(getByText('You’ll use the same app')).toBeTruthy();
    expect(getByText('We’ll send you a welcome email')).toBeTruthy();
    expect(
      getByText('Scheduled payments will be processed on business days'),
    ).toBeTruthy();
  });
});
