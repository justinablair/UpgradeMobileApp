import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import CompanyDetailsScreen from '../CompanyDetails';
import {UserContextProvider} from '../../components/UserContext';

(global as any).setImmediate = (callback: any, ...args: any[]) => {
  return setTimeout(callback, 0, ...args);
};

describe('CompanyDetailsScreen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  it('should render the company details screen correctly', () => {
    render(
      <UserContextProvider>
        <CompanyDetailsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
  });

  it('should disable the Next button when the company name is not entered', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <CompanyDetailsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const nextButton = getByTestId('nextButton');

    expect(nextButton.props.accessibilityState.disabled).toBe(true);
  });

  it('should enable the Next button when the company name is entered and checkbox is checked', async () => {
    const {getByPlaceholderText, getByTestId, getByText} = render(
      <UserContextProvider>
        <CompanyDetailsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    const companyNameInput = getByPlaceholderText('Enter your company name');
    let nextButton = getByTestId('nextButton');
    const checkbox = getByTestId('checkboxToggle');
    fireEvent.changeText(companyNameInput, 'Test Company');
    expect(companyNameInput.props.value).toBe('Test Company');
    // Check if the Next button is still disabled
    expect(nextButton.props.accessibilityState.disabled).toBe(true);
    fireEvent.press(checkbox);
    // Re-retrieve the Next button element after the state update
    nextButton = getByTestId('nextButton');
    // Check if the Next button is now enabled
    expect(nextButton.props.accessibilityState.disabled).toBe(false);
    // Check if the confirm text is rendered
    const confirmText = getByText(`I confirm Test Company is correct`);
    expect(confirmText).toBeDefined();
  });
});
