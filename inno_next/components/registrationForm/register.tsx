import { useEffect, useState } from 'react'
import { IUser, IOrganisation, IGenericUser } from "@/utils/Interfaces"
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import { fileUpload, submitOrganisationForm, submitGenericUser } from "@/utils/Services";
import clsx from 'clsx'
import { toast } from 'react-toastify'

export default function RegisterForm() {

  const [loginSection, setLoginSection] = useState(0);
  const [orgOrUser, setOrgOrUser] = useState(0);
  const [pass, setPass] = useState('');
  const [checkPass, setCheckPass] = useState('');

  const setUser = ({ value }: { value: number }) => {
    setOrgOrUser(value)
  }

  const [userForm, setUserForm] = useState<IUser>({
    phone: '',
    email: '',
    password: '',
    location: '',
    avatar: 'default',
    username: 'default',
  })

  const [genericForm, setgenericForm] = useState<IGenericUser>({
    firstname: '',
    lastname: '',
    gender: 'MALE',
    dob: '',
    areaOfInterest: '',
    graduationDocument: 'default',
    profession: '',
  })
  const [organisationForm, setOrganisationForm] = useState<IOrganisation>({
    organisationName: '',
    letterOfIntent: '',
  })



  const handleDOBChange = (e: any) => {
    const selectedDate = e.toDate(); // get the selected date object
    const currentDate = new Date(); // get the current date object

    if (selectedDate > currentDate) { // compare selected date with current date
      toast.error('Please select a valid date of birth.'); // show error message
    } else {
      setgenericForm((prevState: any) => ({
        ...prevState,
        dob: e.format('DD/MM/YYYY'),
      }));
    }
  };

  const handleFormChange = (
    e: CustomEvent | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { id, value, type } = e instanceof CustomEvent ? e.detail : e.target;
    console.log(id, value);

    if (type === 'file') {
      fileUpload(e as React.ChangeEvent<HTMLInputElement>)
        .then((res) => {
          updateState(id, res.value);
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }

    updateState(id, value);
  };


  const updateState = (id: string, value: string) => {
    id in genericForm
      ? setgenericForm((prevState: any) => ({
        ...prevState,
        [id]: value,
      }))
      : id in organisationForm
        ? setOrganisationForm((prevState: any) => ({
          ...prevState,
          [id]: value,
        }))
        : setUserForm((prevState: any) => ({
          ...prevState,
          [id]: value,
        }))
  }

  const handleGoBack = () => {
    setLoginSection(loginSection - 1);
    setPass('');
    setCheckPass('');
  }

  useEffect(() => {
    if (pass !== checkPass) {
      console.log('Password does not match');
    }
    if (pass === checkPass && pass.length > 8) {
      const event = new CustomEvent('input', {
        detail: {
          id: 'password',
          value: pass,
          type: 'text',
        },
      });
      handleFormChange(event);
    }
  }, [pass, checkPass]);

  const nextScreen = () => {
    if (loginSection === 2 && pass.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    if (loginSection === 2 && pass !== checkPass) {
      toast.error('Password does not match');
      return;
    }

    if (loginSection === 4 && orgOrUser === 0) {
      submitGenericUser({ userForm, genericForm })
      return
    }

    if (loginSection === 3 && orgOrUser === 1) {
      submitOrganisationForm({ userForm, organisationForm })
      return
    }

    setLoginSection(loginSection + 1)
  }

  return (
    <div className='flex flex-row h-screen'>
      <div className="md:w-1/2 w-full bg-background h-full justify-center items-center flex flex-col">
        <div className="flex flex-col px-2 w-96">
          <h1 className="text-white text-5xl py-2 font-semibold">Sign Up</h1>
          <div className="pb-10 text-white text-lg font-light">First step towards a world of innovation.</div>
          <div>
            {loginSection === 0 && (
              <div className='flex flex-col gap-4'>
                <button className={clsx([
                  "border-2 border-white flex flex-row justify-center items-center text-white font-light rounded-lg hover:bg-white hover:text-hover-primary text-2xl py-4 px-8",
                  orgOrUser === 0 && "bg-white !text-hover-primary",
                ])}
                        onClick={() => setUser({ value: 0 })}
                >
                  <img
                    src='/assets/user%202.svg'
                    alt='user'
                    className='w-14 p-1 invert mr-4'
                  />
                  Sign Up as User
                </button>
                <button className={clsx([
                  "border-2 border-white flex flex-row justify-center items-center text-white font-light rounded-lg hover:bg-white hover:text-hover-primary text-2xl py-4 px-8",
                  orgOrUser === 1 && "bg-white !text-hover-primary",
                ])}
                        onClick={() => setUser({ value: 1 })}
                >
                  <img
                    src='/assets/user%202.svg'
                    alt='user'
                    className='w-14 p-1 invert mr-4'
                  />
                  Sign Up as an Organisation
                </button>
              </div>
            )}

            {/* Section for Organisation registry */}
            {loginSection === 1 && orgOrUser === 1 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-white ml-1 text-lg font-light">Organisation Name</label>
                  <input id='organisationName'
                         onChange={handleFormChange}
                         type="text"
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white placeholder:text-white/50"
                         placeholder="Enter your Organisation Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-light ml-1 text-white">Avatar</label>
                  <input id='avatar'
                         type="file"
                         onChange={handleFormChange}
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white/50 placeholder:text-white/50"
                  />
                  <p
                    className='mt-1 text-sm text-gray-500 dark:text-gray-300'
                    id='file_input_help'
                  >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                  </p>
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-light ml-1 text-white">Phone Number</label>
                  <input id='phone'
                         onChange={handleFormChange}
                         type="tel"
                         maxLength={10}
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white/50 placeholder:text-white/50"
                         placeholder="Enter your phone number"
                  />
                </div>
              </div>
            )}
            {loginSection === 2 && orgOrUser === 1 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-white ml-1 text-lg font-light">Email</label>
                  <input id="email"
                         onChange={handleFormChange}
                         type="email"
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white placeholder:text-white/50"
                         placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-light ml-1 text-white">Password</label>
                  <input id='password'
                         type="password"
                         className={clsx([
                           "border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white/50 placeholder:text-white/50",
                           pass !== checkPass && "!border-red-500",
                         ])}
                         placeholder="Enter your password"
                         value={pass}
                         onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-light ml-1 text-white">Confirm Password</label>
                  <input id='password'
                         type="password"
                         className={clsx([
                           "border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white/50 placeholder:text-white/50",
                            pass !== checkPass && "!border-red-500",
                         ])}
                         placeholder="Confirm your password"
                         value={checkPass}
                         onChange={(e) => setCheckPass(e.target.value)}
                  />
                </div>
              </div>
            )}
            {loginSection === 3 && orgOrUser === 1 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-white ml-1 text-lg font-light">Letter of Consent</label>
                  <input id="letterOfIntent"
                         onChange={handleFormChange}
                         type="file"
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white placeholder:text-white/50"
                  />
                  <p
                    className='mt-1 text-sm text-gray-500 dark:text-gray-300'
                    id='file_input_help'
                  >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                  </p>
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-light ml-1 text-white">Location</label>
                  <input id="location"
                         onChange={handleFormChange}
                         type="text"
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white/50 placeholder:text-white/50"
                         placeholder="Enter your location"
                  />
                </div>
                <label className='md:w-2/3 flex justify-center items-center text-gray-500 font-bold'>
                  <input onChange={handleFormChange} className='mr-2 leading-tight' type='checkbox' />
                  <span className='text-sm text-white'>I agree to terms and conditions</span>
                </label>
              </div>
            )}


            {/* section for user registry. */}
            {loginSection === 1 && orgOrUser === 0 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-white ml-1 text-lg font-light">First Name</label>
                  <input id='firstname'
                         onChange={handleFormChange}
                         type="text"
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white placeholder:text-white/50"
                         placeholder="Enter your First Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white ml-1 text-lg font-light">Last Name</label>
                  <input id='lastname'
                         type="text"
                         onChange={handleFormChange}
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white placeholder:text-white/50"
                         placeholder="Enter your Last Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-light ml-1 text-white">Phone Number</label>
                  <input id='phone'
                         type="tel"
                         onChange={handleFormChange}
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white/50 placeholder:text-white/50"
                         placeholder="Enter your phone number"
                  />
                </div>
              </div>
            )}
            {loginSection === 2 && orgOrUser === 0 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-white ml-1 text-lg font-light">Email</label>
                  <input id='email'
                         type="text"
                         onChange={handleFormChange}
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white placeholder:text-white/50"
                         placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-light ml-1 text-white">Password</label>
                  <input type="password"
                         className={clsx([
                           "border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white/50 placeholder:text-white/50",
                           pass !== checkPass && "!border-red-500",
                         ])}
                         placeholder="Enter your password"
                         value={pass}
                         onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-light ml-1 text-white">Confirm Password</label>
                  <input type="password"
                         className={clsx([
                           "border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white/50 placeholder:text-white/50",
                           pass !== checkPass && "!border-red-500",
                         ])}
                         placeholder="Confirm your password"
                         value={checkPass}
                         onChange={(e) => setCheckPass(e.target.value)}
                  />
                </div>
              </div>
            )}
            {loginSection === 3 && orgOrUser === 0 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-lg font-light ml-1 text-white">Location</label>
                  <input id='location'
                         onChange={handleFormChange}
                         type="text"
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white/50 placeholder:text-white/50"
                         placeholder="Enter your location"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor='gender'
                    className='block text-white text-lg font-medium'
                    id='gender'
                  >
                    Gender
                  </label>
                  <select
                    onChange={handleFormChange}
                    id='gender'
                    className="text-lg w-full outline outline-1 rounded outline-gray-300 p-2"
                    placeholder='gender'
                  >
                    <option value='MALE'>Male</option>
                    <option value='FEMALE'>Female</option>
                    <option value='TRANSGENDER'>Transgender</option>
                    <option value='NONBINARY'>Non-binary/Non-conforming</option>
                    <option value='NORESPONSE'>Prefer not to respond</option>
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label className='block text-white text-lg font-medium'>Date of Birth</label>
                  <Datetime
                    closeOnClickOutside={true}
                    onChange={handleDOBChange}
                    dateFormat='DD-MM-YY'
                    timeFormat={false}
                    value={new Date().toDateString()}
                    className="group text-lg outline outline-1 rounded outline-gray-300 p-2 mb-4"
                  />
                </div>
              </div>
            )}
            {loginSection === 4 && orgOrUser === 0 && (
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor='profession'
                    className='block text-white text-lg font-medium mb-2'
                  >
                    Profession
                  </label>
                  <select
                    onChange={handleFormChange}
                    id='profession'
                    className="text-lg w-full outline outline-1 rounded outline-gray-300 p-3 mb-4"
                    placeholder='profession'
                  >
                    <option value='Student'>Student</option>
                    <option value='Teacher'>Teacher</option>
                    <option value='Professional'>Professional</option>
                    <option value='BussinessOwner'>Business Owner</option>
                    <option value='Explorer'>Explorer</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-light ml-1 text-white">Avatar</label>
                  <input id='avatar'
                         onChange={handleFormChange}
                         type="file"
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white/50 placeholder:text-white/50"
                  />
                  <p
                    className='mt-1 text-sm text-gray-500 dark:text-gray-300'
                    id='file_input_help'
                  >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                  </p>
                </div>
                <div className="flex flex-col">
                  <label className="text-white ml-1 text-lg font-light">Area of interest</label>
                  <input id='areaOfInterest'
                         onChange={handleFormChange}
                         type="text"
                         className="border-2 border-white rounded-lg bg-background p-2 max-w-xl text-white placeholder:text-white/50"
                         placeholder="Enter your area of interest"
                  />
                </div>
                <label className='md:w-2/3 flex justify-center items-center text-gray-500 font-bold'>
                  <input onChange={handleFormChange} className='mr-2 leading-tight' type='checkbox' />
                  <span className='text-sm text-white'>I agree to terms and conditions</span>
                </label>
              </div>
            )}
          </div>
          <div className="flex flex-row gap-4 justify-center py-5 w-full">
            {loginSection > 0 && (
              <button className="bg-hover-primary text-lg font-medium text-white w-full rounded-lg p-2"
                      onClick={() => handleGoBack()}
              >
                Go back
              </button>
            )}
            {orgOrUser === 0 && (
              <button className="bg-hover-primary text-lg font-medium text-white w-full rounded-lg p-2"
                      onClick={() => nextScreen()}
              >
                {loginSection === 4 ? 'Sign Up' : 'Continue'}
              </button>
            )}
            {orgOrUser === 1 && (
              <button className="bg-hover-primary text-lg font-medium text-white w-full rounded-lg p-2"
                      onClick={() => nextScreen()}
              >
                {loginSection === 3 ? 'Sign Up' : 'Continue'}
              </button>
            )}
          </div>
          <div className="flex justify-center text-white text-lg max-w-xl font-light whitespace-nowrap">Already a member ?<a href="/register" className="ml-1 text-hover-primary">Log in</a></div>
        </div>
      </div>
    <div className="w-1/2 hidden md:block bg-white h-full">
      <div className="flex items-center justify-center flex-col gap-10 h-full ">
        <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-32 w-full object-contain place-items-center"/>
        <img src="/assets/g20c20.png" alt="c20_logo" className="h-14 w-full object-contain"/>
      </div>
    </div>
  </div>
  )
}
