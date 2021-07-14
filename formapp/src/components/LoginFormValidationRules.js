export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(values.name)) {
    errors.name = 'Name has to be in the form of "FirstName LastName"';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password address is required';
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
      values.password
    )
  ) {
    errors.password =
      'Password must contain at least 8 characters, at least 1 capital letter, 1 small letter, 1 number and 1 symbol';
  }
  if (!values.dofb) {
    errors.dofb = 'Date of birth is required';
  } else if (
    !/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([1][0-9]{3})$/.test(
      values.dofb
    )
  ) {
    errors.dofb = 'Date of birth is invalid (check format and year<2000)';
  }
  if (!values.pin) {
    errors.pin = 'Pincode is required';
  } else if (!/^[0-9]{6}$/.test(values.pin)) {
    errors.pin = 'Pincode is invalid (6 digit pin)';
  }
  if (!values.phone) {
    errors.phone = 'Phone number is required';
  } else if (!/^\+(?:[0-9] ?){5,15}[0-9]$/.test(values.phone)) {
    errors.phone = 'Phone number is invalid (include country code)';
  }
  return errors;
}
