import * as yup from "yup";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const LoginSchema = yup.object().shape({
  emailAddress: yup.string().email().required("Email Address is required"),
  password: yup.string().required("Password is required")
});

export const SignupSchema = yup.object().shape({
  emailAddress: yup.string().email().required("Email required"),
  bvn: yup.string().required("BVN required"),
  bankName: yup.string().required("Bank Name required"),
  bankAccountNumber: yup.string().required("Account Number required"),
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  phoneNumber: yup
    .string()
    .required("Phone required")
    .matches(phoneRegExp, "Invalid phone number"),
  password: yup.string().required("Password required").min(6),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
});

export const ForgotPasswordSchema = yup.object().shape({
  emailAddress: yup.string().email().required("Provide valid Email Address")
});
