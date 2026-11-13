import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Icon from './Icon'
import { Container } from './ui'
import { NAV, SITE } from '../site'

const TITLES: Record<string, string> = {
  '/': 'RCFIX | Board-Level Phone, Laptop & GPU Repair',
  '/about': 'About | RCFIX',
  '/services': 'Services | RCFIX',
  '/contact': 'Contact | RCFIX',
}

function Logo() {
  return (
    <Link to="/" aria-label="RCFIX home" className="flex items-center gap-2.5 font-head text-[1.35rem] font-extrabold tracking-wide text-ink">
      <span className="grid size-9 place-items-center rounded-[9px] bg-accent text-accent-ink">
        <Icon name="wrench" strokeWidth={2.2} />
      </span>
      <span>RC<span className="text-accent">FIX</span></span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-4 py-3 font-medium transition md:rounded-full md:py-2 md:text-[0.95rem] ${
      isActive ? 'bg-accent/10 text-accent' : 'text-muted hover:bg-surface-2 hover:text-ink'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between">
        <Logo />
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-xl border border-line text-ink md:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="size-[22px]" />
        </button>
        <nav
          aria-label="Main"
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-[72px] flex-col gap-1 border-b border-line bg-surface px-4 pb-5 pt-3 md:static md:flex md:flex-row md:items-center md:gap-1.5 md:border-0 md:bg-transparent md:p-0`}
        >
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkCls}>
              {n.label}
            </NavLink>
          ))}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 font-head text-sm font-semibold text-accent-ink transition hover:bg-accent-2 md:ml-2.5 md:mt-0"
          >
            Call Now
          </a>
        </nav>
      </Container>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line bg-surface pb-7 pt-14">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-3.5 max-w-xs text-muted">Board-level repair for phones, laptops and graphics cards.</p>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.1em]">Pages</h4>
            <ul className="grid gap-2">
              {NAV.map((n) => (
                <li key={n.to}><Link to={n.to} className="text-muted hover:text-accent">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.1em]">Contact</h4>
            <ul className="grid gap-2">
              <li><a href={`tel:${SITE.phoneTel}`} className="text-muted hover:text-accent">{SITE.phoneDisplay}</a></li>
              <li><a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">Get directions</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-2.5 border-t border-line pt-6 text-sm text-muted">
          <span>© {new Date().getFullYear()} RCFIX. All rights reserved.</span>
          <span>Owner: {SITE.owner}</span>
        </div>
      </Container>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = TITLES[pathname] ?? TITLES['/']
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
