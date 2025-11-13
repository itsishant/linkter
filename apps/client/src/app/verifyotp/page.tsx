"use client"
import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { verifyOtp } from "../api/postApi/postApi"

export default function VerifyOtp() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const email = searchParams.get("email") || ""
    const [otp, setOtp] = useState("")
    const [password, setPassword] = useState("")

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await verifyOtp({ email, otp, password })
            alert("Signup complete!")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen items-center w-full flex justify-center bg-black">
            <div>


                <h2 className="font-bold text-4xl flex justify-center items-center text-neutral-200 mt-10">Verify OTP</h2>

                <form onSubmit={handleVerify} className="flex flex-col space-y-4 max-w-md mx-auto mt-10">
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP OTP"
                        className="border-2 w-full py-6 px-2 rounded-lg border-neutral-700 bg-neutral-900 text-neutral-100 h-10"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Set your password"
                        className="border-2 w-64 py-6 px-2 rounded-lg border-neutral-700 bg-neutral-900 text-neutral-100 h-10"
                        required
                    />

                    <button
                        type="submit"
                        className="py-4 px-2 text-gray-800 bg-neutral-200 rounded-lg w-full max-w-md mt-6 hover:bg-neutral-300 hover:cursor-pointer"
                    >
                        Verify & Create Account
                    </button>
                </form>
            </div>
        </div>
    )
}
