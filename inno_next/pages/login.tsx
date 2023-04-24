export default function Login() {
    return (
        <div className="flex flex-row h-screen bg-background overflow-hidden">
            <div className="w-8/12 text-white p-20">
                <img src="/assets/g20c20.png" alt="c20_logo" className="h-20 w-full object-contain place-items-center" />
            </div>
            <div className="flex flex-col w-4/12 bg-white rounded-l-3xl shadow-2xl p-12">
                <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-20 object-contain" />
                <h1 className="text-5xl pt-24 pb-14 font-bold w-full text-blue-950">Sign In</h1>
                <div className="flex flex-col gap-2">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-medium mb-2">
                            Username / Organisatiion name
                        </label>
                        <input className="shadow bg-gray-400/20 appearance-none border rounded-xl w-full p-6 text-gray-700 leading-tight text-lg focus:outline-orange-500 focus:shadow-none placeholder:text-xl" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-medium mb-2">
                            Password
                        </label>
                        <input className="shadow bg-gray-400/20 appearance-none border rounded-xl w-full p-6 text-gray-700 leading-tight focus:outline-orange-500 text-lg focus:shadow-none placeholder:text-xl" id="password" type="text" placeholder="Password" />
                    </div>
                    <div className="w-full flex items-center justify-center mt-8">
                        <button className="bg-transparent w-full hover:bg-orange-400 text-black font-semibold hover:text-white px-4 py-2 text-xl border border-blue-950 hover:border-transparent rounded">
                            login
                        </button>
                    </div>
                    {/* <div className="flex flex-col gap-2">
                        <span className="flex items-center justify-center">
                            <span className="h-px bg-gray-400 w-14"></span>
                            <span className="font-normal text-gray-500 mx-2">or login with</span>
                            <span className="h-px bg-gray-400 w-14"></span>
                        </span>
                        <div className="flex flex-row justify-center items-center gap-">
                            <a
                                href="#"
                                className="flex items-center justify-center px-4 py-2
                                transition-colors duration-300 border border-gray-800 rounded-full group
                                hover:bg-gray-800 focus:outline-none"
                            >
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="20" height="20"
                                        viewBox="0 0 48 48">
                                        <path fill="#fbc02d"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path
                                                fill="#e53935"
                                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                                        </path>
                                        <path
                                            fill="#4caf50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
                                        </path>
                                        <path
                                            fill="#1565c0"
                                            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                                        </path>
                                    </svg>
                                </span>
                                <span
                                    className="text-sm font-medium text-gray-800 group-hover:text-white">
                                    Google
                                </span>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )
}