import React from 'react'
import useLogin from '../hooks/useLogin'

const Login = () => {
  const [emailValue, , emailOnChangeValue, passwordValue, , passwordOnChangeValue, submitOnchange] =
    useLogin()
  return (
    <div className="flex">
      <div className="">로그인</div>
      <input value={emailValue} onChange={emailOnChangeValue} placeholder="이메일" />
      <input
        type="password"
        value={passwordValue}
        onChange={passwordOnChangeValue}
        placeholder="비밀번호"
      />
      <button type="submit" onClick={submitOnchange}>
        로그인
      </button>
    </div>
  )
}

export default Login
