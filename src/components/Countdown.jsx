import { useEffect, useState } from 'react'
import { birthdayDate } from '../data/config'

function getTimeLeft() {
  const difference = new Date(birthdayDate).getTime() - Date.now()
  if (difference <= 0) return null
  return { Days: Math.floor(difference / 86400000), Hours: Math.floor((difference / 3600000) % 24), Minutes: Math.floor((difference / 60000) % 60), Seconds: Math.floor((difference / 1000) % 60) }
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => window.clearInterval(timer)
  }, [])
  const dateLabel = new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(birthdayDate))
  return <section className="countdown-section section-wrap" id="countdown" aria-live="polite"><div className="section-heading"><p className="eyebrow">The stars are counting down</p><h2>Until your <em>special day</em></h2></div>{timeLeft ? <div className="countdown-grid">{Object.entries(timeLeft).map(([label, value]) => <div className="countdown-item" key={label}><span className="countdown-number">{String(value).padStart(2, '0')}</span><span className="countdown-label">{label}</span></div>)}</div> : <p className="countdown-message">It’s your day, Reshma. Let the celebrating begin! ✨</p>}<p className="countdown-date">A little countdown to {dateLabel}</p></section>
}

export default Countdown