import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ExitModal from '../ExitModal';
import {UserContextProvider} from '../../../UserContext';
import {NavigationContainer} from '@react-navigation/native';

describe('ExitModal', () => {
  const mockProps = {
    visible: true,
    onPressClose: jest.fn(),
    title: 'Test Title',
    content: 'Test Content',
    onAgree: jest.fn(),
    toggleExitModal: jest.fn(),
  };

  it('renders with the correct title and content', () => {
    const {getByText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <ExitModal {...mockProps} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Content')).toBeTruthy();
  });

  it('triggers onPressClose when the "Continue Switch" button is pressed', () => {
    const {getByText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <ExitModal {...mockProps} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    fireEvent.press(getByText('Continue Switch'));
    expect(mockProps.onPressClose).toHaveBeenCalled();
  });

  it('triggers toggleExitModal and onPressClose when the "Exit Switch" button is pressed', () => {
    const {getByText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <ExitModal {...mockProps} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    fireEvent.press(getByText('Exit Switch'));
    expect(mockProps.toggleExitModal).toHaveBeenCalled();
    expect(mockProps.onPressClose).toHaveBeenCalled();
  });

  it('navigates to ThemeScreen when the "Exit Switch" button is pressed', () => {
    const {getByText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <ExitModal {...mockProps} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    fireEvent.press(getByText('Exit Switch'));
    expect(mockProps.toggleExitModal).toHaveBeenCalled();
  });

  it('renders with the correct accessibility labels', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <NavigationContainer>
          <ExitModal {...mockProps} />
        </NavigationContainer>
      </UserContextProvider>,
    );

    expect(getByTestId('modalContent')).toBeTruthy();
    expect(getByTestId('continueSwitchButton')).toBeTruthy();
    expect(getByTestId('exitSwitchButton')).toBeTruthy();
  });
});
