import { useState } from 'react'
import { motion } from 'framer-motion'
import { birthdayYear } from '../data/config'

function AuthGate({ onUnlock }) {
  const [year, setYear] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (year.trim() !== birthdayYear) {
      setHasError(true)
      return
    }
    sessionStorage.setItem('reshmaBirthdayUnlocked', 'yes')
    onUnlock()
  }

  return (
    <main className="auth-gate">
      <span className="auth-moon" aria-hidden="true" />
      <motion.section className="auth-panel" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
        <p className="eyebrow">A small birthday secret</p>
        <h1>A little surprise <em>for you</em></h1>
        <p className="auth-description">Enter Reshma’s birth year to step inside.</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="birthday-year">Birthday year</label>
          <input id="birthday-year" name="birthday-year" type="password" inputMode="numeric" autoComplete="off" pattern="[0-9]{4}" maxLength={4} value={year} onChange={(event) => { setYear(event.target.value); setHasError(false) }} aria-describedby={hasError ? 'auth-error' : undefined} aria-invalid={hasError} autoFocus />
          {hasError && <p className="auth-error" id="auth-error" role="alert">That year didn’t open the door. Try again.</p>}
          <button className="button button-primary" type="submit">Open your surprise <span aria-hidden="true">✦</span></button>
        </form>
        <p className="auth-hint">A hint: the year she was born.</p>
      </motion.section>
    </main>
  )
}

export default AuthGate