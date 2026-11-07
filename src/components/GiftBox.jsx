import { motion } from 'framer-motion'
import { giftMessage } from '../data/config'

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  x: `${Math.cos((index / 18) * Math.PI * 2) * 92}px`,
  y: `${Math.sin((index / 18) * Math.PI * 2) * 86}px`,
  delay: `${(index % 6) * 0.035}s`,
  color: ['#f4d394', '#d7bcff', '#efaac4', '#b8d7ce'][index % 4],
}))

function GiftBox({ open, onToggle }) {
  const toggleGift = () => {
    const willOpen = !open
    onToggle(willOpen)
  }

  return (
    <div className="birthday-panel gift-panel">
      <div className="birthday-panel-header"><h3>A little something for you</h3><p>There is no wrapping paper for how much you mean to me.</p></div>
      <div className="gift-scene">
        {open && particles.map((particle) => <span key={particle.id} className="gift-confetti" style={{ '--confetti-x': particle.x, '--confetti-y': particle.y, '--confetti-delay': particle.delay, '--confetti-color': particle.color }} />)}
        {open && <><span className="gift-heart gift-heart-one" aria-hidden="true">♡</span><span className="gift-heart gift-heart-two" aria-hidden="true">♡</span><span className="gift-heart gift-heart-three" aria-hidden="true">♡</span></>}
        <span className="gift-spark gift-spark-one" aria-hidden="true">✦</span><span className="gift-spark gift-spark-two" aria-hidden="true">✧</span>
        <motion.p className={`gift-message${open ? ' is-visible' : ''}`} animate={open ? { opacity: 1, y: -34 } : { opacity: 0, y: 10 }}>{giftMessage}</motion.p>
        <button className={`gift-button${open ? ' is-open' : ''}`} type="button" onClick={toggleGift} aria-expanded={open} aria-label={open ? 'Close the birthday gift' : 'Open the birthday gift'}><span className="gift-bow" /><span className="gift-lid" /><span className="gift-box" /></button>
      </div>
      <div className="cake-buttons"><button className="button button-primary" type="button" onClick={toggleGift}>{open ? 'Close your gift' : 'Open your gift'}</button></div>
    </div>
  )
}

export default GiftBox