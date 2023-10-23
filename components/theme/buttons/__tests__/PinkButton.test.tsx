import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import PinkButton from '../PinkButton';
import {UserContextProvider} from '../../../UserContext';

describe('PinkButton component', () => {
  it('should render button correctly', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <UserContextProvider>
        <PinkButton buttonText="Click me" onPress={mockOnPress} />
      </UserContextProvider>,
    );
    const button = getByText('Click me');
    expect(button).toBeTruthy();
  });

  it('should handle button press correctly', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <UserContextProvider>
        <PinkButton buttonText="Click me" onPress={mockOnPress} />
      </UserContextProvider>,
    );
    act(() => {
      const button = getByText('Click me');
      fireEvent.press(button);
    });
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should disable the button correctly', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <UserContextProvider>
        <PinkButton
          buttonText="Click me"
          onPress={mockOnPress}
          disabled={true}
        />
      </UserContextProvider>,
    );

    act(() => {
      const button = getByText('Click me');
      fireEvent.press(button);
    });
    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });
});
