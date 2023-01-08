import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required("Email Address is required"),
  password: yup.string().required("Password is required")
});

export const SignupSchema = yup.object().shape({
  emailAddress: yup.string().email().required("Email required"),
  bvn: yup.string().required("BVN required"),
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  phoneNumber: yup.string().required("Phone required"),
  password: yup.string().required("Password required").min(6),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
});

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required("Provide valid Email Address")
});
