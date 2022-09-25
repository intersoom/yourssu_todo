import { useMutation } from 'react-query'
import axios, { AxiosError } from 'axios'
import { useCallback } from 'react'
import useForm from './useForm'
import emailValidate from '../utils/emailValidate'
import passwordValitate from '../utils/passwordValidate'

type SignupResponse = {
  message: string
  token: string
}

const signupAPI = async ({ email, password }: { email: string; password: string }) => {
  const data = await axios.post<SignupResponse>('http://localhost:8080/users/create', {
    email,
    password,
  })
  return data.data
}

const useSignup = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.FormEvent<HTMLFormElement>) => void
] => {
  const [emailValue, setEmailValue, emailOnChangeValue, , emailError] = useForm('', emailValidate)
  const [passwordValue, setPasswordValue, passwordOnChangeValue, , passwordError] = useForm(
    '',
    passwordValitate
  )

  const loginMutation = useMutation(signupAPI, {
    onMutate: (variable) => {
      console.log('onMutate', variable)
      // variable : {loginId: 'xxx', password; 'xxx'}
    },
    onSuccess: (data, variables) => {
      console.log('success', data, variables)
    },
    onError: (error: AxiosError) => {
      // console.log(error.response.data.details)
      alert(error.response.data.details)
    },
    onSettled: () => {
      setEmailValue('')
      setPasswordValue('')
    },
  })

  const submitOnchange = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (emailError && passwordError) {
        console.log('error')
        return
      }
      loginMutation.mutate({ email: emailValue, password: passwordValue })
    },
    [emailValue, passwordValue, emailError, passwordError]
  )

  return [
    emailValue,
    setEmailValue,
    emailOnChangeValue,
    passwordValue,
    setPasswordValue,
    passwordOnChangeValue,
    submitOnchange,
  ]
}

export default useSignup
