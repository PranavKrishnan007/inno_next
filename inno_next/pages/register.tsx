import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

export default function Register() {
    const [loginSection, setLoginSection] = useState(0);
    const [orgOrUser, setOrgOrUser] = useState(0);

    const setUser = ({value}: { value: number }) => {
        setOrgOrUser(value);
        setLoginSection(loginSection+1);
    };

    return (
        <div className="flex flex-row h-screen bg-sky-400/20 overflow-hidden">
            <div className="w-8/12 text-white">
                INNOPSI LOGO SECTION - WILL BE ADDED BY TOMORROW - DO NOT HAVE ACCESS TO THE IMAGES
            </div>
            <div className="flex flex-col w-4/12 bg-white rounded-3xl shadow-2xl p-12">
                <h1 className="text-5xl py-24 font-bold w-full text-blue-950 text-center">Sign Up</h1>
                {loginSection === 0 && (
                    <div className="flex flex-col gap-12">
                        <button className="flex flex-row group hover:bg-orange-400 border-2
                         border-orange-500 hover:text-white w-full px-4 py-6 rounded-2xl" onClick={() => setUser({value: 0})}>
                            <img src="/assets/user%202.svg" alt="user" className="md:ml-6 w-14 h-14 group-hover:invert my-auto"/>
                            <div className="flex flex-col ml-4">
                                <div className="text-left text-xl w-full font-bold">
                                    Sign Up as User
                                </div>
                                <div className="text-left text-light font-normal w-full">
                                    sign up as a single user
                                </div>
                            </div>
                        </button>
                        <button className="flex flex-row group hover:bg-orange-400 border-2 border-orange-500 hover:text-white w-full p-4 py-6 rounded-2xl" onClick={() => setUser({value: 1})}>
                            <img src="/assets/users.svg" alt="user" className="md:ml-6 w-14 h-14 group-hover:invert my-auto"/>
                            <div className="flex flex-col ml-4">
                                <div className="text-left text-xl w-full font-bold">
                                    Sign Up as Organisation
                                </div>
                                <div className="text-left text-light font-normal w-full">
                                    sign up as a representative of an organisation
                                </div>
                            </div>
                        </button>
                    </div>
                )}
                {/* section for organisation login. */}
                {(loginSection === 1 && orgOrUser === 1) && (
                    <div className="flex flex-col gap-10">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Organisation Name
                            </label>
                            <input className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-none placeholder:text-lg" id="username" type="text" placeholder="Organisation Name"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Logo
                            </label>
                            <input className="block p-4 w-full text-sm text-gray-900 shadow border border-gray-300 rounded-lg cursor-pointer" aria-describedby="file_input_help" id="file_input" type="file"/>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Phone Number
                            </label>
                            <input type="number" id="phone" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500-500 block w-full p-4 shadow" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxLength={10} required />
                        </div>
                    </div>
                )}
                {(loginSection === 2 && orgOrUser === 1) && (
                    <div className="flex flex-col gap-10">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-none placeholder:text-lg" id="email" type="email" placeholder="innopsi@gmail.com"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Location
                            </label>
                            <input className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-none placeholder:text-lg" id="location" type="text" placeholder="Delhi"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-none placeholder:text-lg" id="username" type="password" placeholder="j&_hhu441"/>
                        </div>
                    </div>
                )}
                {(loginSection === 3 && orgOrUser === 1) && (
                    <div className="flex flex-col gap-10">
                        <div>
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Letter of Consent
                            </label>
                            <input className="block p-4 w-full text-sm text-gray-900 shadow border border-gray-300 rounded-lg cursor-pointer" aria-describedby="file_input_help" id="file_input" type="file"/>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Upload PDF for validation.</p>
                        </div>
                        <div className="mb-6">
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
                {/* section for user registry. */}
                {(loginSection === 1 && orgOrUser === 0) && (
                    <div className="flex flex-col gap-10">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                First Name
                            </label>
                            <input className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-none placeholder:text-lg" id="firstname" type="text" placeholder="First Name"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Last Name
                            </label>
                            <input className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-none placeholder:text-lg" id="lastname" type="text" placeholder="Last Name"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Phone Number
                            </label>
                            <input type="number" id="phone" className="border border-gray-300 text-gray-900 placeholder:text-lg rounded-lg focus:border-orange-500 text-lg focus:border-orange-500 w-full p-4 shadow" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxLength={10} required />
                        </div>
                    </div>
                )}
                {(loginSection === 2 && orgOrUser === 0) && (
                    <div className="flex flex-col gap-10">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-none placeholder:text-lg" id="email" type="email" placeholder="innopsi@gmail.com"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Location
                            </label>
                            <input className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-none placeholder:text-lg" id="location" type="text" placeholder="Delhi"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-none placeholder:text-lg" id="username" type="password" placeholder="j&_hhu441"/>
                        </div>
                    </div>
                )}
                {(loginSection === 3 && orgOrUser === 0) && (
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <div className="mb-8">
                                <label htmlFor="large" className="block text-gray-700 text-2xl font-medium mb-2 ">Gender</label>
                                <select id="large" className="w-full text-lg p-6 text-gray-700 outline-none shadow rounded-xl focus:ring-orange-500 focus:border-orange-500" placeholder="gender">
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="T">Transgender</option>
                                    <option value="NB">Non-binary/Non-conforming</option>
                                    <option value="NP">Prefer not to respond</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-12">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Date of Birth
                            </label>
                            <Datetime closeOnClickOutside={true} dateFormat="DD-MM-YY" timeFormat={false} value={new Date().toDateString()} className="text-lg shadow appearance-none border rounded-xl w-full p-4 text-gray-700 outline-none leading-tight focus:outline-orange-500 focus:shadow-none placeholder:text-lg"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Graduation Documentation
                            </label>
                            <input className="block p-4 w-full text-sm text-gray-900 shadow border border-gray-300 rounded-lg cursor-pointer" aria-describedby="file_input_help" id="file_input" type="file"/>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Upload PDF for validation.</p>
                        </div>
                    </div>
                )}
                {(loginSection === 4 && orgOrUser === 0) && (
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <div className="mb-8">
                                <label htmlFor="large" className="block text-gray-700 text-2xl font-medium mb-2 ">Profession</label>
                                <select id="large" className="w-full p-6 text-lg text-gray-700 outline-none shadow rounded-xl focus:ring-orange-500 focus:border-orange-500" placeholder="gender">
                                    <option value="M">Student</option>
                                    <option value="F">Teacher</option>
                                    <option value="T">Professional</option>
                                    <option value="NB">Business Owner</option>
                                    <option value="NP">Explorer</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-8">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Avatar
                            </label>
                            <input className="block p-4 w-full text-sm text-gray-900 shadow border border-gray-300 rounded-lg cursor-pointer" aria-describedby="file_input_help" id="file_input" type="file"/>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-2xl font-medium mb-2">
                                Area of Interest
                            </label>
                            <input className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-none placeholder:text-lg" id="username" type="text" placeholder="Organisation Name"/>
                        </div>
                    </div>
                )}


                {/* login button portion. */}
                {(loginSection <= 3 && orgOrUser === 1) || (loginSection <= 4 && orgOrUser === 0) ? (
                    <div>
                        {loginSection === 0 ? '' :
                            <div className="w-full flex items-center justify-center">
                                <button className="bg-transparent max-w-min mt-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => setLoginSection(loginSection + 1)}>
                                    Continue
                                </button>
                            </div>
                        }
                    </div>
                ) : (
                    <div className="items-center justify-center">
                        <h1 className="my-auto font-extrabold md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                            Welcome to the World of Innovation.
                        </h1>
                    </div>
                )}

            </div>
        </div>
    )
}