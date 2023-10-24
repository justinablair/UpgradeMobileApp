import React from 'react';
import {render} from '@testing-library/react-native';
import InfoBox from '../InfoBox';
import {StyleSheet} from 'react-native';
import UserContextProvider from '../UserContext';

describe('InfoBox component', () => {
  it('renders with the correct title and description', () => {
    const title = 'Sample Title';
    const description = 'Sample Description';
    const {getByText} = render(
      <UserContextProvider>
        <InfoBox title={title} description={description} />
      </UserContextProvider>,
    );
    expect(getByText(title)).toBeDefined();
    expect(getByText(description)).toBeDefined();
  });
});
