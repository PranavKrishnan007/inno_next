import { useState } from "react"

export default function Register() {
    const [loginSection, setLoginSection] = useState(0);
    const [orgOrUser, setOrgOrUser] = useState(0);
    console.log(loginSection);

    return (
        <div className="flex flex-row h-screen bg-blue-950 overflow-hidden">
            <div className="w-7/12 text-white">
                INNOPSI LOGO SECTION - WILL BE ADDED BY TOMORROW - DON'T HAVE ACCESS TO THE IMAGES
            </div>
            <div className="flex flex-col w-5/12 bg-white rounded-2xl p-20">
                <h1 className="text-5xl py-16 font-bold w-full text-center">Sign Up</h1>
                {loginSection === 0 && (
                    <div className="flex flex-col gap-10">
                        <button className="hover:bg-orange-700 border-2 border-orange-500 text-black hover:text-white font-bold w-full py-2 px-4 rounded-lg">
                            <div className="flex flex-col mx-auto justify-center items-center">
                                <div className="text-left">
                                    Sign Up as User
                                </div>
                                <div className="text-left">
                                    sign up as a single user
                                </div>
                            </div>
                        </button>
                        <button className="hover:bg-orange-700 border-2 border-orange-500 text-black hover:text-white font-bold w-full py-2 px-4 rounded-lg" onClick={() => setOrgOrUser(1)}>
                            <div className="flex flex-col mx-auto justify-center items-center">
                                <div className="text-left">
                                    Sign Up as Organisation
                                </div>
                                <div className="text-left">
                                    sign up as representative of the organisation
                                </div>user
                            </div>
                        </button>
                    </div>
                )}
                {/* section for organisation login. */}
                {(loginSection === 1 && orgOrUser === 1) && (
                    <div className="flex flex-col gap-10">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Organisation Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                    </div>

                )}
                {(loginSection === 2 && orgOrUser === 1) && (
                    <div className="flex flex-col gap-10">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Location
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                    </div>
                )}
                {(loginSection === 3 && orgOrUser === 1) && (
                    <div className="flex flex-col gap-10">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Letter of Consent</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Upload PDF.</p>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3"></div>
                            <label className="md:w-2/3 block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox" />
                                <span className="text-sm">
                                    I agree to terms and conditions
                                </span>
                            </label>
                        </div>

                    </div>
                )}
                {/* section for user login. */}
                {(loginSection === 1 && orgOrUser === 0) && (
                    <div className="flex flex-col gap-10">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                First Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Last Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                    </div>

                )}
                {(loginSection === 2 && orgOrUser === 0) && (
                    <div className="flex flex-col gap-10">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Location
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                    </div>
                )}
                {(loginSection === 3 && orgOrUser === 0) && (
                    <div className="flex flex-col gap-10">
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">male</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">female</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">something</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">unicorn</a>
                                </li>
                            </ul>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3"></div>
                            <label className="md:w-2/3 block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox" />
                                <span className="text-sm">
                                    I agree to terms and conditions
                                </span>
                            </label>
                        </div>

                    </div>
                )}

                {/* login button portion. */}
                {(loginSection <= 3 && orgOrUser === 1) || (loginSection <= 4 && orgOrUser === 0) ? (
                    <div className="w-full flex items-center justify-center">
                        <button className="bg-transparent max-w-min mt-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => setLoginSection(loginSection + 1)}>
                            Continue
                        </button>
                    </div>
                ) : "Thanks for registering!"}

            </div>
        </div>
    )
}