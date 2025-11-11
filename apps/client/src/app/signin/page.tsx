"use client"
import { useState } from "react";
import data from "../../data/signin.json"
import { signIn } from "../api/postApi/postApi";
import Link from 'next/link'
export default function Signin() {
    const signin = data;

 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


       const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await signIn({email, password});
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="bg-black flex justify-center min-h-screen items-center">
             <div>
                <h1 className="font-bold text-4xl text-neutral-200 mt-10">
                    {signin.signin.title}
                </h1>

                <form className="flex flex-col space-y-4 max-w-md mx-auto mt-10">
                    <h1 className="text-neutral-200 font-bold">{signin.signin.email}</h1>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="border-2 w-full py-6 px-2 rounded-lg border-neutral-700 bg-neutral-900 text-neutral-100 h-10"
                        required
                    />
                    <h1 className="text-neutral-200 font-bold">{signin.signin.password}</h1>
                     <input
                        type="password"                        
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="border-2 w-full py-6 px-2 rounded-lg border-neutral-700 bg-neutral-900 text-neutral-100 h-10"
                        required
                    />

                    <button
                    onClick={handleSubmit}
                        type="submit"
                        className="py-4 px-2 text-gray-800 bg-neutral-200 rounded-lg w-full max-w-md mt-6 hover:bg-neutral-300 hover:cursor-pointer"
                    >
                        {signin.signin.submit}
                    </button>
                    <h1 className="flex justify-center items-center text-neutral-200 font-sans text-md">
                        {signin.signin.alreadyHaveAccount}
                        <Link href={"/signup"} className="hover:text-neutral-400 text-neutral-200 ml-2"> Sign up</Link>
                    </h1>
                </form>
            </div>
        </div>
    )
}
