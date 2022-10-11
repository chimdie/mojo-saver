// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthLayout } from "../../layouts";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6)
});

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  function onSubmit(data: string | any) {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <input
            type="text"
            id="email"
            placeholder="email"
            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  focus:rounded focus:bg-sky-50 ${
              errors.email
                ? "text-red-300 border-red-400"
                : "text-sky-200 border-sky-400"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              A valid email is required.
            </p>
          )}
        </div>

        <div className="mb-8">
          <input
            type="password"
            id="password"
            placeholder="password"
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

        <button className="inline-block bg-sky-500 text-white rounded shadow py-2 px-5 text-sm">
          Submit
        </button>
      </form>
    </AuthLayout>
  );
}
