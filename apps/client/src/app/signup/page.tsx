"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import data from "../../data/signup.json"
import { createUser } from "../api/postApi/postApi"
import Link from 'next/link'

export default function SignUp() {
    const signup = data;
    const router = useRouter()

    const [email, setEmail] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await createUser({ email })
            
            router.push(`/verifyotp?email=${encodeURIComponent(email)}`)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen w-full items-center flex justify-center bg-black">
            <div>
                <h1 className="font-bold text-4xl text-neutral-200 mt-10">
                    {signup.signup.title}
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto mt-10">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="border-2 w-full py-6 px-2 rounded-lg border-neutral-700 bg-neutral-900 text-neutral-100 h-10"
                        required
                    />

                    <button
                        type="submit"
                        className="py-4 px-2 text-gray-800 bg-neutral-200 rounded-lg w-full max-w-md mt-6 hover:bg-neutral-300 hover:cursor-pointer"
                    >
                        Send OTP
                    </button>
                    <h1 className="flex justify-center items-center text-neutral-200 font-sans text-md ">
                        {signup.signup.alreadyHaveAccount}
                        <Link href={"/signin"} className="hover:text-neutral-400 text-neutral-200 ml-2"> Sign in</Link>
                    </h1>
                </form>
            </div>
        </div>
    )
}
