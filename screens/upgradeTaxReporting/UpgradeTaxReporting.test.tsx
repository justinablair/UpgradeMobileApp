import React from 'react';
import {AccessibilityInfo} from 'react-native';
import UpgradeTaxReportingScreen from './UpgradeTaxReporting';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import {UserContextProvider} from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';

(global as any).setImmediate = (callback: any, ...args: any[]) => {
  return setTimeout(callback, 0, ...args);
};

jest.mock('../../components/UserContext', () => {
  const originalModule = jest.requireActual('../../components/UserContext');
  return {
    __esModule: true,
    ...originalModule,
    useUserContext: () => ({
      userType: 'limitedCompany',
    }),
    UserContextProvider: ({children}: {children: React.ReactNode}) => (
      <>{children}</>
    ),
  };
});

describe('UpgradeTaxReportingScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeTaxReporting'
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
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(
      <UserContextProvider>
        <UpgradeTaxReportingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
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
        <UpgradeTaxReportingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith('Tax reporting');
  });

  it('should enable form submit when the checkbox is checked', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeTaxReportingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    let agreeButton = getByTestId('agreeButton');
    const checkbox = getByTestId('checkboxToggle');
    expect(agreeButton.props.accessibilityState.disabled).toBe(true);

    act(() => {
      fireEvent.press(checkbox);
      agreeButton = getByTestId('agreeButton');
    });
    expect(agreeButton.props.accessibilityState.disabled).toBe(false);

    act(() => {
      fireEvent.press(agreeButton);
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeResidency');
  });

  it('opens the facta info modal on press of facta text', async () => {
    const {getByTestId, findByText} = render(
      <UserContextProvider>
        <UpgradeTaxReportingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      const factaPressable = getByTestId('facta');
      fireEvent.press(factaPressable);
    });
    await waitFor(() => {
      const element = findByText(
        'FACTA stands for the Foreign Account Tax Compliance Act.',
      );
      expect(element).toBeTruthy();
    });
  });

  it('opens the crs info modal on press of crs text', async () => {
    const {getByTestId, findByText} = render(
      <UserContextProvider>
        <UpgradeTaxReportingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      const crsPressable = getByTestId('crs');
      fireEvent.press(crsPressable);
    });
    await waitFor(() => {
      const element = findByText(
        'CRS stands for the Common Reporting Standard',
      );
      expect(element).toBeTruthy();
    });
  });
});
