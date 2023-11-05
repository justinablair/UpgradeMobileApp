export const useAddressValidation = () => {
  const ukPostcodeRegex = /^[A-Za-z]{1,2}\d{1,2} ?\d[A-Za-z]{2}$/;

  const isFormValid = (
    addressLine1: string,
    town: string,
    postcode: string,
  ) => {
    if (!addressLine1 || !town || !postcode) {
      return 'Please complete all required fields.';
    }

    if (!ukPostcodeRegex.test(postcode)) {
      return 'Please provide a valid UK postcode.';
    }

    return null;
  };

  return {isFormValid};
};
