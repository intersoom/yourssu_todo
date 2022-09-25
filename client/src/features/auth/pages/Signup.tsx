import React from 'react'
import useSignup from '../hooks/useSignup'

const Signup = () => {
  const [emailValue, , emailOnChangeValue, passwordValue, , passwordOnChangeValue, submitOnchange] =
    useSignup()
  return (
    <div>
      <div>회원가입</div>
      <form>
        <input type="text" value={emailValue} onChange={emailOnChangeValue} placeholder="이메일" />
        <input
          type="password"
          value={passwordValue}
          onChange={passwordOnChangeValue}
          placeholder="비밀번호"
        />
        <button type="submit" onClick={submitOnchange}>
          회원가입
        </button>
      </form>
    </div>
  )
}

export default Signup
