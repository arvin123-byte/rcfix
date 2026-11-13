// Business info, kept in one place
export const SITE = {
  name: 'RCFIX',
  owner: 'Rhey Carlo Valenzuela',
  phoneDisplay: '(0906) 543 8397',
  phoneTel: '+639065438397',
  mapsUrl:
    'https://www.google.com/maps/place/RCFIX/@14.2388313,121.4026036,17z/data=!3m1!4b1!4m6!3m5!1s0x3397e3003c4a7c35:0x99990287160cb300!8m2!3d14.2388313!4d121.4026036!16s%2Fg%2F11y3m90gy3?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D',
  mapsEmbed: 'https://maps.google.com/maps?q=14.2388313,121.4026036&z=17&output=embed',
} as const

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
] as const
