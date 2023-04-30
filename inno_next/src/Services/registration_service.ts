import { axhttp } from "@/src/Services"
import { formValidator } from "../Components/registrationForm/validator"
import { toast } from "react-toastify"
import Cookies from "js-cookie"

export const fileUpload = async (e: React.ChangeEvent<HTMLInputElement>): Promise<any> => {
  const { id, files } = e.target

  if (files) {
    const formData = new FormData()
    formData.append('files', files[0])
    formData.append('upload_preset', 'innopsi')

    const uploadPromise =  new Promise((resolve, reject) => {
      axhttp
        .post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res:any) => {
          resolve({
            id,
            value: res[0].url
          })
        })
        .catch((err) => {
          reject(err)
        })
    })
    toast.promise(uploadPromise, {
      pending: 'Uploading...',
      success: 'Uploaded',
      error: 'Upload failed',
    })

    return uploadPromise;

  }

}


export const submitGenericUser = async (data: any): Promise<any> => {

  const {userForm, genericForm} = data

  if(!formValidator(userForm)) {
    return
  }

  if(!formValidator(genericForm)) {
    return
  }

  try {
    console.log(genericForm)

  const genericUser =  await axhttp.post('/genericusers', {
    data : genericForm
  })

  if(!genericUser) {
    toast.error('Something went wrong')
    return
  }

  return new Promise((resolve, reject) => {
    userForm.genericuser = genericUser.data.id
    userForm.username = userForm.email
    userForm.role = 1
    axhttp
      .post('/auth/local/register', userForm)
      .then((res:any) => {
        Cookies.set('token', res.jwt)
        Cookies.set('user', res.user)
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
  catch(err) {
    console.log(err)
    toast.error('Something went wrong')
    return
  }
 
}

export const submitOrganisationForm = async (data: any): Promise<any> => {

  const {userForm, organisationForm} = data

  if(!formValidator(userForm)) {
    return
  }

  if(!formValidator(organisationForm)) {
    return
  }

  try {

  const organisation =  await axhttp.post('/organisations', {
    data : organisationForm
  })

  if(!organisation) {
    toast.error('Something went wrong')
    return
  }

  return new Promise((resolve, reject) => {
    userForm.organisation = organisation.data.id
    userForm.username = userForm.email
    userForm.role = 2
    axhttp
      .post('/auth/local/register', userForm)
      .then((res:any) => {
        Cookies.set('token', res.jwt)
        Cookies.set('user', res.user)
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })

}
  catch(err) {
    toast.error('Something went wrong')
    return
  }
  
}


export const login = async (data: any): Promise<any> => {

  const {email, password} = data

  if(!email || !password) {
    toast.error('Email and Password are required')
    return
  }

  return new Promise((resolve, reject) => {
    axhttp
      .post('/auth/local', {
        identifier: email,
        password: password,
      })
      .then((res:any) => {
        Cookies.set('token', res.jwt)
        Cookies.set('user', JSON.stringify(res.user))
        axhttp.defaults.headers.common['Authorization'] = `Bearer ${res.jwt}`
      })
      .catch((err) => {
        console.log(err)
        toast.error('Invalid Credentials')
      })
  })
}

