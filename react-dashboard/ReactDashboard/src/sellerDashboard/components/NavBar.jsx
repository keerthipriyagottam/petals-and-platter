import React from 'react'

const NavBar = () => {
  return (
    <div className="navsection">
        <div className="company">
              <span><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '50px'}} alt="logo" /></span> Seller DashBoard
        </div>
        <div className="userAuth">
            <span>Login: /</span>
            <span>Register </span>
        </div>
    </div>

    

  )
}

export default NavBar