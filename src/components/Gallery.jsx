import { useState } from 'react'
import { motion } from 'framer-motion'
import { photos } from '../data/photos'
import Lightbox from './Lightbox'
import './Gallery.css'

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  return (
    <section className="gallery-section section-wrap" id="memories">
      <div className="section-heading">
        <p className="eyebrow">The memories that made us</p>
        <h2>From childhood <em>to today</em></h2>
      </div>
      <p className="gallery-intro">Four snapshots, one shared story. Each one marks a little chapter in a lifetime of growing up together.</p>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.button
            className="memory-card"
            type="button"
            key={photo.id}
            onClick={() => setSelectedIndex(index)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .12 }}
            transition={{ duration: .35, delay: index * .04 }}
            aria-label={`Open ${photo.period} memory: ${photo.caption}`}
          >
            <span className="memory-image"><img src={photo.src} alt={photo.alt} loading="lazy" /></span>
            <span className="memory-info">
              <span className="memory-category">{photo.period}</span>
              <span className="memory-caption">{photo.caption}</span>
              <span className="memory-description">{photo.description}</span>
            </span>
          </motion.button>
        ))}
      </div>
      {selectedIndex !== null && <Lightbox photos={photos} selectedIndex={selectedIndex} onChange={setSelectedIndex} onClose={() => setSelectedIndex(null)} />}
    </section>
  )
}

export default Gallery