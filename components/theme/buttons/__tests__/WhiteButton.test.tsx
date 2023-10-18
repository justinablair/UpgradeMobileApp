import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import WhiteButton from '../WhiteButton';
import {UserContextProvider} from '../../../UserContext';

describe('WhiteButton component', () => {
  it('should render button correctly', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <UserContextProvider>
        <WhiteButton buttonText="Click me" onPress={mockOnPress} />
      </UserContextProvider>,
    );
    const button = getByText('Click me');
    expect(button).toBeTruthy();
  });

  it('should handle button press correctly', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <UserContextProvider>
        <WhiteButton buttonText="Click me" onPress={mockOnPress} />
      </UserContextProvider>,
    );
    const button = getByText('Click me');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should have the correct accessibility role', () => {
    const mockOnPress = jest.fn();
    const {getByRole} = render(
      <UserContextProvider>
        <WhiteButton buttonText="Click me" onPress={mockOnPress} />
      </UserContextProvider>,
    );
    const button = getByRole('button');
    expect(button).toBeTruthy();
  });
});
