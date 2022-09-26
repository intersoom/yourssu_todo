import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container flex items-center justify-end h-10 mx-auto space-x-5">
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </div>
  )
}
export default Header
