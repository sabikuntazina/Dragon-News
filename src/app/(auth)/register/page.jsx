"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.photo,
      callbackURL: "/",
    });
    console.log(res,error);
    if(res){
  alert("sign up is successfully done")
}
if(error){
  alert(error.message)
}
  };

  return (
    <div className="max-w-7xl mx-auto p-14 flex justify-center items-center min-h-screen bg-slate-200 rounded-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-base-200 border-base-300 rounded-box w-lg p-10 border "
      >
        <fieldset className="fieldset ">
          <h2 className="fieldset-legend text-xl text-center">
            Create your account
          </h2>

          <label className="label">Your Name</label>
          <input
            type="name"
            className="input w-full"
            placeholder="Your name"
            {...register("name", { required: "Please enter the name" })}
          />
          {errors.name && <p className="text-red-700">{errors.name.message}</p>}
          <label className="label">Photo URL</label>
          <input
            type="photo"
            className="input w-full"
            placeholder="Your photo"
            {...register("photo", { required: "Please enter the password" })}
          />
          {errors.photo && (
            <p className="text-red-700">{errors.photo.message}</p>
          )}

          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            {...register("email", { required: "Please enter the email" })}
          />
          {errors.email && (
            <p className="text-red-700">{errors.email.message}</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            {...register("password", { required: "Please enter the password" })}
          />
          {errors.password && (
            <p className="text-red-700">{errors.password.message}</p>
          )}

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>
          Do you already have an account?{" "}
          <Link href={"/login"}>
            <button className="text-blue-500">Login</button>
          </Link>{" "}
          now
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
