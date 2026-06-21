'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── SVG Components ─────────────────────────────── */

function RingsSVG() {
  return (
    <svg viewBox="0 0 240 240" className="rings-svg" aria-hidden="true" overflow="visible">
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="50%" stopColor="#E8D5B7" />
          <stop offset="100%" stopColor="#C9A96E" />
        </linearGradient>
        <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="30%" stopColor="#FFF8DC" />
          <stop offset="60%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#A8854A" />
        </linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.79  0 0 0 0 0.66  0 0 0 0 0.43  0 0 0 0.35 0"
          />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow)">
        <g className="diamond-gem">
          <polygon points="120,88 129,108 120,118 111,108" fill="url(#gold)" />
          <polygon points="120,88 129,108 120,108" fill="#FFF8DC" opacity="0.6" />
        </g>
        <line x1="80" y1="88" x2="160" y2="88" stroke="url(#gold)" strokeWidth="1" opacity="0.3" />
        <line
          x1="80"
          y1="162"
          x2="160"
          y2="162"
          stroke="url(#gold)"
          strokeWidth="1"
          opacity="0.3"
        />
        <g className="ring-left">
          <circle cx="103" cy="125" r="46" fill="none" stroke="url(#gold)" strokeWidth="7" />
          <circle
            cx="103"
            cy="125"
            r="46"
            fill="none"
            stroke="url(#goldShine)"
            strokeWidth="7"
            opacity="0.25"
          />
        </g>
        <g className="ring-right">
          <circle cx="137" cy="125" r="46" fill="none" stroke="url(#gold)" strokeWidth="7" />
          <circle
            cx="137"
            cy="125"
            r="46"
            fill="none"
            stroke="url(#goldShine)"
            strokeWidth="7"
            opacity="0.25"
          />
        </g>
      </g>
    </svg>
  )
}

function HeartSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

function DiamondSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M6 2l-6 7 12 13L24 9 18 2H6zm-.5 7L9 4h6l3.5 5H5.5zm6.5 9.5L4.5 11h15L12 18.5z" />
    </svg>
  )
}

function MusicNote() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="detail-icon"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="24" r="8" />
      <path d="M24 4v4M24 40v4M4 24h4M40 24h4M8.5 8.5l3 3M36.5 36.5l3 3M8.5 39.5l3-3M36.5 11.5l3-3" />
    </svg>
  )
}

function DinnerIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="detail-icon"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 44V28l-4-8v-6" />
      <path d="M16 14v-4a6 6 0 016-6h8a6 6 0 016 6v4" />
      <path d="M32 44V28l4-8v-6" />
      <path d="M12 44h24" />
      <path d="M24 14v6" />
    </svg>
  )
}

function DanceIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="detail-icon"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="10" r="4" />
      <path d="M14 20s4 6 8 6c4 0 12-6 16-2s4 10 4 10" />
      <path d="M16 30s2 10 8 14" />
      <path d="M24 24l-2 6-6 10" />
      <path d="M30 20l4 6 6 4" />
    </svg>
  )
}

function PalmIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="detail-icon"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 44V22" />
      <path d="M24 22c-6-2-12-1-16 3 4-3 10-4 16-3" />
      <path d="M24 22c6-2 12-1 16 3-4-3-10-4-16-3" />
      <path d="M24 24c-4-3-7-7-8-12 2 4 5 7 8 8" />
      <path d="M24 24c4-3 7-7 8-12-2 4-5 7-8 8" />
    </svg>
  )
}

function ShellIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="detail-icon"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 6C14 6 8 14 8 24c0 8 4 14 8 17 3 2 6 3 8 3 2 0 5-1 8-3 4-3 8-9 8-17 0-10-6-18-16-18z" />
      <path d="M24 10c-6 0-10 5-10 12 0 5 2 9 5 11 2 2 4 2 5 2" />
      <path d="M24 10c6 0 10 5 10 12 0 5-2 9-5 11-2 2-4 2-5 2" />
    </svg>
  )
}

function WaveSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
        opacity="0.07"
      />
      <path
        d="M0,80 C240,20 480,100 720,40 C960,100 1200,20 1440,80 L1440,120 L0,120 Z"
        opacity="0.05"
      />
    </svg>
  )
}

/* Petal SVG */
function PetalSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 20 28"
      className={className}
      style={style}
      fill="currentColor"
      aria-hidden="true"
      width="16"
      height="22"
    >
      <path d="M10 0C10 0 18 8 18 16C18 21.5 14.4 26 10 27C5.6 26 2 21.5 2 16C2 8 10 0 10 0Z" />
    </svg>
  )
}

function GalleryArt({ index }: { index: number }) {
  const arts = [
    <svg
      key={0}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="gallery-art"
    >
      <circle cx="100" cy="100" r="60" />
      <circle cx="100" cy="100" r="40" />
      <circle cx="100" cy="100" r="20" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
        <line
          key={a}
          x1="100"
          y1="40"
          x2={100 + 60 * Math.cos((a * Math.PI) / 180)}
          y2={100 + 60 * Math.sin((a * Math.PI) / 180)}
          transform={`rotate(${a} 100 100)`}
        />
      ))}
    </svg>,
    <svg
      key={1}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="gallery-art"
    >
      <path d="M100 30C70 50 40 60 40 100c0 50 60 70 60 70s60-20 60-70c0-40-30-50-60-70z" />
      <path
        d="M100 50C80 65 60 72 60 100c0 35 40 50 40 50s40-15 40-50c0-28-20-35-40-50z"
        opacity="0.5"
      />
    </svg>,
    <svg
      key={2}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="gallery-art"
    >
      <path d="M100 20L120 80h60l-50 40 20 60-50-35-50 35 20-60-50-40h60z" />
      <path d="M100 35L115 80h50l-40 32 15 50-40-28-40 28 15-50-40-32h50z" opacity="0.5" />
    </svg>,
    <svg
      key={3}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="gallery-art"
    >
      <path d="M20 140 Q50 80 80 110 T140 80 T180 140" />
      <path d="M20 160 Q50 100 80 130 T140 100 T180 160" opacity="0.5" />
      <path d="M20 120 Q50 60 80 90 T140 60 T180 120" opacity="0.3" />
      <circle cx="100" cy="40" r="15" />
    </svg>,
    <svg
      key={4}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="gallery-art"
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <ellipse
          key={i}
          cx={100 + 50 * Math.cos((a * Math.PI) / 180)}
          cy={100 + 50 * Math.sin((a * Math.PI) / 180)}
          rx="20"
          ry="35"
          transform={`rotate(${a} ${100 + 50 * Math.cos((a * Math.PI) / 180)} ${100 + 50 * Math.sin((a * Math.PI) / 180)})`}
        />
      ))}
      <circle cx="100" cy="100" r="15" />
      <circle cx="100" cy="100" r="8" opacity="0.5" />
    </svg>,
    <svg
      key={5}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="gallery-art"
    >
      <path d="M100 20v160" />
      <path d="M40 100h120" />
      <circle cx="100" cy="100" r="55" />
      <circle cx="100" cy="100" r="40" opacity="0.6" />
      <circle cx="100" cy="100" r="25" opacity="0.4" />
      <circle cx="100" cy="100" r="10" opacity="0.6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <circle
          key={a}
          cx={100 + 55 * Math.cos((a * Math.PI) / 180)}
          cy={100 + 55 * Math.sin((a * Math.PI) / 180)}
          r="5"
        />
      ))}
    </svg>,
  ]
  return (
    <div className="gallery-art-wrap" data-index={index}>
      {arts[index % arts.length]}
    </div>
  )
}

/* ─── Word Splitter for GSAP ─────────────────────── */
function SplitWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="split-word"
          style={{ marginRight: i < words.length - 1 ? '0.28em' : 0 }}
        >
          <span className="split-word-inner">{word}</span>
        </span>
      ))}
    </span>
  )
}

/* Marquee content duplicated for seamless loop */
const MARQUEE_ITEMS = [
  '❀ June 21, 2026',
  '✦ Coral Sands Beach Resort',
  '❀ Ceremony at 3:00 PM',
  '✦ Reception at 6:00 PM',
  '❀ Cheley & Denz',
  '✦ Black Tie Optional',
  '❀ RSVP by May 1st',
  '✦ Dancing Under the Stars',
]

/* ─── Main Component ─────────────────────────────── */
export default function WeddingPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const ringsWrapRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const floatingPetalsRef = useRef<HTMLDivElement>(null)

  const storySectionRef = useRef<HTMLElement>(null)
  const storyCardsRef = useRef<HTMLDivElement>(null)
  const storyTextRef = useRef<HTMLParagraphElement>(null)

  const venueSectionRef = useRef<HTMLElement>(null)
  const venueCardsRef = useRef<HTMLDivElement>(null)

  const detailsSectionRef = useRef<HTMLElement>(null)
  const detailCardsRef = useRef<HTMLDivElement>(null)

  const gallerySectionRef = useRef<HTMLElement>(null)
  const galleryGridRef = useRef<HTMLDivElement>(null)

  const rsvpSectionRef = useRef<HTMLElement>(null)
  const rsvpFormWrapRef = useRef<HTMLDivElement>(null)

  const decoRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const splashRef = useRef<HTMLDivElement>(null)
  const [showSplash, setShowSplash] = useState(true)

  const [galleryImages, setGalleryImages] = useState<{ url: string; caption?: string; alt?: string }[]>([])

  useEffect(() => {
    fetch('/api/gallery-images?limit=20&sort=order&depth=1')
      .then((res) => res.json())
      .then((data) => {
        if (data?.docs?.length) {
          setGalleryImages(
            data.docs.map((d: { image: { url: string }; caption?: string; alt?: string }) => ({
              url: d.image?.url || '',
              caption: d.caption,
              alt: d.alt,
            })),
          )
        }
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (!galleryImages.length || !galleryGridRef.current) return

    const items = galleryGridRef.current.querySelectorAll<HTMLElement>('.gallery-upload-wrap')
    if (!items.length) return

    const ctx = gsap.context(() => {
      gsap.to(items, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: galleryGridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [galleryImages])

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: '',
    plusOne: 0,
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formError, setFormError] = useState('')
  const successRef = useRef<HTMLDivElement>(null)

  const handleChange = (field: string, value: string | number) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  const toggleMusic = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setPlaying(!playing)
    }
  }

  const enterSite = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
    document.body.style.overflow = ''
    if (splashRef.current) {
      gsap.to(splashRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => setShowSplash(false),
      })
    } else {
      setShowSplash(false)
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.attending) {
      setFormError('Please fill in all required fields.')
      setFormStatus('error')
      return
    }
    setFormStatus('submitting')
    setFormError('')
    try {
      const res = await fetch('/api/invitees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.errors?.[0]?.message || 'Failed to submit RSVP')
      }
      setFormStatus('success')
    } catch (err) {
      setFormStatus('error')
      setFormError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  /* ── Helper: animate word-split headings on scroll ── */
  const animateSplitWords = (
    selector: string,
    triggerEl: Element | null,
    startOffset = '80%',
    endOffset = '50%',
  ) => {
    const words = document.querySelectorAll(`${selector} .split-word-inner`)
    if (!words.length) return
    gsap.from(words, {
      y: '100%',
      opacity: 0,
      duration: 0.8,
      stagger: 0.07,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: triggerEl,
        start: `top ${startOffset}`,
        end: `top ${endOffset}`,
        toggleActions: 'play none none reverse',
      },
    })
  }

  useEffect(() => {
    history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    el.play().then(() => setPlaying(true)).catch(() => {})
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(
          '.split-word-inner, .rsvp-form-wrap, .story-card, .venue-feature-card, .gallery-art-wrap, .gallery-upload-wrap',
          {
            y: 0,
            opacity: 1,
          },
        )
        gsap.set(
          '.hero-ornament, .hero-overline, .hero-title-italic, .hero-names-script, .hero-date-pill, .hero-venue-pill, .hero-rings-wrap, .scroll-indicator, .floating-nav',
          {
            opacity: 1,
          },
        )
        return () => {}
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        /* ────── NAV ENTRANCE ────── */
        if (navRef.current) {
          gsap.to(navRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.5,
            ease: 'power2.out',
          })
          gsap.set(navRef.current, { y: -20 })
        }

        /* ────── SCROLL PROGRESS ────── */
        gsap.to('.scroll-progress-fill', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: pageRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3,
          },
        })

        /* ────── HERO ENTRANCE SEQUENCE ────── */
        const heroTl = gsap.timeline({ delay: 0.2 })

        // Rings
        if (ringsWrapRef.current) {
          heroTl.to(
            ringsWrapRef.current,
            { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
            0,
          )
          gsap.set(ringsWrapRef.current, { y: 30 })
        }
        // Ornament
        heroTl.to('.hero-ornament', { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.3)
        // Overline
        heroTl.to('.hero-overline', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.5)
        gsap.set('.hero-overline', { y: 20 })
        // Title italic
        heroTl.to(
          '.hero-title-italic',
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          0.65,
        )
        gsap.set('.hero-title-italic', { y: 20 })
        // Names script — stagger letters
        // Make all name wrappers visible first, then animate individual chars
        gsap.set('.hero-names-script', { opacity: 1 })
        const nameChars = Array.from(document.querySelectorAll<HTMLElement>('.hero-names-char'))
        if (nameChars.length) {
          gsap.set(nameChars, { y: 80, opacity: 0, rotation: -8 })
          heroTl.to(
            nameChars,
            {
              y: 0,
              opacity: 1,
              rotation: 0,
              duration: 0.7,
              stagger: 0.04,
              ease: 'back.out(1.4)',
            },
            0.85,
          )
        } else {
          heroTl.to(
            '.hero-names-script',
            { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
            0.85,
          )
          gsap.set('.hero-names-script', { y: 40 })
        }
        // Animate the ampersand connector separately
        heroTl.to(
          '.hero-names-connector',
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' },
          1.1,
        )
        gsap.set('.hero-names-connector', { opacity: 0, scale: 0.5 })
        // Date pill
        heroTl.to('.hero-date-pill', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 1.3)
        gsap.set('.hero-date-pill', { y: 20 })
        // Venue pill
        heroTl.to('.hero-venue-pill', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 1.5)
        gsap.set('.hero-venue-pill', { y: 12 })
        // Scroll indicator
        heroTl.to('.scroll-indicator', { opacity: 1, duration: 0.6, ease: 'power2.out' }, 1.8)

        /* ────── RINGS ANIMATION ────── */
        gsap.to('.ring-left', { rotation: 360, duration: 22, repeat: -1, ease: 'none' })
        gsap.to('.ring-right', { rotation: -360, duration: 22, repeat: -1, ease: 'none' })
        gsap.to('.diamond-gem', {
          y: -4,
          duration: 2.2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        })

        /* ────── FLOATING PETALS ────── */
        if (floatingPetalsRef.current) {
          const petals = floatingPetalsRef.current.querySelectorAll('.petal')
          petals.forEach((petal) => {
            gsap.set(petal, {
              x: gsap.utils.random(-250, 250),
              y: gsap.utils.random(0, 80),
              scale: gsap.utils.random(0.3, 1),
              rotation: gsap.utils.random(0, 360),
              opacity: 0,
            })
            gsap.to(petal, {
              y: -500 - gsap.utils.random(0, 300),
              x: `+=${gsap.utils.random(-120, 120)}`,
              opacity: gsap.utils.random(0.1, 0.35),
              scale: gsap.utils.random(0.5, 1.3),
              rotation: `+=${gsap.utils.random(-180, 180)}`,
              duration: gsap.utils.random(5, 10),
              repeat: -1,
              delay: gsap.utils.random(0, 5),
              ease: 'power1.out',
            })
          })
        }

        /* ────── HERO PARALLAX ────── */
        if (ringsWrapRef.current) {
          gsap.to(ringsWrapRef.current, {
            y: 160,
            scale: 0.35,
            opacity: 0.05,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5,
            },
          })
        }
        if (heroContentRef.current) {
          gsap.to(heroContentRef.current, {
            y: -80,
            opacity: 0.2,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          })
        }
        gsap.to('.scroll-indicator', {
          opacity: 0,
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom 90%',
            scrub: 1,
          },
        })
        gsap.to('.glint-particle', {
          y: -220,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        })

        /* ────── SCROLL INDICATOR BOUNCE ────── */
        gsap.to('.scroll-mouse', {
          y: 8,
          duration: 1.3,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: 2,
        })

        /* ────── SECTION LABELS (all) ────── */
        gsap.utils.toArray<HTMLElement>('.section-label').forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
          gsap.set(el, { y: 16 })
        })

        /* ────── ORNAMENT DIVIDERS ────── */
        gsap.utils.toArray<HTMLElement>('.ornament-divider').forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
        })
        gsap.utils.toArray<HTMLElement>('.ornament-divider-line').forEach((el) => {
          gsap.from(el, {
            scaleX: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
        })

        /* ────── STORY SECTION ────── */
        // Heading word reveal
        animateSplitWords('.story-section-heading', storySectionRef.current, '80%', '50%')

        // Story text reveal
        if (storyTextRef.current) {
          gsap.to(storyTextRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: storySectionRef.current,
              start: 'top 72%',
              toggleActions: 'play none none reverse',
            },
          })
          gsap.set(storyTextRef.current, { y: 30 })
        }

        // Story cards stagger
        if (storyCardsRef.current) {
          const cards = storyCardsRef.current.querySelectorAll('.story-card')
          gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: storyCardsRef.current,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          })
        }

        /* ────── VENUE SECTION ────── */
        animateSplitWords('.venue-section-heading', venueSectionRef.current, '80%', '50%')

        if (venueCardsRef.current) {
          const cards = venueCardsRef.current.querySelectorAll('.venue-feature-card')
          gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: venueCardsRef.current,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          })
        }

        gsap.to('.venue-intro', {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: venueSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
        gsap.set('.venue-intro', { y: 30 })

        /* ────── DETAILS SECTION ────── */
        animateSplitWords('.details-section-heading', detailsSectionRef.current, '80%', '50%')

        gsap.to('.details-heading-sub', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: detailsSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
        gsap.set('.details-heading-sub', { y: 20 })

        if (detailCardsRef.current) {
          const cards = detailCardsRef.current.querySelectorAll('.detail-card')
          gsap.to(cards, {
            y: 0,
            opacity: 1,
            rotation: (i: number) => (i === 0 ? -1.5 : i === 2 ? 1.5 : 0),
            duration: 0.85,
            stagger: 0.15,
            ease: 'back.out(1.3)',
            scrollTrigger: {
              trigger: detailCardsRef.current,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          })
        }

        /* ────── GALLERY SECTION ────── */
        animateSplitWords('.gallery-section-heading', gallerySectionRef.current, '80%', '50%')

        if (galleryGridRef.current) {
          const items = galleryGridRef.current.querySelectorAll('.gallery-art-wrap, .gallery-upload-wrap')
          gsap.to(items, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: galleryGridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          })
        }

        /* ────── RSVP SECTION ────── */
        animateSplitWords('.rsvp-section-heading', rsvpSectionRef.current, '80%', '50%')

        gsap.to('.rsvp-subtitle', {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rsvpSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
        gsap.set('.rsvp-subtitle', { y: 20 })

        if (rsvpFormWrapRef.current) {
          gsap.to(rsvpFormWrapRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rsvpSectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          })
        }

        /* ────── FOOTER ────── */
        gsap.from('.wedding-footer', {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.wedding-footer',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        })

        /* ────── PARALLAX DECO PARTICLES ────── */
        document.querySelectorAll('.deco-particle').forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-speed') || '0.5')
          gsap.to(el, {
            y: -280 * speed,
            opacity: 0.25,
            ease: 'none',
            scrollTrigger: {
              trigger: pageRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: speed,
            },
          })
        })
      })
    }, pageRef)

    ScrollTrigger.refresh()
    const handleResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', handleResize)
    return () => {
      ctx.revert()
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  useEffect(() => {
    if (formStatus === 'success' && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { scale: 0, rotate: -8, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.85, ease: 'back.out(1.7)' },
      )
    }
  }, [formStatus])

  /* ── Name char helper (no longer needed as inline) ── */

  return (
    <div ref={pageRef} className="wedding-page">
      {/* SPLASH OVERLAY */}
      {showSplash && (
        <div ref={splashRef} className="splash-overlay">
          <div className="splash-content">
            <div className="splash-rings">
              <RingsSVG />
            </div>
            <p className="splash-overline">Together with their families</p>
            <h1 className="splash-heading">Cheley <span className="splash-amp">&amp;</span> Denz</h1>
            <p className="splash-sub">We&apos;re Getting Married!</p>
            <p className="splash-date">June 21, 2026 · Coral Sands Beach Resort</p>
            <button className="splash-enter" onClick={enterSite}>
              Enter
            </button>
          </div>
        </div>
      )}

      {/* SCROLL PROGRESS */}
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-fill" />
      </div>

      {/* FLOATING NAV */}
      <nav ref={navRef} className="floating-nav" aria-label="Wedding navigation">
        <span className="nav-brand">C&D</span>
        <ul className="nav-links">
          <li>
            <a href="#story">Story</a>
          </li>
          <li>
            <a href="#venue">Venue</a>
          </li>
          <li>
            <a href="#details">Details</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
        </ul>
        <a href="#rsvp" className="nav-cta">
          RSVP
        </a>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} id="home" className="hero-section">
        <div className="hero-bg-gradient" />

        {/* Glint particles */}
        <div className="hero-glints" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <DiamondSVG
              key={i}
              className="glint-particle"
              style={{
                left: `${10 + i * 13}%`,
                top: `${15 + (i % 3) * 28}%`,
                width: `${5 + (i % 3) * 4}px`,
                opacity: 0.06 + i * 0.015,
              }}
            />
          ))}
        </div>

        {/* Floating petals */}
        <div ref={floatingPetalsRef} className="floating-petals" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <PetalSVG
              key={i}
              className="petal"
              style={{
                left: `${(i * 7.3) % 100}%`,
                color: i % 3 === 0 ? '#E8D5B7' : i % 3 === 1 ? '#D4969B' : '#C9A96E',
              }}
            />
          ))}
        </div>

        <div className="hero-inner">
          {/* Rings */}
          <div ref={ringsWrapRef} className="hero-rings-wrap">
            <RingsSVG />
          </div>

          <div ref={heroContentRef} className="hero-content-block">
            {/* Ornament */}
            <div className="hero-ornament">
              <div className="hero-ornament-line" />
              <div className="hero-ornament-diamond" />
              <div className="hero-ornament-line right" />
            </div>

            <p className="hero-overline">Together with their families</p>
            <p className="hero-title-italic">We&apos;re Getting Married!</p>

            {/* Script names — two-line layout for maximum impact */}
            <div className="hero-names-block" aria-label="Cheley and Denz">
              <h1 className="hero-names-script" aria-hidden="true">
                {'Cheley'.split('').map((char, i) => (
                  <span key={i} className="hero-names-char" style={{ display: 'inline-block' }}>
                    {char}
                  </span>
                ))}
              </h1>
              <div className="hero-names-connector">
                <div className="hero-connector-line" />
                <span className="hero-connector-amp">&amp;</span>
                <div className="hero-connector-line" />
              </div>
              <p className="hero-names-script hero-names-second" aria-hidden="true">
                {'Denz'.split('').map((char, i) => (
                  <span key={i} className="hero-names-char" style={{ display: 'inline-block' }}>
                    {char}
                  </span>
                ))}
              </p>
              <span className="sr-only">Cheley and Denz</span>
            </div>

            {/* Date pill */}
            <div className="hero-date-pill">
              <span className="hero-date-text">June Twenty-First</span>
              <div className="hero-date-dot" />
              <span className="hero-date-text">Twenty Twenty-Six</span>
            </div>

            {/* Venue */}
            <div className="hero-venue-pill">
              <span>at Coral Sands Beach Resort</span>
            </div>
          </div>
        </div>

        {/* Wave transition */}
        <div className="hero-wave" aria-hidden="true">
          <WaveSVG />
        </div>

        {/* Scroll indicator */}
        <div ref={scrollIndicatorRef} className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <svg
            className="scroll-mouse"
            viewBox="0 0 22 36"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="2" y="2" width="18" height="32" rx="9" />
            <circle cx="11" cy="12" r="2.5" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ═══════════ MARQUEE STRIP ═══════════ */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="marquee-item">
              <span className="marquee-text">{item}</span>
              <span className="marquee-star">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ OUR STORY ═══════════ */}
      <section ref={storySectionRef} id="story" className="story-section">
        <div className="story-inner">
          {/* Left: heading + text */}
          <div className="story-text-col">
            <span className="section-label">Our Story</span>
            <h2 className="section-heading story-section-heading">
              <SplitWords text="Two Souls," /> <SplitWords text="One Journey." />
            </h2>
            <div className="ornament-divider">
              <div className="ornament-divider-line" />
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0l1.8 6.2H16l-5.1 3.7 1.9 6.1L8 12l-4.8 4 1.9-6.1L0 6.2h6.2z" />
              </svg>
              <div className="ornament-divider-line" />
            </div>
            <p ref={storyTextRef} className="story-text">
              Against the backdrop of autumn leaves, our paths crossed in a way that could only be
              described as fate. What began as a chance meeting bloomed into a love story written in
              the stars. And when Denz got down on one knee at the exact spot where we first watched
              the sunset at Coral Sands, we knew there was only one place to say &ldquo;I do.&rdquo;
            </p>
          </div>

          {/* Right: timeline cards */}
          <div ref={storyCardsRef} className="story-timeline-cards">
            <div className="story-card">
              <div className="story-card-dot" />
              <p className="story-card-year">2020</p>
              <h3 className="story-card-title">We Met</h3>
              <p className="story-card-text">
                A serendipitous autumn afternoon that changed everything.
              </p>
            </div>
            <div className="story-card">
              <div className="story-card-dot" />
              <p className="story-card-year">2022</p>
              <h3 className="story-card-title">We Fell in Love</h3>
              <p className="story-card-text">
                From friendship blossomed something beautifully unexpected.
              </p>
            </div>
            <div className="story-card">
              <div className="story-card-dot" />
              <p className="story-card-year">2025</p>
              <h3 className="story-card-title">He Proposed</h3>
              <p className="story-card-text">
                At sunset, at Coral Sands — the answer was always yes.
              </p>
            </div>
            <div className="story-card">
              <div className="story-card-dot" />
              <p className="story-card-year">2026</p>
              <h3 className="story-card-title">We Say I Do</h3>
              <p className="story-card-text">Surrounded by family, friends, and the sea we love.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ THE VENUE ═══════════ */}
      <section ref={venueSectionRef} id="venue" className="venue-section">
        <div className="venue-inner">
          <div className="venue-heading-wrap">
            <span className="section-label light">The Venue</span>
            <h2 className="section-heading light venue-section-heading">
              <SplitWords text="Coral Sands" /> <SplitWords text="Beach Resort" />
            </h2>
            <div className="ornament-divider">
              <div className="ornament-divider-line" />
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                color="var(--color-gold)"
                aria-hidden="true"
              >
                <path d="M8 0l1.8 6.2H16l-5.1 3.7 1.9 6.1L8 12l-4.8 4 1.9-6.1L0 6.2h6.2z" />
              </svg>
              <div className="ornament-divider-line" />
            </div>
          </div>
          <p className="venue-intro">
            Nestled along the pristine shores of the Pacific,{' '}
            <strong>Coral Sands Beach Resort</strong> is where turquoise waters meet golden sands
            and every sunset paints the sky in shades of rose and amber. This private paradise —
            with swaying palms, ocean-view terraces, and footsteps-to-the-sand ceremony point — is
            where we&apos;ll exchange our vows.
          </p>
          <div ref={venueCardsRef} className="venue-features">
            <div className="venue-feature-card">
              <div className="venue-feature-icon">
                <SunIcon />
              </div>
              <h3>Sunset Ceremony</h3>
              <p>
                Exchange vows on a pristine private beach as the sun melts into the Pacific horizon
              </p>
            </div>
            <div className="venue-feature-card">
              <div className="venue-feature-icon">
                <PalmIcon />
              </div>
              <h3>Palm Garden</h3>
              <p>Lush tropical gardens with winding paths, hidden alcoves, and ocean breezes</p>
            </div>
            <div className="venue-feature-card">
              <div className="venue-feature-icon">
                <ShellIcon />
              </div>
              <h3>Coral Pavilion</h3>
              <p>An open-air oceanfront pavilion with endless views of the coral coast</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ THE CELEBRATION ═══════════ */}
      <section ref={detailsSectionRef} id="details" className="details-section">
        <div className="details-inner">
          <div className="details-heading-wrap">
            <div className="details-heading-text">
              <span className="section-label">The Celebration</span>
              <h2 className="section-heading details-section-heading">
                <SplitWords text="The Day" /> <SplitWords text="Unfolds" />
              </h2>
            </div>
            <p className="details-heading-sub">
              Three distinct moments across one extraordinary evening — each crafted with love and
              intention for you and yours.
            </p>
          </div>

          <div ref={detailCardsRef} className="detail-cards">
            {/* Ceremony */}
            <div className="detail-card">
              <p className="detail-card-badge">01 — Ceremony</p>
              <div className="detail-card-icon">
                <SunIcon />
              </div>
              <div className="detail-card-content">
                <h3>The Ceremony</h3>
                <p className="detail-time">3:00 PM</p>
                <p className="detail-venue">
                  Sunset Point Beach
                  <br />
                  Coral Sands Resort
                </p>
              </div>
            </div>
            {/* Reception */}
            <div className="detail-card">
              <p className="detail-card-badge">02 — Reception</p>
              <div className="detail-card-icon">
                <DinnerIcon />
              </div>
              <div className="detail-card-content">
                <h3>The Reception</h3>
                <p className="detail-time">6:00 PM</p>
                <p className="detail-venue">
                  Oceanview Ballroom
                  <br />
                  Overlooking the Bay
                </p>
              </div>
            </div>
            {/* Party */}
            <div className="detail-card">
              <p className="detail-card-badge">03 — Party</p>
              <div className="detail-card-icon">
                <DanceIcon />
              </div>
              <div className="detail-card-content">
                <h3>The Party</h3>
                <p className="detail-time">Until Late</p>
                <p className="detail-venue">
                  Poolside Terrace
                  <br />
                  Dancing Under the Moon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section ref={gallerySectionRef} id="gallery" className="gallery-section">
        <div className="gallery-inner">
          <div className="gallery-header">
            <span className="section-label light">A Glimpse of Us</span>
            <h2 className="section-heading light gallery-section-heading">
              <SplitWords text="Moments" /> <SplitWords text="We Treasure" />
            </h2>
            <div className="ornament-divider" style={{ justifyContent: 'center' }}>
              <div className="ornament-divider-line" />
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                color="var(--color-gold)"
                aria-hidden="true"
              >
                <path d="M8 0l1.8 6.2H16l-5.1 3.7 1.9 6.1L8 12l-4.8 4 1.9-6.1L0 6.2h6.2z" />
              </svg>
              <div className="ornament-divider-line" />
            </div>
          </div>
          <div ref={galleryGridRef} className="gallery-grid">
            {galleryImages.length > 0
              ? galleryImages.map((img, i) => (
                  <div key={i} className="gallery-upload-wrap">
                    <img
                      src={img.url}
                      alt={img.alt || ''}
                      className="gallery-upload-img"
                      loading="lazy"
                    />
                    {img.caption && <p className="gallery-upload-caption">{img.caption}</p>}
                  </div>
                ))
              : Array.from({ length: 6 }).map((_, i) => (
                  <GalleryArt key={i} index={i} />
                ))}
          </div>
        </div>
      </section>

      {/* ═══════════ RSVP ═══════════ */}
      <section ref={rsvpSectionRef} id="rsvp" className="rsvp-section">
        <div className="rsvp-inner">
          <div className="rsvp-heading-wrap">
            <span className="section-label">Join the Celebration</span>
            <h2 className="section-heading rsvp-section-heading">
              <SplitWords text="Will You" /> <SplitWords text="Be There?" />
            </h2>
          </div>
          <p className="rsvp-subtitle">Kindly RSVP by the First of May, Twenty Twenty-Six</p>

          {formStatus === 'success' ? (
            <div ref={successRef} className="rsvp-success">
              <HeartSVG className="success-heart" />
              <h3>Thank You!</h3>
              <p>Your RSVP has been received with joy. We can&apos;t wait to celebrate with you!</p>
              <p className="success-detail">A confirmation will be sent to {formData.phone}</p>
            </div>
          ) : (
            <div ref={rsvpFormWrapRef} className="rsvp-form-wrap">
              <form className="rsvp-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="attending">Will You Attend? *</label>
                    <select
                      id="attending"
                      value={formData.attending}
                      onChange={(e) => handleChange('attending', e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="yes">Joyfully Accept</option>
                      <option value="no">Regretfully Decline</option>
                      <option value="pending">Not Sure Yet</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="plusOne">Plus Ones</label>
                    <input
                      id="plusOne"
                      type="number"
                      min={0}
                      max={5}
                      value={formData.plusOne}
                      onChange={(e) => handleChange('plusOne', parseInt(e.target.value) || 0)}
                    />
                  </div>
                </div>
                <div className="form-field form-field-full">
                  <label htmlFor="message">A Message for the Couple</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Share your warm wishes..."
                    rows={4}
                  />
                </div>
                {formStatus === 'error' && formError && <p className="form-error">{formError}</p>}
                <button
                  type="submit"
                  className="form-submit"
                  disabled={formStatus === 'submitting'}
                >
                  <span>{formStatus === 'submitting' ? 'Sending...' : 'Send RSVP'}</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="wedding-footer">
        <div className="footer-inner">
          <HeartSVG className="footer-heart" />
          <p className="footer-names">Cheley & Denz</p>
          <p className="footer-tagline">
            With all our love, we can&apos;t wait to celebrate with you.
          </p>
          <p className="footer-date">June 21, 2026 · Coral Sands Beach Resort</p>
        </div>
      </footer>

      {/* BACKGROUND MUSIC */}
      <audio
        ref={audioRef}
        src="/i-found-love-vens-adams-main-version-02-19-520.mp3"
        loop
        preload="auto"
        autoPlay
      />
      <button
        className={'music-toggle' + (playing ? ' is-playing' : '')}
        onClick={toggleMusic}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={playing ? 'Pause music' : 'Play music'}
      >
        <MusicNote />
      </button>

      {/* DECORATIVE PARALLAX PARTICLES */}
      <div ref={decoRef} className="deco-particles" aria-hidden="true">
        <div className="deco-particle" data-speed="0.3" style={{ left: '8%', top: '28%' }} />
        <div className="deco-particle" data-speed="0.5" style={{ left: '88%', top: '18%' }} />
        <div className="deco-particle" data-speed="0.7" style={{ left: '22%', top: '58%' }} />
        <div className="deco-particle" data-speed="0.4" style={{ left: '72%', top: '52%' }} />
        <div className="deco-particle" data-speed="0.6" style={{ left: '50%', top: '12%' }} />
        <div className="deco-particle" data-speed="0.8" style={{ left: '38%', top: '78%' }} />
        <div className="deco-particle" data-speed="0.35" style={{ left: '65%', top: '35%' }} />
        <div className="deco-particle" data-speed="0.55" style={{ left: '15%', top: '88%' }} />
      </div>
    </div>
  )
}
