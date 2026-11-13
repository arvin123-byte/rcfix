import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { SITE } from '../site'

/* ---------- Layout helpers ---------- */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function Section({ children, alt = false, className = '' }: { children: ReactNode; alt?: boolean; className?: string }) {
  return (
    <section className={`py-14 sm:py-20 lg:py-28 ${alt ? 'border-y border-line bg-surface' : ''} ${className}`}>
      {children}
    </section>
  )
}

/* ---------- Typography ---------- */
export function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-trace">
      <span className="h-0.5 w-5 bg-trace" />
      {children}
      {center && <span className="h-0.5 w-5 bg-trace" />}
    </span>
  )
}

export function SectionHead({ eyebrow, title, text, center = false }: { eyebrow: string; title: ReactNode; text?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-10 max-w-2xl sm:mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <h2 className="mb-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="text-muted">{text}</p>}
    </Reveal>
  )
}

export const Accent = ({ children }: { children: ReactNode }) => <span className="text-accent">{children}</span>

/* ---------- Buttons ---------- */
const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 font-head text-[0.95rem] font-semibold transition hover:-translate-y-0.5 cursor-pointer'
const btnVariants = {
  primary: 'border-transparent bg-accent text-accent-ink hover:bg-accent-2',
  ghost: 'border-line text-ink hover:border-accent hover:text-accent',
}

type BtnProps = { children: ReactNode; variant?: keyof typeof btnVariants; className?: string } & (
  | { to: string; href?: never }
  | { href: string; to?: never }
)

export function Button({ children, variant = 'primary', className = '', to, href }: BtnProps) {
  const cls = `${btnBase} ${btnVariants[variant]} ${className}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  const external = href!.startsWith('http')
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}

export function CallButton({ variant = 'primary', label }: { variant?: 'primary' | 'ghost'; label?: string }) {
  return (
    <Button href={`tel:${SITE.phoneTel}`} variant={variant}>
      <Icon name="phone" className="size-[18px]" />
      {label ?? SITE.phoneDisplay}
    </Button>
  )
}

/* ---------- Card ---------- */
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <Reveal className="h-full">
      <div className={`h-full rounded-2xl border border-line bg-surface p-7 transition hover:-translate-y-1 hover:border-accent/45 ${className}`}>
        {children}
      </div>
    </Reveal>
  )
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="relative pl-5 text-[0.95rem] text-muted">
          <span className="absolute left-0 top-[0.6em] size-2 rounded-[2px] bg-trace" />
          {i}
        </li>
      ))}
    </ul>
  )
}

/* ---------- Reveal on scroll ---------- */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={`transition-[opacity,translate] duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}

/* ---------- Inner-page banner ---------- */
export function PageHero({ crumb, eyebrow, title, text }: { crumb: string; eyebrow: string; title: ReactNode; text: string }) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-12 pt-14 sm:pb-16 sm:pt-20 lg:pt-24">
      <div className="pcb-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <Container className="relative">
        <p className="mb-4 font-mono text-xs text-muted">
          <Link to="/" className="hover:text-accent">Home</Link> / {crumb}
        </p>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="max-w-2xl text-lg text-muted">{text}</p>
      </Container>
    </section>
  )
}

/* ---------- Call-to-action band ---------- */
export function CtaBand({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <Reveal className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface-2 to-surface p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
      <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[radial-gradient(rgb(255_176_32/0.22),transparent_70%)]" />
      <div className="relative">
        <h2 className="mb-1 text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="text-muted">{text}</p>
      </div>
      <div className="relative flex flex-wrap gap-3">{children}</div>
    </Reveal>
  )
}

/* ---------- Google Map (iframe; any click opens Google Maps) ---------- */
export function MapEmbed({ className = '' }: { className?: string }) {
  return (
    <div className={`relative min-h-[300px] overflow-hidden rounded-2xl border border-line bg-surface shadow-card aspect-[16/10] ${className}`}>
      <iframe
        src={SITE.mapsEmbed}
        title="RCFIX location map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0 grayscale-[25%]"
      />
      {/* Transparent layer on top of the iframe so a click anywhere opens the RCFIX place page */}
      <a
        href={SITE.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open RCFIX in Google Maps"
        className="group absolute inset-0 z-10 flex items-end justify-end p-3.5"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-head text-sm font-semibold text-accent-ink shadow-card transition group-hover:-translate-y-0.5">
          <Icon name="external" className="size-4" strokeWidth={2.2} />
          Open in Google Maps
        </span>
      </a>
    </div>
  )
}
