
import data from '../../data/signup.json'
import { ISignupData } from '../interfaces/Signup'
export default function SignUp() {

    const signupdetail: ISignupData = data

    return (
        <div className="min-h-screen w-full flex  justify-center bg-black ">
            <div>
                <div>
                    hello
                    <h1 className="font-bold font-sans text-4xl text-neutral-200 mt-10"> 
                        {signupdetail.signup.title} 
                    </h1>
                </div>
                <form className="flex flex-col space-y-4 max-w-md mx-auto mt-10 ">
                    <input type="text" className="border-2 w-full py-6 px-2 rounded-lg border-neutral-700 bg-neutral-900 text-left  text-neutral-100 h-10" placeholder={signupdetail.signup.email}></input>
                </form>
                <button className='py-4 px-2 text-gray-800  bg-neutral-200 rounded-lg text-md font-lg  w-full max-w-md mt-6 hover:bg-neutral-300 hover:cursor-pointer'>
                    {signupdetail.signup.submit}
                </button>
            </div>
        </div>
    )
}
