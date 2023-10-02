
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext';
import MyImage from "./Logo.png";
function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch('https://gravityunveiledapi.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      })
    })
  })

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    });
    setUserInfo(null);
  }
  const username = userInfo?.username;
  return (
    <header>
      <div className="logo-container">
        <Link to="/" className='logoLink'>
          <img src={MyImage} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <nav>
        {username && (
          <>

            <Link to="/createnewpost">Create New Post</Link>
            <Link to='/'>{username}</Link>
            {/* eslint-disable-next-line */}
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username &&
          <>
            <Link to="/login" className="link">Login</Link>
            <Link to="/register" className="link">Register</Link>
          </>
        }

      </nav>
    </header>
  )
}

export default Header