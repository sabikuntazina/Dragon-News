'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye } from "react-icons/io";
import { LuEyeClosed } from "react-icons/lu";

const LoginPage = () => {
  const { register, handleSubmit ,formState: { errors },} = useForm();

  const [isShowPassword, setShowPassword] = useState(false);

 
    const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(res,error)
    if(res){
  alert("Login is successful")
}
if(error){
  alert(error.message)
}

   }

  return (
    <div className="max-w-7xl mx-auto p-14 flex justify-center items-center min-h-screen bg-slate-200 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className=" bg-base-200 border-base-300 rounded-box w-lg p-10 border ">


     <fieldset className="fieldset relative">
  <h2 className="fieldset-legend text-xl text-center">Login your account</h2>

  <label className="label">Email</label>
  <input type="email" className="input w-full" placeholder="Email" {...register("email" , { required: "Please enter the email" })}  />
   {
    errors.email && (<p className="text-red-700">{errors.email.message}</p>)
  }

  <label className="label">Password</label>
  <input  type={isShowPassword ? 'text': "password" } className="input w-full" placeholder="Password" {...register("password" , { required: "Please enter the password" })} />
<span className="absolute right-4 top-40 cursor-pointer" onClick={()=>setShowPassword(!isShowPassword)}>{isShowPassword ?  <IoMdEye /> : <LuEyeClosed /> }</span>

  {
    errors.password && (<p className="text-red-700">{errors.password.message}</p>)
  }

  <button className="btn btn-neutral mt-4">Login</button>
</fieldset>
<p>Do not you have account? <Link href={'/register'}><button className="text-red-600">Register</button></Link> now</p>
      </form>
    </div>
  );
};

export default LoginPage;
