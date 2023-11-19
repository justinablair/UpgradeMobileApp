export const useAddressValidation = () => {
  const ukPostcodeRegex = /^[A-Za-z]{1,2}\d{1,2} ?\d[A-Za-z]{2}$/;
  const lettersAndSpacesRegex = /^[a-zA-Z\s]*$/; // Allow only letters and spaces
  const lettersNumbersAndSpacesRegex = /^[a-zA-Z0-9\s]*$/; // Allow letters, numbers, and spaces

  const formatPostcode = (postcode: string) => postcode.trim().toUpperCase();

  const isFormValid = (
    addressLine1: string,
    town: string,
    postcode: string,
  ) => {
    if (!addressLine1 || !town || !postcode) {
      return 'Please complete all required fields.';
    }

    if (!lettersNumbersAndSpacesRegex.test(addressLine1)) {
      return 'Address cannot contain special characters.';
    }

    if (!lettersAndSpacesRegex.test(town)) {
      return 'Town cannot contain special characters or numbers.';
    }

    if (!ukPostcodeRegex.test(postcode)) {
      return 'Please provide a valid UK postcode.';
    }

    return null;
  };

  return {isFormValid, formatPostcode};
};
