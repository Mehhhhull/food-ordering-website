import React, { useState } from 'react'
import '../styles/auth.css'

const FoodPartnerRegister = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setMessage(null)
    if (!name || !email || !password) {
      setMessage('Please fill all fields')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/foodpartner/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Registration failed')
      setMessage(data.message || 'Registered successfully')
      setName('')
      setEmail('')
      setPassword('')
    } catch (err) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-title">Partner with us</div>
          <div className="auth-sub">Register your restaurant to start receiving orders.</div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <label>Restaurant Name</label>
            <input
              type="text"
              placeholder="Name of your restaurant"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input">
            <label>Contact Email</label>
            <input
              type="email"
              placeholder="owner@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register restaurant'}
          </button>

          {message && (
            <div style={{ textAlign: 'center', marginTop: 12 }}>{message}</div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
            <button className="tertiary" type="button">Already partnered? Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
