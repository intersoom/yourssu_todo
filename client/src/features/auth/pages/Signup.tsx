import React from 'react'
import useSignup from '../hooks/useSignup'

const Signup = () => {
  const [emailValue, , emailOnChangeValue, passwordValue, , passwordOnChangeValue, submitOnchange] =
    useSignup()
  return (
    <div className="container flex flex-col items-center justify-center h-screen mx-auto">
      <div className="flex-initial w-1/2 mb-5 text-xl text-center">회원가입</div>
      <div className="container flex flex-col items-center w-1/2 space-y-5 h-60">
        <input
          className="w-3/4 p-3 border rounded border-slate-300"
          type="text"
          value={emailValue}
          onChange={emailOnChangeValue}
          placeholder="이메일"
        />
        <input
          className="w-3/4 p-3 border rounded border-slate-300"
          type="password"
          value={passwordValue}
          onChange={passwordOnChangeValue}
          placeholder="비밀번호"
        />
        <button
          className="w-3/4 h-12 text-white rounded bg-slate-600"
          type="submit"
          onClick={submitOnchange}
        >
          회원가입
        </button>
      </div>
    </div>
  )
}

export default Signup
