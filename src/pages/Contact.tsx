import { useState, type FormEvent, type ReactNode } from 'react'
import Icon, { type IconName } from '../components/Icon'
import { Accent, Container, MapEmbed, PageHero, Reveal, Section } from '../components/ui'
import { SITE } from '../site'

const field =
  'w-full rounded-lg border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-3 focus:ring-accent/20'

function InfoItem({ icon, label, value, href }: { icon: IconName; label: string; value: ReactNode; href?: string }) {
  const inner = (
    <>
      <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
        <Icon name={icon} className="size-6" />
      </span>
      <div className="min-w-0">
        <small className="block font-mono text-xs uppercase tracking-[0.06em] text-muted">{label}</small>
        <strong className="break-words font-head text-lg">{value}</strong>
      </div>
    </>
  )
  const cls = 'flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 text-ink transition'
  return href ? (
    <a href={href} className={`${cls} hover:border-accent`} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', device: '', model: '', message: '' })
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value })

  // No server needed: opens a pre-filled text message to the shop
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const msg = `Hi RCFIX! My name is ${form.name}.\nDevice: ${form.device}\nModel: ${form.model || '-'}\nProblem: ${form.message}`
    window.location.href = `sms:${SITE.phoneTel}?body=${encodeURIComponent(msg)}`
  }

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact"
        title={<>Let's get your device <Accent>working again</Accent></>}
        text="Call, text or visit the shop. Tell us the device and what's wrong, and we'll take it from there."
      />

      <Section>
        <Container className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal>
            <div className="grid gap-3.5">
              <InfoItem icon="phone" label="Call or text" value={SITE.phoneDisplay} href={`tel:${SITE.phoneTel}`} />
              <InfoItem icon="user" label="Owner / Technician" value={SITE.owner} />
              <InfoItem icon="pin" label="Shop location" value="RCFIX on Google Maps →" href={SITE.mapsUrl} />
            </div>
            <MapEmbed className="mt-5" />
          </Reveal>

          <Reveal>
            <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-6 sm:p-9">
              <h2 className="mb-2 text-2xl font-bold">Request a repair</h2>
              <p className="mb-6 text-muted">Fill this in and tap send. It opens a ready-to-send text message to RCFIX.</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-medium">
                  Your name
                  <input required autoComplete="name" value={form.name} onChange={set('name')} className={field} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium">
                  Device type
                  <select required value={form.device} onChange={set('device')} className={field}>
                    <option value="">Select…</option>
                    <option>Smartphone</option>
                    <option>Laptop</option>
                    <option>Graphics card</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <label className="mt-4 grid gap-1.5 text-sm font-medium">
                Brand &amp; model
                <input value={form.model} onChange={set('model')} placeholder="e.g. iPhone 12 Pro, ASUS RTX 3060" className={field} />
              </label>
              <label className="mt-4 grid gap-1.5 text-sm font-medium">
                What's the problem?
                <textarea
                  required
                  value={form.message}
                  onChange={set('message')}
                  placeholder="e.g. No power after charging overnight"
                  className={`${field} min-h-32 resize-y`}
                />
              </label>

              <button
                type="submit"
                className="mt-6 w-full cursor-pointer rounded-full bg-accent px-6 py-3.5 font-head font-semibold text-accent-ink transition hover:-translate-y-0.5 hover:bg-accent-2"
              >
                Send via Text Message
              </button>
              <p className="mt-3 text-sm text-muted">
                On a computer? Just call or text{' '}
                <a href={`tel:${SITE.phoneTel}`} className="text-accent hover:text-accent-2">{SITE.phoneDisplay}</a>.
              </p>
            </form>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
