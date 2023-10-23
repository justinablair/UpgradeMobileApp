import React from 'react';
import {render} from '@testing-library/react-native';
import InfoBox from '../InfoBox';
import {UserContextProvider} from '../UserContext';
import {StyleSheet, Text} from 'react-native';

describe('InfoBox component', () => {
  it('renders with the correct title and description', () => {
    const title = 'Sample Title';
    const description = 'Sample Description';
    const {getByText} = render(
      <UserContextProvider>
        <InfoBox title={title} description={description} />
      </UserContextProvider>,
    );
    expect(getByText(title)).toBeTruthy();
    expect(getByText(description)).toBeTruthy();
  });

  it('renders with the correct default styles', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <InfoBox title="Sample Title" description="Sample Description" />
      </UserContextProvider>,
    );
    const box = getByTestId('InfoBox');
    const boxStyle = StyleSheet.flatten(box.props.style); // Flattening the styles for access
    expect(boxStyle.borderRadius).toBe(8);
    expect(boxStyle.width).toBe(327);
  });

  it('renders with the correct icon', () => {
    const TestIcon = () => <Text>Icon</Text>;
    const {getByText} = render(
      <UserContextProvider>
        <InfoBox
          title="Sample Title"
          description="Sample Description"
          icon={<TestIcon />}
        />
      </UserContextProvider>,
    );
    expect(getByText('Icon')).toBeTruthy();
  });
});
