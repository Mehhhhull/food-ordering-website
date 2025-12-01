import React from 'react'
import '../styles/auth.css'

const UserRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-title">Create your account</div>
          <div className="auth-sub">Sign up as a user to order delicious meals.</div>
        </div>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="input">
            <label>Name</label>
            <input type="text" placeholder="Your full name" />
          </div>

          <div className="input">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="input">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <button className="primary-btn" type="submit">Create account</button>

          <div style={{display:'flex',justifyContent:'center',marginTop:12}}>
            <button className="tertiary" type="button">Have an account? Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserRegister
