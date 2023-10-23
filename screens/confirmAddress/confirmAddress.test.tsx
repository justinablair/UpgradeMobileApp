import React from 'react';
import {render, fireEvent, act, waitFor} from '@testing-library/react-native';
import ConfirmAddressScreen from './ConfirmAddress';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';

jest.mock('../../components/UserContext', () => {
  const originalModule = jest.requireActual('../../components/UserContext');
  return {
    __esModule: true,
    ...originalModule,
    useUserContext: () => ({
      addressLine1: '31 city street road',
      town: 'London',
      postcode: 'sm46hu',
    }),
    UserContextProvider: ({children}: {children: React.ReactNode}) => (
      <>{children}</>
    ),
  };
});

describe('<ConfirmAddressScreen />', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'ConfirmAddress'
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

  it('renders correctly', () => {
    const {getByText, getByLabelText} = render(
      <UserContextProvider>
        <ConfirmAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('Confirm your address')).toBeTruthy();
    expect(getByLabelText('Confirm Address Screen')).toBeTruthy();
  });

  it('calls AccessibilityInfo.announceForAccessibility with the correct message', () => {
    const mockAnnounceForAccessibility = jest.fn();
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    jest.spyOn(React, 'useContext').mockReturnValue({isDarkMode: true});
    jest
      .spyOn(AccessibilityInfo, 'announceForAccessibility')
      .mockImplementation(mockAnnounceForAccessibility);

    render(
      <UserContextProvider>
        <ConfirmAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(mockAnnounceForAccessibility).toBeCalledWith('Confirm your address');
  });

  it('should navigate to the desired screen', () => {
    const {getByText} = render(
      <UserContextProvider>
        <ConfirmAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    fireEvent.press(getByText('Confirm address'));
    expect(mockNavigation.navigate).toBeCalledWith('StepperComplete');
  });

  it('opens update address modal and navigates to the correct screen', async () => {
    const {getByText, findByText, getByTestId} = render(
      <UserContextProvider>
        <ConfirmAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    fireEvent.press(getByText('Update address'));
    await waitFor(() => {
      expect(
        findByText('Updating your address will also change the address'),
      ).toBeTruthy();
    });

    fireEvent.press(getByTestId('interactivePinkButton'));

    expect(mockNavigation.navigate).toBeCalledWith('PersonalDetails');
  });

  it('opens the new card info modal on press of new card text', async () => {
    const {getByTestId, getByText} = render(
      <UserContextProvider>
        <ConfirmAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    fireEvent.press(getByTestId('newCardPressable'));

    await waitFor(() => {
      expect(
        getByText(
          /Because we’re closing your e-money account, your current card will no longer work./,
        ),
      ).toBeTruthy();
    });
  });

  it('displays the user address', () => {
    const {findByText} = render(
      <UserContextProvider>
        <ConfirmAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(findByText('123 Street')).toBeTruthy();
    expect(findByText('City')).toBeTruthy();
    expect(findByText('12345')).toBeTruthy();
  });
});
