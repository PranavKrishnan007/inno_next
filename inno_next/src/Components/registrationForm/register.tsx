import {useState} from "react";
import {IUser, IOrganisation, IGenericUser} from "@/src/Interfaces"
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import { fileUpload, submitOrganisationForm, submitGenericUser } from "@/src/Services";
import {Button, TextInput} from "@mantine/core";
import Link from "next/link";

export default function RegisterForm() {

    const [loginSection, setLoginSection] = useState(0)
    const [orgOrUser, setOrgOrUser] = useState(0)
  
    const setUser = ({ value }: { value: number }) => {
      setOrgOrUser(value)
      setLoginSection(loginSection + 1)
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
      setgenericForm((prevState: any) => ({
        ...prevState,
        dob: e.format('DD/MM/YYYY'),
      }))
    }
  
    const handleFormChange = (
      e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    ) => {
      const { id, value, type } = e.target
      console.log(id, value)
  
      if (type === 'file') {
        fileUpload(e as React.ChangeEvent<HTMLInputElement>)
          .then((res) => {
            updateState(id, res.value)
          })
          .catch((err) => {
            console.log(err)
          })
        return
      }
  
      updateState(id, value)
    }
  
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

    const nextScreen = () => {
      if (loginSection === 4 && orgOrUser === 0) {
        submitGenericUser({userForm, genericForm})
        return
      }
      
      if(loginSection === 3 && orgOrUser === 1) {
        submitOrganisationForm({userForm, organisationForm})
        return
      }

      setLoginSection(loginSection + 1)
    }

    return (
        <div className='flex flex-col w-4/12 bg-white shadow-2xl p-20'>
            <div className="flex flex-col">
                <img src="/assets/innopsi.png" alt="innopsi_logo" className="h-20 object-contain " />
            </div>
        <h1 className='text-4xl pt-24 pb-2 font-bold w-full text-blue-950'>Sign Up</h1>
            <div className="pb-10 text-md font-light">already have an account? <Link href='/login' className="text-blue-800 underline">Sign In</Link></div>

            {loginSection === 0 && (
          <div className='flex flex-col gap-3'>
              <Button  className="bg-orange-500 hover:bg-orange-600 mt-10" size="xl" onClick={() => setUser({ value: 0 })}>
                  <img
                      src='/assets/user%202.svg'
                      alt='user'
                      className='w-10 p-1 invert my-auto mr-4'
                  />
                  Sign Up as User
              </Button>
              <Button  className="bg-orange-500 hover:bg-orange-600 mt-2" size="xl" onClick={() => setUser({ value: 1 })}>
                  <img
                      src='/assets/users.svg'
                      alt='user'
                      className='w-10 p-1 invert my-auto mr-4'
                  />
                  Sign Up as Organisation
              </Button>
          </div>
        )}
        {/* section for organisation login. */}
        {loginSection === 1 && orgOrUser === 1 && (
          <div className='flex flex-col'>
            <div className='mb-4'>
              <label className='block text-gray-700 text-lg font-medium mb-2'>
                Organisation Name
              </label>
              <TextInput
                onChange={handleFormChange}
                id='organisationName'
                type='text'
                size='lg'
                placeholder='Organisation Name'
              />
            </div>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>Logo</label>
              <TextInput
                onChange={handleFormChange}
                aria-describedby='avatar'
                placeholder='Upload Logo'
                id='avatar'
                type='file'
                size='lg'
              />
              <p
                className='mt-1 text-sm text-gray-500 dark:text-gray-300 mb-4'
                id='file_input onChange={handleFormChange}_help'
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>Phone Number</label>
              <TextInput
                onChange={handleFormChange}
                type='number'
                id='phone'
                placeholder='123-456-7890'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                maxLength={10}
                required
                size='lg'

              />
            </div>
          </div>
        )}
        {loginSection === 2 && orgOrUser === 1 && (
          <div className='flex flex-col '>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>Email</label>
              <TextInput
                onChange={handleFormChange}
                id='email'
                type='email'
                placeholder='innopsi@gmail.com'
                size='lg'
                className="mb-4"
              />
            </div>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>Location</label>
              <TextInput
                onChange={handleFormChange}
                id='location'
                type='text'
                placeholder='Delhi'
                size='lg'
                className="mb-4"

              />
            </div>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>Password</label>
              <TextInput
                onChange={handleFormChange}
                id='password'
                type='password'
                placeholder='j&_hhu441'
                size='lg'
                className="mb-4"
              />
            </div>
          </div>
        )}
        {loginSection === 3 && orgOrUser === 1 && (
          <div className='flex flex-col '>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>
                Letter of Consent
              </label>
              <TextInput
                onChange={handleFormChange}
                size='lg'
                aria-describedby='file_input'
                id='letterOfIntent'
                type='file'
              />
              <p
                className='mt-1 text-sm text-gray-500 dark:text-gray-300 mb-4'
                id='file_input onChange={handleFormChange}_help'
              >
                Upload PDF for validation.
              </p>
            </div>
            <div className='mb-6'>
              <div className='md:w-1/3'></div>
              <label className='md:w-2/3 block text-gray-500 font-bold'>
                <input onChange={handleFormChange} className='mr-2 leading-tight' type='checkbox' />
                <span className='text-sm'>I agree to terms and conditions</span>
              </label>
            </div>
          </div>
        )}
        {/* section for user registry. */}
        {loginSection === 1 && orgOrUser === 0 && (
          <div className='flex flex-col '>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>First Name</label>
              <TextInput
                onChange={handleFormChange}
                size='lg'
                id='firstname'
                type='text'
                placeholder='First Name'
                className="mb-4"
              />
            </div>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>Last Name</label>
              <TextInput
                onChange={handleFormChange}
                size='lg'
                id='lastname'
                type='text'
                placeholder='Last Name'
                className="mb-4"
              />
            </div>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>Phone Number</label>
              <TextInput
                onChange={handleFormChange}
                type='number'
                id='phone'
                size='lg'
                placeholder='123-456-7890'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                maxLength={10}
                required
              />
            </div>
          </div>
        )}
        {loginSection === 2 && orgOrUser === 0 && (
          <div className='flex flex-col '>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>Email</label>
              <TextInput
                onChange={handleFormChange}
                size='lg'
                id='email'
                type='email'
                placeholder='innopsi@gmail.com'
                className="mb-4"
              />
            </div>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>Location</label>
              <TextInput
                onChange={handleFormChange}
                size='lg'
                id='location'
                type='text'
                placeholder='Delhi'
                className="mb-4"
              />
            </div>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>Password</label>
              <TextInput
                onChange={handleFormChange}
                size='lg'
                id='password'
                type='password'
                placeholder='j&_hhu441'

              />
            </div>
          </div>
        )}
        {loginSection === 3 && orgOrUser === 0 && (
          <div className='flex flex-col'>
            <div className=''>
              <div className=''>
                <label
                  htmlFor='gender'
                  className='block text-gray-700 text-lg font-medium mb-2 '
                  id='gender'
                >
                  Gender
                </label>
                <select
                  onChange={handleFormChange}
                  id='gender'
                  className="text-lg w-full outline outline-1 rounded outline-gray-300 p-3 mb-4"
                  placeholder='gender'
                >
                  <option value='MALE'>Male</option>
                  <option value='FEMALE'>Female</option>
                  <option value='TRANSGENDER'>Transgender</option>
                  <option value='NONBINARY'>Non-binary/Non-conforming</option>
                  <option value='NORESPONSE'>Prefer not to respond</option>
                </select>
              </div>
            </div>
            <div className=''>
              <label className='block text-gray-700 text-lg font-medium mb-2 '>Date of Birth</label>
              <Datetime
                closeOnClickOutside={true}
                onChange={handleDOBChange}
                dateFormat='DD-MM-YY'
                timeFormat={false}
                value={new Date().toDateString()}
                className="group text-lg outline outline-1 rounded outline-gray-300 p-2 mb-4"
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-lg font-medium mb-2'>
                Graduation Documentation
              </label>
              <TextInput
                onChange={handleFormChange}
                size='lg'
                aria-describedby='file_input'
                id='graduationDocument'
                type='file'
                className="mb-2 "
              />
              <p
                className='mt-1 text-sm text-gray-500 dark:text-gray-300'
                id='file_input onChange={handleFormChange}_help'
              >
                Upload PDF for validation.
              </p>
            </div>
          </div>
        )}
        {loginSection === 4 && orgOrUser === 0 && (
          <div className='flex flex-col'>
            <div>
              <div>
                <label
                  htmlFor='profession'
                  className='block text-gray-700 text-lg font-medium mb-2'
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
            </div>
            <div>
              <label className='block text-gray-700 text-lg font-medium mb-2'>Avatar</label>
              <TextInput
                onChange={handleFormChange}
                size='lg'
                aria-describedby='avatar'
                id='avatar'
                type='file'
              />
              <p
                className='mt-1 text-sm text-gray-500 dark:text-gray-300 mb-4'
                id='file_input onChange={handleFormChange}_help'
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-lg font-medium mb-2'>
                Area of Interest
              </label>
              <TextInput
                onChange={handleFormChange}
                id='areaOfInterest'
                type='text'
                placeholder='Organisation Name'
                size="lg"
              />
            </div>
          </div>
        )}

        {/* login button portion. */}
        {(loginSection <= 3 && orgOrUser === 1) || (loginSection <= 4 && orgOrUser === 0) ? (
          <div className="flex flex-row-reverse">
            {loginSection === 0 ? (
              ''
            ) : (
              <div className='w-full flex items-center justify-center'>
                <button
                  className='bg-transparent max-w-min mt-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                  onClick={nextScreen}
                >
                  Continue
                </button>
              </div>
            )}

            {loginSection >= 2 && (
              <div className='w-full flex items-center justify-center'>
                <button
                     className='bg-transparent max-w-min mt-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                     onClick={() => setLoginSection(loginSection -1 )}
                >
                Back
                </button>
              </div>
              )}  
          </div>
        ) : (
          <div className='items-center justify-center'>
            <h1 className='my-auto font-extrabold md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
              Welcome to the World of Innovation.
            </h1>
          </div>
        )}
      </div>
    )
}