import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

function Lightbox({ photos, selectedIndex, onChange, onClose }) {
  const photo = photos[selectedIndex]

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onChange((selectedIndex - 1 + photos.length) % photos.length)
      if (event.key === 'ArrowRight') onChange((selectedIndex + 1) % photos.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onChange, onClose, photos.length, selectedIndex])

  if (!photo) return null
  return (
    <motion.div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Photo viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <motion.div className="lightbox-panel" key={photo.id} initial={{ opacity: 0, scale: .97, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .22 }}>
        <button className="lightbox-close" type="button" aria-label="Close photo viewer" onClick={onClose}><X size={19} /></button>
        <button className="lightbox-arrow lightbox-prev" type="button" aria-label="Previous photo" onClick={() => onChange((selectedIndex - 1 + photos.length) % photos.length)}><ChevronLeft size={22} /></button>
        <div className="lightbox-visual"><img src={photo.src} alt={photo.alt || photo.caption} /></div>
        <div className="lightbox-copy">
          <p className="eyebrow">{photo.period}</p>
          <h3>{photo.caption}</h3>
          <p>{photo.description}</p>
          <p className="lightbox-count">{selectedIndex + 1} of {photos.length} memories</p>
        </div>
        <button className="lightbox-arrow lightbox-next" type="button" aria-label="Next photo" onClick={() => onChange((selectedIndex + 1) % photos.length)}><ChevronRight size={22} /></button>
      </motion.div>
    </motion.div>
  )
}

export default Lightbox