export default function SignUp() {
    return (
        <div className="w-full h-[350px]  flex justify-center items-center">

            <div className="w-[84%]  h-[70%] max-sm:w-[95%] flex flex-col justify-center items-center gap-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500">
                <h1 className="text-4xl max-sm:text-2xl max-sm:text-center font-semibold text-white">Sign Up For Open Day</h1>
                <p className="text-lg text-white text-center w-[70%] max-sm:w-[95%]">Join your school’s learning space! Sign up to access your classes, homework, schedules, and all important updates in one place.</p>
                    <button className="bg-white text-black px-20 py-2.5 rounded-xl font-semibold text-xl " type="submit">Submit</button>
            </div>

        </div>
    )
}