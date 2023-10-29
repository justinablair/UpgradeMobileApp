import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import GridComponent from '../Grid';

describe('GridComponent', () => {
  it('should call the handleDigitPress function when a digit is pressed', () => {
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

    const digit5 = getByLabelText('digit-5');
    fireEvent.press(digit5);
    expect(handleDigitPress).toHaveBeenCalledWith(5);
  });

  it('should call the handleBackspace function when the backspace button is pressed', () => {
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
