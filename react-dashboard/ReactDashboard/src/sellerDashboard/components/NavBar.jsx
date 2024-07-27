import React from 'react'

const NavBar = ({loginHandler,registerHandler}) => {
  return (
    <div className="navsection">
        <div className="company">
              <span><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '50px'}} alt="logo" /></span> Seller DashBoard
        </div>
        <div className="userAuth">
            <span onClick={loginHandler}>Login: /</span>
            <span onClick={registerHandler}>Register </span>
        </div>
    </div>

    

  )
}

export default NavBar