import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import OptionsWithChevron from '../OptionsWithChevron';
import {UserContextProvider} from '../UserContext';
import {StyleSheet} from 'react-native';

describe('OptionsWithChevron component', () => {
  it('renders with the correct title and description', () => {
    const title = 'Sample Title';
    const description = 'Sample Description';
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <UserContextProvider>
        <OptionsWithChevron
          title={title}
          description={description}
          onPress={mockOnPress}
        />
        ,
      </UserContextProvider>,
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(description)).toBeTruthy();
  });

  it('calls the onPress function when pressed', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(
      <UserContextProvider>
        <OptionsWithChevron
          title="Sample Title"
          description="Sample Description"
          onPress={mockOnPress}
        />
      </UserContextProvider>,
    );

    act(() => {
      const button = getByTestId('OptionsButton');
      fireEvent.press(button);
    });
    expect(mockOnPress).toHaveBeenCalled();
  });
});

it('renders with the correct styles', () => {
  const {getByTestId} = render(
    <UserContextProvider>
      <OptionsWithChevron
        title="Sample Title"
        description="Sample Description"
        onPress={() => {}}
      />
    </UserContextProvider>,
  );
  const optionContainer = getByTestId('OptionsButton');
  const optionContainerStyle = StyleSheet.flatten(optionContainer.props.style); // Flattening the styles for access

  const optionContent = getByTestId('OptionContent');
  const optionContentStyle = StyleSheet.flatten(optionContent.props.style); // Flattening the styles for access
  expect(optionContainerStyle.width).toBe(654);
  expect(optionContentStyle.flex).toBe(1);
});
