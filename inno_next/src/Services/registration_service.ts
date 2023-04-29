import { axhttp } from "@/src/Services"
import { formValidator } from "../Components/registrationForm/validator"
import { toast } from "react-toastify"

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

export const submitStudentForm = async (data: any): Promise<any> => {

  const {userForm, studentForm} = data

  if(!formValidator(userForm)) {
    return
  }

  if(!formValidator(studentForm)) {
    return
  }

  return new Promise((resolve, reject) => {

    axhttp
      .post('/register/student', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const submitOrganisationForm = async (data: any): Promise<any> => {

  const {userForm, organisationForm} = data

  if(!formValidator(userForm)) {
    return
  }

  if(!formValidator(organisationForm)) {
    return
  }

  return new Promise((resolve, reject) => {
    axhttp
      .post('/register/organisation', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}