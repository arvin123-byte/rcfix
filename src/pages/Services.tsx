import { IconTile } from '../components/Icon'
import { Accent, Bullets, Button, CallButton, Card, Container, CtaBand, PageHero, Section, SectionHead } from '../components/ui'

const services = [
  {
    icon: 'smartphone', title: 'Smartphone Board Repair', sub: 'iPhone and Android motherboards.',
    items: ['No power / no boot / boot loop', 'Not charging, charging IC & port issues', 'No service, Wi-Fi or Bluetooth faults', 'Face ID, Touch ID & audio IC problems', 'Water-damage recovery'],
  },
  {
    icon: 'laptop', title: 'Laptop Motherboard Repair', sub: 'Windows laptops and MacBooks.',
    items: ['No power or short to ground', 'No display / backlight faults', 'Charging circuit & DC-jack repair', 'Power rail & MOSFET replacement', 'BIOS / firmware chip issues'],
  },
  {
    icon: 'gpu', title: 'Graphics Card Repair', sub: 'Desktop GPUs from all major brands.',
    items: ['No video output / not detected', 'Artifacting & driver crashes', 'VRM, MOSFET & power stage faults', 'Fan / fan-controller problems', 'PCIe & display connector repair'],
  },
  {
    icon: 'chip', title: 'Micro-Soldering & Chip Work', sub: 'Precision work under the microscope.',
    items: ['IC removal & replacement', 'BGA reballing', 'Broken pad & trace (jumper) repair', 'Connector & FPC socket replacement', 'Shorted capacitor removal'],
  },
] as const

const steps = [
  { title: 'Bring it in', text: "Call, text or visit. Tell us what happened and what the device is doing." },
  { title: 'Diagnosis', text: 'We test the board with bench power, meters and schematics to find the real fault.' },
  { title: 'Quote & approval', text: 'You get a clear explanation and price. Nothing is done without your OK.' },
  { title: 'Repair', text: 'Component-level fix under the microscope using proper rework tools.' },
  { title: 'Testing', text: 'Full function test before release, so you leave with a working device.' },
  { title: 'Pick-up', text: "We message you once it's ready and walk you through what was fixed." },
]

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Services"
        title={<>Repairs done <Accent>at the component level</Accent></>}
        text="We diagnose and fix the circuit board itself, which is often the only real fix and usually cheaper than a full replacement."
      />

      <Section>
        <Container className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <Card key={s.title}>
              <IconTile name={s.icon} />
              <h3 className="mb-1 text-xl font-semibold">{s.title}</h3>
              <p className="mb-4 text-muted">{s.sub}</p>
              <Bullets items={[...s.items]} />
            </Card>
          ))}
        </Container>
      </Section>

      <Section alt>
        <Container>
          <SectionHead center eyebrow="The process" title="How a repair works" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Card key={s.title} className="!bg-bg">
                <span className="mb-2.5 block font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')} /</span>
                <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
                <p className="text-muted">{s.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CtaBand title="Not sure if it can be fixed?" text="Describe the problem and we'll tell you honestly.">
            <CallButton label="Call (0906) 543 8397" />
            <Button to="/contact" variant="ghost">Send details</Button>
          </CtaBand>
        </Container>
      </Section>
    </>
  )
}
