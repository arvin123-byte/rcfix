import Icon, { IconTile } from '../components/Icon'
import { Accent, Button, CallButton, Card, Container, CtaBand, Eyebrow, MapEmbed, Reveal, Section, SectionHead } from '../components/ui'

const fixes = [
  { icon: 'smartphone', title: 'Smartphone Repair', text: 'No power, no charging, boot loops, no signal, Face ID / Touch ID issues and water damage on iPhone and Android boards.' },
  { icon: 'laptop', title: 'Laptop Motherboards', text: 'No display, short circuits, power rail faults, charging IC and BIOS problems, fixed on the board instead of replacing it.' },
  { icon: 'gpu', title: 'Graphics Card Repair', text: 'No video output, artifacting, fan and VRM faults, shorted MOSFETs and memory issues on desktop GPUs.' },
] as const

const reasons = [
  'Stereo microscope work for tiny components',
  'Hot-air rework & precision soldering stations',
  'Schematic & board-view guided diagnosis',
  'Clear explanation and quote before we start',
]

const stats = [
  { big: 'Chip-level', small: 'Not just part swaps' },
  { big: 'Phones · Laptops · GPUs', small: 'One bench, many devices' },
  { big: 'Free', small: 'Initial assessment' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
        <div className="pcb-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_40%,#000_20%,transparent_75%)]" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Board-level electronics repair</Eyebrow>
            <h1 className="mb-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Dead device? <Accent>We fix it at the chip.</Accent>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-muted">
              RCFIX repairs phones, laptops and graphics cards down to the motherboard: micro-soldering, chip replacement and real
              diagnostics with schematics, microscopes and bench power supplies. No guesswork, no unnecessary part swaps.
            </p>
            <div className="flex flex-wrap gap-3">
              <CallButton />
              <Button to="/services" variant="ghost">See Services</Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-6">
              {stats.map((s) => (
                <div key={s.big}>
                  <strong className="block font-head text-xl sm:text-2xl">{s.big}</strong>
                  <span className="text-sm text-muted">{s.small}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <img
              src="/images/workstation.png"
              alt="RCFIX repair bench with microscope, rework station and a phone board schematic on screen"
              className="aspect-[4/5] w-full rounded-2xl border border-line object-cover shadow-card"
            />
            <div className="absolute bottom-7 left-3 flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3.5 shadow-card lg:-left-5">
              <span className="size-2.5 rounded-full bg-trace shadow-[0_0_0_5px_rgb(45_212_167/0.18)]" />
              <div>
                <strong className="block font-head text-sm">Now accepting repairs</strong>
                <small className="text-xs text-muted">Walk-ins &amp; inquiries welcome</small>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* WHAT WE FIX */}
      <Section alt>
        <Container>
          <SectionHead
            center
            eyebrow="What we fix"
            title="From cracked charging ports to dead motherboards"
            text="If it has a circuit board, bring it in. We'll find the fault and tell you honestly whether it's worth repairing."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {fixes.map((f) => (
              <Card key={f.title} className="!bg-bg">
                <IconTile name={f.icon} />
                <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
                <p className="text-muted">{f.text}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/services" variant="ghost">View all services →</Button>
          </div>
        </Container>
      </Section>

      {/* WHY US */}
      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src="/images/bench.png"
              alt="RCFIX bench with stereo microscope, DC power supplies and multimeter"
              className="aspect-[4/3] w-full rounded-2xl border border-line object-cover shadow-card lg:aspect-[4/5]"
            />
          </Reveal>
          <Reveal>
            <Eyebrow>Why RCFIX</Eyebrow>
            <h2 className="mb-3 text-3xl font-bold sm:text-4xl">A real repair lab, not a parts counter</h2>
            <p className="text-muted">
              Every job goes on a properly equipped bench. We trace the fault with schematics and board views, measure it, then fix exactly
              what's broken.
            </p>
            <ul className="my-7 grid gap-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 size-[22px] shrink-0 text-trace" strokeWidth={2.4} />
                  {r}
                </li>
              ))}
            </ul>
            <Button to="/about">About RCFIX</Button>
          </Reveal>
        </Container>
      </Section>

      {/* LOCATION */}
      <Section alt>
        <Container>
          <SectionHead eyebrow="Visit the shop" title="Find us on the map" text="Tap the map to open RCFIX in Google Maps for directions." />
          <Reveal>
            <MapEmbed />
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <CtaBand title="Got a device that won't turn on?" text="Call or text Rhey Carlo for a quick assessment.">
            <CallButton label="Call (0906) 543 8397" />
            <Button to="/contact" variant="ghost">Send a message</Button>
          </CtaBand>
        </Container>
      </Section>
    </>
  )
}
