import React, { useState } from "react";
import { useForm } from "react-hook-form";
import firebaaseClient from "../../authentication/firebaseClient"
import firebase from "firebase/app"
import "firebase/auth"
import Link from "next/Link";
import Image from "next/image"
import firebaseClient from "../../authentication/firebaseClient";


export const Dashboard = () => {
  const [isNewUser, setIsNewUser] = useState(true)

  const SignUp = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
      <div className="flex justify-between items-center flex-grow w-full">
        <div className="mx-auto">
          <Image src="/city.gif" width="400" height="400" className="ml-30" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-64 mr-40 p-2">
          <h2 className="font-bold ml-2 text-xl text-gray-600 mb-3">Create Account</h2>
          <input name="fullname" defaultValue="" ref={register} placeholder="Fullname" className="w-full bg-gray-100 my-2 px-3 py-2 rounded-sm text-xs text-gray-900 focus:outline-none" />
          <input name="username" defaultValue="" ref={register} placeholder="Username" className="w-full bg-gray-100 my-2 px-3 py-2 rounded-sm text-xs text-gray-900 focus:outline-none" />

          <input name="email" ref={register({ required: true, })} placeholder="Email" className="w-full bg-gray-100 my-2 px-3 py-2 rounded-sm text-xs text-gray-900 focus:outline-none" />
          {errors.email && (<div className="mt-2 text-xs text-red-600">{errors.email.message}</div>)}

          <input name="password" type="password" ref={register({ required: true })} placeholder="Password" className="w-full bg-gray-100 my-2 px-3 py-2 rounded-sm text-xs text-gray-900 focus:outline-none" />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value="Submit" className="w-full bg-purple-600 active:bg-purple-800 my-2 px-3 py-2 rounded-sm text-sm text-white focus:outline-none" />

          <div className="flex justify-between mx-2 mt-4">
            <small className="text-xsm text-gray-400">Already a member?</small>
            <a onClick={() => setIsNewUser(false)} className="text-xsm text-purple-900"><Link href="/account">Log in</Link></a>
          </div>
        </form>
      </div>
    );
  }

  const SignIn = () => {
    firebaseClient;
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = async (data) => {
      const {username, email, password} = data
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(function() {
          window.location.href = "/"
        })
        .catch((error) => {
          return (
            <div class="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2" >
              <div class="text-red-500 rounded-full bg-white mr-3">
                <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                </svg>
              </div>
              <div class="text-white max-w-xs ">
                {error.message}
              </div>
          </div>
          )
        });
    };
    console.log(watch("Username")); // watch input value by passing the name of it

    return (
      <div className="flex justify-between items-center flex-grow w-full">
        <div className="mx-auto">
          <Image src="/city.gif" width="400" height="400" className="ml-30" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-64 mr-40 p-2">
          <h2 className="font-bold ml-2 text-xl text-gray-600 mb-3">Login</h2>
          <input name="username" defaultValue="" ref={register} placeholder="Username" className="w-full bg-gray-100 my-2 px-3 py-2 rounded-sm text-xs text-gray-900 focus:outline-none" />
          <input name="email" ref={register({ required: true })} placeholder="Email" className="w-full bg-gray-100 my-2 px-3 py-2 rounded-sm text-xs text-gray-900 focus:outline-none" />
          <input name="password" type="password" ref={register({ required: true })} placeholder="Password" className="w-full bg-gray-100 my-2 px-3 py-2 rounded-sm text-xs text-gray-900 focus:outline-none" />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value="Submit" className="w-full bg-purple-600 active:bg-purple-800 my-2 px-3 py-2 rounded-sm text-sm text-white focus:outline-none" />

          <div className="flex justify-between mx-2 mt-4">
            <small className="text-xsm text-gray-400">Create New Account</small>
            <a onClick={() => setIsNewUser(true)} className="text-xsm text-purple-900"><Link href="/account">Sign Up</Link></a>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-grow items-center justify-center">
      { isNewUser ? <SignUp /> : <SignIn />}
    </div>
  )
}


