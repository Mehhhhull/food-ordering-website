import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const RegisterChoice = () => {
  return (
    <div className="auth-page">
      <div className="auth-card" style={{textAlign:'center'}}>
        <div className="auth-header">
          <div className="auth-title">Create an account</div>
          <div className="auth-sub">Choose how you'd like to join — as a hungry user or a food partner.</div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:18}}>
          <Link to="/user/register" className="choice-card" style={{textDecoration:'none'}}>
            <div style={{padding:18,borderRadius:10,background:'transparent',border:`1px solid var(--border)`}}>
              <div style={{fontWeight:700,marginBottom:8,color:'var(--text)'}}>Register as User</div>
              <div style={{color:'var(--muted)',fontSize:13}}>Order meals, save favourites and pay easily.</div>
            </div>
          </Link>

          <Link to="/food-partner/register" className="choice-card" style={{textDecoration:'none'}}>
            <div style={{padding:18,borderRadius:10,background:'transparent',border:`1px solid var(--border)`}}>
              <div style={{fontWeight:700,marginBottom:8,color:'var(--text)'}}>Register as Food Partner</div>
              <div style={{color:'var(--muted)',fontSize:13}}>Add your restaurant and start receiving orders.</div>
            </div>
          </Link>
        </div>

        <div style={{marginTop:16}}>
          <Link to="/user/login" className="tertiary">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterChoice
