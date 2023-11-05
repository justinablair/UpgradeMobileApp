import {useAddressValidation} from '../AddressValidation';

describe('useAddressValidation', () => {
  it('returns error message when required fields are empty', () => {
    const {isFormValid} = useAddressValidation();
    const result = isFormValid('', '', '');
    expect(result).toEqual('Please complete all required fields.');
  });

  it('returns error message for invalid UK postcode', () => {
    const {isFormValid} = useAddressValidation();
    const result = isFormValid('123 New Street', 'Town', '12345');
    expect(result).toEqual('Please provide a valid UK postcode.');
  });

  it('returns null when all fields are valid', () => {
    const {isFormValid} = useAddressValidation();
    const result = isFormValid('123 New Street', 'Town', 'AB12 3CD');
    expect(result).toBeNull();
  });
});
