import { motion } from 'framer-motion'
import { Heart, X } from 'lucide-react'

const confetti = Array.from({ length: 44 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: `${(index % 11) * -0.31}s`,
  color: ['#efaac4', '#f4d394', '#d7bcff', '#b8d7ce'][index % 4],
}))

function Fireworks({ onClose }) {
  return (
    <motion.div className="celebration-overlay" role="dialog" aria-modal="true" aria-label="Birthday celebration" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {confetti.map((piece) => <span key={piece.id} className="celebration-confetti" style={{ '--confetti-left': piece.left, '--confetti-delay': piece.delay, '--confetti-color': piece.color }} />)}
      <button className="lightbox-close" type="button" aria-label="Close celebration" onClick={onClose}><X size={19} /></button>
      <span className="firework firework-one" /><span className="firework firework-two" /><span className="firework firework-three" /><span className="firework firework-four" />
      <Heart className="celebration-spark celebration-spark-one" fill="currentColor" aria-hidden="true" /><Heart className="celebration-spark celebration-spark-two" fill="currentColor" aria-hidden="true" />
      <motion.div className="celebration-copy" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16, duration: .6 }}><p className="eyebrow">A whole universe of love</p><h2>Happy Birthday <em>Reshma!</em></h2><p>May your next trip around the sun be your brightest yet.</p><button className="button button-primary" type="button" onClick={onClose}>Keep this moment <span aria-hidden="true">✦</span></button></motion.div>
    </motion.div>
  )
}

export default Fireworks