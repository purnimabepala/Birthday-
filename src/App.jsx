import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Timeline from './components/Timeline'
import BirthdayCake from './components/BirthdayCake'
import GiftBox from './components/GiftBox'
import BirthdayGreeting from './components/BirthdayGreeting'
import Fireworks from './components/Fireworks'
import GiftReveal from './components/GiftReveal'
import Footer from './components/Footer'
import AuthGate from './components/AuthGate'
import './App.css'
import './theme.css'

function App() {
  const [celebrationOpen, setCelebrationOpen] = useState(false)
  const [giftOpen, setGiftOpen] = useState(false)
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('reshmaBirthdayUnlocked') === 'yes')

  if (!unlocked) return <AuthGate onUnlock={() => setUnlocked(true)} />

  return (
    <>
      <Hero onCelebrate={() => setCelebrationOpen(true)} />
        <div className="love-sticker-layer" aria-hidden="true">
          <Heart className="love-sticker love-sticker-one" size={30} fill="currentColor" />
          <Heart className="love-sticker love-sticker-two" size={22} fill="currentColor" />
          <Heart className="love-sticker love-sticker-three" size={26} fill="currentColor" />
          <Heart className="love-sticker love-sticker-four" size={18} fill="currentColor" />
        </div>
      <main>
        <Countdown />
        <Timeline />
        <BirthdayGreeting />
        <section className="birthday-playground section-wrap" id="surprises">
          <div className="section-heading">
            <p className="eyebrow">Make a little magic</p>
            <h2>Birthday <em>wishes</em></h2>
          </div>
          <div className="birthday-grid">
            <BirthdayCake />
            <GiftBox open={giftOpen} onToggle={setGiftOpen} />
          </div>
        </section>
      </main>
      <Footer />
      <AnimatePresence>
        {celebrationOpen && <Fireworks onClose={() => setCelebrationOpen(false)} />}
        {giftOpen && <GiftReveal onClose={() => setGiftOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

export default App
