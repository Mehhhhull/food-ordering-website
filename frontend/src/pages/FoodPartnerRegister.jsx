import React from 'react'
import '../styles/auth.css'

const FoodPartnerRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-title">Partner with us</div>
          <div className="auth-sub">Register your restaurant to start receiving orders.</div>
        </div>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="input">
            <label>Restaurant Name</label>
            <input type="text" placeholder="Name of your restaurant" />
          </div>

          <div className="input">
            <label>Contact Email</label>
            <input type="email" placeholder="owner@example.com" />
          </div>

          <div className="input">
            <label>Password</label>
            <input type="password" placeholder="Create a strong password" />
          </div>

          <button className="primary-btn" type="submit">Register restaurant</button>

          <div style={{display:'flex',justifyContent:'center',marginTop:12}}>
            <button className="tertiary" type="button">Already partnered? Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
