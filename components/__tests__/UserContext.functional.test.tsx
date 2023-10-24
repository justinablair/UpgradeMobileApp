import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import UserContextProvider, {useUserContext, UserType} from '../UserContext';

describe('UserContext', () => {
  it('should toggle dark mode', () => {
    const TestComponent = () => {
      const {isDarkMode, toggleDarkMode} = useUserContext();
      return (
        <div>
          <span data-testid="darkModeStatus">{isDarkMode.toString()}</span>
          <button onClick={toggleDarkMode} data-testid="toggleDarkModeButton">
            Toggle Dark Mode
          </button>
        </div>
      );
    };

    const {getByTestId} = render(
      <UserContextProvider>
        <TestComponent />
      </UserContextProvider>,
    );

    const darkModeStatus = getByTestId('darkModeStatus');
    const toggleDarkModeButton = getByTestId('toggleDarkModeButton');

    expect(darkModeStatus.textContent).toBe('false');

    fireEvent.click(toggleDarkModeButton);
    expect(darkModeStatus.textContent).toBe('true');

    fireEvent.click(toggleDarkModeButton);
    expect(darkModeStatus.textContent).toBe('false');
  });

  it('should set a new address', () => {
    const TestComponent = () => {
      const {
        addressLine1,
        setBusinessName,
        setAddressLine1,
        setTown,
        setPostcode,
      } = useUserContext();

      const handleSetAddress = () => {
        setBusinessName('New Business');
        setAddressLine1('New Address 1');
        setTown('New Town');
        setPostcode('12345');
      };

      return (
        <div>
          <button onClick={handleSetAddress} data-testid="setAddressButton">
            Set Address
          </button>
          <span data-testid="businessName">{addressLine1}</span>
        </div>
      );
    };

    const {getByTestId} = render(
      <UserContextProvider>
        <TestComponent />
      </UserContextProvider>,
    );

    const setAddressButton = getByTestId('setAddressButton');
    fireEvent.click(setAddressButton);

    const businessName = getByTestId('businessName');
    expect(businessName.textContent).toBe('New Address 1');
  });

  it('should set the user type', () => {
    const TestComponent = () => {
      const {userType, setUserType} = useUserContext();

      const handleSetUserType = (newUserType: UserType) => {
        setUserType(newUserType);
      };

      return (
        <div>
          <button
            onClick={() => handleSetUserType('soleTrader')}
            data-testid="setSoleTrader">
            Set as Sole Trader
          </button>
          <button
            onClick={() => handleSetUserType('limitedCompany')}
            data-testid="setLimitedCompany">
            Set as Limited Company
          </button>
          <span data-testid="userType">{userType}</span>
        </div>
      );
    };

    const {getByTestId} = render(
      <UserContextProvider>
        <TestComponent />
      </UserContextProvider>,
    );

    const soleTraderButton = getByTestId('setSoleTrader');
    const limitedCompanyButton = getByTestId('setLimitedCompany');
    const userTypeElement = getByTestId('userType');

    fireEvent.click(soleTraderButton);
    expect(userTypeElement.textContent).toBe('soleTrader');

    fireEvent.click(limitedCompanyButton);
    expect(userTypeElement.textContent).toBe('limitedCompany');
  });
});
