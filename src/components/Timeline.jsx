import { motion } from 'framer-motion'
import { memories } from '../data/memories'

function Timeline() {
  if (memories.length === 0) return null

  return (
    <section className="timeline-section section-wrap" id="journey">
      <div className="section-heading">
        <p className="eyebrow">The best stories are ours</p>
        <h2>Our Beautiful <em>Journey</em></h2>
      </div>
      <div className="timeline">
        {memories.map((memory, index) => (
          <motion.article
            className="timeline-item"
            key={memory.id}
            initial={{ opacity: 0, x: index % 2 ? 18 : -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .45 }}
          >
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-photo">
                {memory.photo && <img src={memory.photo} alt={memory.imageAlt} loading="lazy" />}
              </div>
              <div className="timeline-copy">
                <span className="timeline-date">{memory.date}</span>
                <h3>{memory.title}</h3>
                <p>{memory.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Timeline