import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, X } from 'lucide-react'

const sparkles = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 47 + 11) % 100}%`,
  top: `${(index * 67 + 17) % 100}%`,
  delay: `${(index % 9) * -0.4}s`,
  size: `${index % 3 === 0 ? 3 : 2}px`,
}))

function GiftReveal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <motion.div
      className="gift-reveal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gift-reveal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="gift-reveal-glow" aria-hidden="true" />
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="gift-reveal-star"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            '--star-delay': sparkle.delay,
            '--star-size': sparkle.size,
          }}
          aria-hidden="true"
        />
      ))}
      <button className="lightbox-close" type="button" aria-label="Close birthday message" onClick={onClose}>
        <X size={19} />
      </button>
      <motion.article
        className="gift-reveal-card"
        initial={{ opacity: 0, y: 24, scale: .97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: .7, ease: 'easeOut' }}
      >
        <span className="gift-reveal-ornament" aria-hidden="true">✦</span>
        <p className="eyebrow">A little surprise, made with love</p>
        <div className="gift-reveal-heart" aria-hidden="true"><Heart size={25} fill="currentColor" /></div>
        <h2 id="gift-reveal-title">Happiest Birthday, <em>Reshma!</em></h2>
        <p className="gift-reveal-message">Love you so much</p>
        <span className="gift-reveal-divider" aria-hidden="true">✧　♡　✧</span>
        <button className="button button-primary gift-reveal-close" type="button" onClick={onClose}>Keep this love <span aria-hidden="true">♡</span></button>
      </motion.article>
    </motion.div>
  )
}

export default GiftReveal
