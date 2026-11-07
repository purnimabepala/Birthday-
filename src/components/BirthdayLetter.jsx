import { useEffect, useState } from 'react'
import { birthdayLetter } from '../data/config'

function BirthdayLetter() {
  const [open, setOpen] = useState(false)
  const [typed, setTyped] = useState('')
  useEffect(() => {
    if (!open || typed.length >= birthdayLetter.length) return undefined
    const timer = window.setTimeout(() => setTyped(birthdayLetter.slice(0, typed.length + 1)), 18)
    return () => window.clearTimeout(timer)
  }, [open, typed])
  const toggleLetter = () => { if (!open) setTyped(''); setOpen(!open) }
  return <section className="letter-section section-wrap" id="letter"><div className="letter-wrap"><button className={`envelope-button${open ? ' is-open' : ''}`} type="button" onClick={toggleLetter} aria-expanded={open} aria-label={open ? 'Close the birthday letter' : 'Open the birthday letter'}><span className="envelope-flap" /><span className="envelope-seal">✦</span></button><div className="letter-copy"><p className="eyebrow">A note from your sibling</p><h2>A letter, just for you</h2><p>Some words deserve their own little moment.</p>{open ? <><div className="letter-message" aria-live="polite">{typed}</div><p className="letter-signoff">All my love, always</p></> : <button className="button button-quiet" type="button" onClick={toggleLetter}>Open your letter <span aria-hidden="true">↗</span></button>}</div></div></section>
}

export default BirthdayLetter