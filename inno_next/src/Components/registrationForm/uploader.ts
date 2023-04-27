import { axhttp } from "@/src/Services"
import { formValidator } from "./validator"

export const fileUpload = async (e: React.ChangeEvent<HTMLInputElement>): Promise<any> => {
  const { id, files } = e.target

  if (files) {
    const formData = new FormData()
    formData.append('files', files[0])
    formData.append('upload_preset', 'innopsi')

    return new Promise((resolve, reject) => {
      axhttp
        .post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          resolve({
            id,
            value: res.data[0].url,
          })
        })
        .catch((err) => {
          reject(err)
        })
    })
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