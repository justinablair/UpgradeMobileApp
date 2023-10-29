import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import GridComponent from '../Grid';

describe('GridComponent', () => {
  it('handles digit press correctly', () => {
    const handleDigitPress = jest.fn();
    const handleBackspace = jest.fn();
    const textColour = 'black';

    const {getByLabelText} = render(
      <GridComponent
        handleDigitPress={handleDigitPress}
        handleBackspace={handleBackspace}
        textColour={textColour}
      />,
    );

    const digit1 = getByLabelText('digit-1');
    fireEvent.press(digit1);
    expect(handleDigitPress).toHaveBeenCalledWith(1);

    const digit5 = getByLabelText('digit-5');
    fireEvent.press(digit5);
    expect(handleDigitPress).toHaveBeenCalledWith(5);

    const digit9 = getByLabelText('digit-9');
    fireEvent.press(digit9);
    expect(handleDigitPress).toHaveBeenCalledWith(9);
  });

  it('handles backspace press correctly', () => {
    const handleDigitPress = jest.fn();
    const handleBackspace = jest.fn();
    const textColour = 'black';

    const {getByTestId} = render(
      <GridComponent
        handleDigitPress={handleDigitPress}
        handleBackspace={handleBackspace}
        textColour={textColour}
      />,
    );

    const backspaceButton = getByTestId('backspaceButton');
    fireEvent.press(backspaceButton);
    expect(handleBackspace).toHaveBeenCalled();
  });
});
