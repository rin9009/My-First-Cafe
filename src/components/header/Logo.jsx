import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='header__top'>
      <div className="header__container">
        <h1 className='header__logo'>
          <a href="/">
            <span>My First Cafe</span>
          </a>
        </h1>

        <ul className='header__user'>
          <li>
            <Link to='/login'>로그인</Link>
          </li>
          <li>
            <Link to='/signup'>회원가입</Link>
          </li>
          <li>
            <Link to='/my'>마이페이지</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Logo
