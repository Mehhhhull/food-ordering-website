import React from 'react'
import '../styles/auth.css'

const UserLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-title">Welcome back</div>
          <div className="auth-sub">Sign in to continue ordering delicious food.</div>
        </div>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="input">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="input">
            <label>Password</label>
            <input type="password" placeholder="Your password" />
          </div>

          <button className="primary-btn" type="submit">Sign in</button>

          <div style={{display:'flex',justifyContent:'center',marginTop:12}}>
            <button className="tertiary" type="button">Need an account? Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserLogin
