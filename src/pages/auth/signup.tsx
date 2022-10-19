import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../layouts";
import { signupNewUser } from "./slices/authSlice";
import { HTTP_STATUS } from "utils";

const schema = yup.object().shape({
  emailAddress: yup.string().email().required(),
  fullName: yup.string().required(),
  password: yup.string().required().min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
});

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loadingStatus } = useSelector((state: any) => state.account);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  function onSubmit(data: any) {
    // @ts-ignore
    dispatch(signupNewUser(data));
  }

  useEffect(() => {
    if (loadingStatus === HTTP_STATUS.DONE) {
      navigate("/login", { replace: true });
    }
  }, [loadingStatus]);

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <input
            type="text"
            id="fullName"
            placeholder="FullName"
            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  focus:rounded focus:bg-sky-50 text-black ${
              errors.fullName
                ? "text-red-300 border-red-400"
                : "text-sky-200 border-sky-400"
            }`}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-2">FullName is required.</p>
          )}
        </div>
        <div className="mb-8">
          <input
            type="email"
            id="email"
            placeholder="Email "
            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  focus:rounded focus:bg-sky-50 ${
              errors.emailAddress
                ? "text-red-300 border-red-400"
                : "text-sky-200 border-sky-400"
            }`}
            {...register("emailAddress")}
          />
          {errors.emailAddress && (
            <p className="text-red-500 text-sm mt-2">
              A valid email is required.
            </p>
          )}
        </div>

        <div className="mb-8">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  focus:bg-sky-50 focus:rounded ${
              errors.password ? "border-red-400" : "border-sky-400"
            }`}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-2">
              Your password is required.
            </p>
          )}
        </div>
        <div className="mb-8">
          <input
            type="password"
            id="Confirm Password"
            placeholder="confirmPassword"
            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  focus:bg-sky-50 focus:rounded ${
              errors.confirmPassword ? "border-red-400" : "border-sky-400"
            }`}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">
              Your password must match.
            </p>
          )}
        </div>

        <button className="inline-block bg-sky-500 text-white rounded shadow py-2 px-5 text-sm w-full">
          Submit
        </button>
      </form>
    </AuthLayout>
  );
}
