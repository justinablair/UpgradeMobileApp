import React from 'react';
import {render} from '@testing-library/react-native';
import ListItem from '../ListItem';
import {StyleSheet} from 'react-native';

describe('ListItem component', () => {
  it('renders with the correct text', () => {
    const text = 'Sample Text';
    const {getByText} = render(<ListItem text={text} />);
    expect(getByText(text)).toBeTruthy();
  });

  it('renders with the correct description', () => {
    const description = 'Sample Description';
    const {getByText} = render(
      <ListItem text="Sample Text" description={description} />,
    );
    expect(getByText(description)).toBeTruthy();
  });

  it('renders with the correct styles', () => {
    const text = 'Sample Text';
    const {getByTestId} = render(<ListItem text={text} />);
    const listItem = getByTestId('ListItem');
    const listStyle = StyleSheet.flatten(listItem.props.style); // Flattening the styles for access
    expect(listStyle.flexDirection).toBeDefined();
    expect(listStyle.flexDirection).toBe('row');
    expect(listStyle.alignItems).toBeDefined();
    expect(listStyle.alignItems).toBe('center');

    const tickContainer = getByTestId('TickContainer');
    const tickStyle = StyleSheet.flatten(tickContainer.props.style); // Flattening the styles for access
    expect(tickStyle.marginRight).toBe(19);
  });
});
