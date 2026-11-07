import { motion } from 'framer-motion'
import { ArrowDown, Heart } from 'lucide-react'

const stars = [[8,18,2,4.2,0],[17,44,2,3.3,1],[27,21,3,4.7,2],[36,67,2,3.8,.4],[42,14,2,3.9,1.5],[56,23,2,4.4,.8],[63,54,3,3.6,2.2],[76,17,2,4.5,1.2],[84,46,2,4.1,.2],[92,24,3,3.8,2.5],[12,72,2,4.6,1.8],[88,75,2,3.4,.7],[72,81,2,4.2,2.7],[30,82,2,3.8,1.3],[50,76,2,3.6,.5],[5,54,2,4.3,1.1]]

function Hero({ onCelebrate }) {
  return (
    <header className="hero" id="top">
      {stars.map(([left, top, size, duration, delay], index) => <span key={index} className="hero-star" style={{ left: `${left}%`, top: `${top}%`, '--size': `${size}px`, '--duration': `${duration}s`, '--delay': `${delay}s` }} />)}
      <span className="hero-moon" aria-hidden="true" /><Heart className="hero-heart hero-heart-one" aria-hidden="true" fill="currentColor" /><Heart className="hero-heart hero-heart-two" aria-hidden="true" fill="currentColor" /><Heart className="hero-heart hero-heart-three" aria-hidden="true" fill="currentColor" />
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: 'easeOut' }}><p className="hero-kicker">Happy Birthday, Reshma</p><h1>The whole universe is <span>cheering for you.</span></h1><p className="hero-subtitle">Today is all yours. Let’s make it magical.</p><button className="button button-primary hero-cta" type="button" onClick={onCelebrate}><span>Let’s celebrate</span><span aria-hidden="true">✦</span></button></motion.div>
      <a className="hero-scroll" href="#countdown"><span>Keep wandering</span><ArrowDown size={15} strokeWidth={1.5} /></a>
    </header>
  )
}

export default Hero