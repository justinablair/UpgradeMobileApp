import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AuthModal from '../AuthModal';
import {getByText} from '@testing-library/react';

describe('AuthModal component', () => {
  jest.setTimeout(10000); // Set the test timeout to 10000 ms or as needed

  it('should render properly', () => {
    const {getByLabelText} = render(
      <AuthModal visible={true} onClose={() => {}} />,
    );

    expect(getByLabelText('Authentication Modal')).toBeTruthy();
  });

  it('should handle digit press correctly', () => {
    const onCloseMock = jest.fn();
    const {getByText} = render(
      <AuthModal visible={true} onClose={onCloseMock} />,
    );

    fireEvent.press(getByText('1'));
    fireEvent.press(getByText('2'));

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('should handle backspace correctly', () => {
    const onCloseMock = jest.fn();
    const {getByLabelText, getByTestId} = render(
      <AuthModal visible={true} onClose={onCloseMock} />,
    );

    fireEvent.press(getByTestId('backspaceButton'));

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('should handle modal close correctly', () => {
    const mockOnClose = jest.fn();
    const {getByLabelText} = render(
      <AuthModal visible={true} onClose={mockOnClose} />,
    );
    const digitButtons = [...Array(6).keys()].map(num =>
      getByLabelText(`digit-${num}`),
    );
    digitButtons.forEach(button => fireEvent.press(button));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
