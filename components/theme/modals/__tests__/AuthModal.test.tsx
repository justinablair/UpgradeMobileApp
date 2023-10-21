import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AuthModal from '../AuthModal';
import {RootStackParamList} from '../../../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';

describe('AuthModal component', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'PersonalDetails'
  > = {
    navigate: jest.fn(),
    goBack: jest.fn(),
    dispatch: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    canGoBack: () => true,
    isFocused: () => true,
    push: jest.fn(),
    replace: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    setOptions: jest.fn(),
    reset: jest.fn(),
    getParent: jest.fn(),
    getState: jest.fn(),
    getId: jest.fn(),
  };
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
      <AuthModal
        visible={true}
        onClose={mockOnClose}
        navigation={mockNavigation}
      />,
    );
    const digitButtons = [...Array(6).keys()].map(num =>
      getByLabelText(`digit-${num}`),
    );
    digitButtons.forEach(button => fireEvent.press(button));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
