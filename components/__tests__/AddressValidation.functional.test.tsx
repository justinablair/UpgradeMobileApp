import {renderHook} from '@testing-library/react-native';
import {useAddressValidation} from '../AddressValidation';

describe('useAddressValidation', () => {
  it('should return an error message when required fields are empty', () => {
    const {result} = renderHook(() => useAddressValidation());
    const {isFormValid} = result.current;
    const errorMessage = isFormValid('', '', '');
    expect(errorMessage).toBe('Please complete all required fields.');
  });

  it('should return an error message for an invalid UK postcode', () => {
    const {result} = renderHook(() => useAddressValidation());
    const {isFormValid} = result.current;
    const errorMessage = isFormValid('123 New Street', 'Town', '12345');
    expect(errorMessage).toBe('Please provide a valid UK postcode.');
  });
});
