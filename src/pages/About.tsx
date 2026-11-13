import { IconTile } from '../components/Icon'
import { Accent, Button, CallButton, Card, Container, CtaBand, Eyebrow, PageHero, Reveal, Section, SectionHead } from '../components/ui'

const values = [
  { icon: 'search', title: 'Honest diagnosis', text: "We find the actual fault before quoting. If a repair isn't worth it, we'll tell you straight." },
  { icon: 'peso', title: 'Fair pricing', text: 'Fixing the board instead of replacing it usually costs far less. You approve the price first.' },
  { icon: 'shield', title: 'Careful handling', text: 'ESD-safe workspace, proper tools and full testing before your device goes back to you.' },
] as const

const gallery = [
  { src: '/images/workstation.png', alt: 'Main repair station with schematic on large monitor', caption: 'Main station · schematics on screen' },
  { src: '/images/bench.png', alt: 'Microscope and bench power supplies', caption: 'Microscope & power supplies' },
  { src: '/images/shop.png', alt: 'Shop interior with workbench and waiting area', caption: 'Bench & customer waiting area' },
]

const tools = ['Stereo microscope', 'Hot-air rework station', 'Soldering stations', 'DC bench power supplies', 'Digital multimeter', 'Schematics & board views', 'ESD-safe mat']

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About RCFIX"
        title={<>The hands behind <Accent>the fix</Accent></>}
        text="RCFIX is a one-bench repair lab focused on what most shops won't touch: the motherboard itself."
      />

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src="/images/owner.png"
              alt="Rhey Carlo Valenzuela, owner and technician of RCFIX"
              className="aspect-square w-full rounded-2xl border border-line object-cover shadow-card lg:aspect-[4/5]"
            />
          </Reveal>
          <Reveal>
            <Eyebrow>Owner &amp; technician</Eyebrow>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Rhey Carlo Valenzuela</h2>
            <p className="mb-4 text-muted">
              RCFIX started from a simple frustration: too many devices were being written off as "dead" when the real problem was a single
              shorted capacitor or a failed chip. Rhey Carlo built RCFIX to repair those devices properly, at the component level.
            </p>
            <p className="text-muted">
              Every repair is handled personally, from the first diagnosis to the final test. You talk to the person actually holding the
              soldering iron, so you always know what's wrong, what it costs and what was done.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CallButton label="Call (0906) 543 8397" />
              <Button to="/services" variant="ghost">Our Services</Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <SectionHead center eyebrow="How we work" title="What you can expect" />
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} className="!bg-bg">
                <IconTile name={v.icon} />
                <h3 className="mb-2 text-xl font-semibold">{v.title}</h3>
                <p className="text-muted">{v.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead
            eyebrow="Inside the lab"
            title="The workshop"
            text="A dedicated, air-conditioned repair room with everything needed for precision board work."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.src} className={i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                <figure className="group relative overflow-hidden rounded-2xl border border-line bg-surface">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className={`aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105 lg:aspect-[3/4] ${i === 2 ? 'sm:aspect-[16/10]' : 'sm:aspect-[3/4]'}`}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 to-transparent px-4 pb-3.5 pt-10 font-mono text-xs tracking-wide">
                    {g.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-7 flex flex-wrap gap-2.5">
            {tools.map((t) => (
              <span key={t} className="rounded-full border border-line bg-surface px-3.5 py-2 font-mono text-xs text-muted">{t}</span>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <CtaBand title="Bring your device to the bench" text="Call or text for an assessment, or drop by the shop.">
            <Button to="/contact">Contact RCFIX</Button>
          </CtaBand>
        </Container>
      </Section>
    </>
  )
}
