import { useState } from 'react'
import { motion } from 'framer-motion'

const confetti = Array.from({ length: 28 }, (_, index) => ({ id: index, x: `${Math.cos((index / 28) * Math.PI * 2) * (75 + index % 6 * 9)}px`, y: `${Math.sin((index / 28) * Math.PI * 2) * (75 + index % 6 * 9)}px`, delay: `${(index % 7) * 0.025}s`, color: ['#f4d394', '#d7bcff', '#efaac4', '#b8d7ce'][index % 4] }))

function BirthdayCake() {
  const [lit, setLit] = useState(true)
  const [wished, setWished] = useState(false)
  const blowOut = () => { setLit(false); setWished(true) }
  return <div className="birthday-panel cake-panel"><div className="birthday-panel-header"><h3>Make a birthday wish</h3><p>Take a breath, then let it go.</p></div><div className="cake-stage">{!lit && wished && confetti.map((piece) => <span key={piece.id} className="mini-confetti" style={{ '--confetti-x': piece.x, '--confetti-y': piece.y, '--confetti-delay': piece.delay, '--confetti-color': piece.color }} />)}<div className="cake"><div className="cake-layer cake-layer-bottom" /><div className="cake-layer cake-layer-middle" /><div className="cake-layer cake-layer-top" /><div className={`cake-candles${lit ? '' : ' is-out'}`}>{[0, 1, 2, 3, 4].map((candle) => <span className="candle" key={candle}><span className="flame" /></span>)}</div></div></div><div className="cake-buttons"><button className="button button-primary" type="button" onClick={blowOut} disabled={!lit}>Blow out candles</button><button className="button button-quiet" type="button" onClick={() => { setLit(true); setWished(false) }} disabled={lit}>Relight</button></div><motion.p className="cake-wish" key={wished ? 'wish' : 'empty'} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{wished ? 'May every good thing find its way to you. ✨' : 'Your wish is safe with the stars.'}</motion.p></div>
}

export default BirthdayCake