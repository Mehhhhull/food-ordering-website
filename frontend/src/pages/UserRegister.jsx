import React, { useState } from 'react'
import '../styles/auth.css'

const UserRegister = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setMessage(null)
    if (!fullName || !email || !password) {
      setMessage('Please fill all fields')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Registration failed')
      setMessage(data.message || 'Registered successfully')
      setFullName('')
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
          <div className="auth-title">Create your account</div>
          <div className="auth-sub">Sign up as a user to order delicious meals.</div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <label>Full name</label>
            <input
              type="text"
              placeholder="Your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="input">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create account'}
          </button>

          {message && (
            <div style={{ textAlign: 'center', marginTop: 12 }}>{message}</div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
            <button className="tertiary" type="button">Have an account? Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserRegister
