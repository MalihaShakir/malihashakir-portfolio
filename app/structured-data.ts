export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Maliha Shakir',
  description: 'Full-stack web developer specializing in premium websites, eCommerce platforms, and AI automation',
  url: 'https://malihashakir.dev',
  jobTitle: 'Full Stack Developer',
  sameAs: [
    'https://linkedin.com/in/malihashakir',
    'https://github.com/malihashakir',
    'https://twitter.com/malihashakir',
  ],
  image: 'https://malihashakir.dev/og-image.jpg',
  email: 'hello@malihashakir.dev',
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Maliha Shakir',
  description: 'Full-stack web developer offering premium website development, eCommerce solutions, and AI automation',
  url: 'https://malihashakir.dev',
  telephone: '+1-XXX-XXX-XXXX',
  email: 'hello@malihashakir.dev',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  areaServed: 'Worldwide',
  serviceType: ['Web Development', 'Mobile App Development', 'eCommerce', 'AI Automation'],
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'Stripe', 'AI Integration'],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Maliha Shakir Portfolio',
  url: 'https://malihashakir.dev',
  description: 'Award-winning portfolio showcasing premium web development, eCommerce, and AI automation projects',
  creator: {
    '@type': 'Person',
    name: 'Maliha Shakir',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://malihashakir.dev',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Work',
      item: 'https://malihashakir.dev#work',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'About',
      item: 'https://malihashakir.dev#about',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Contact',
      item: 'https://malihashakir.dev#contact',
    },
  ],
}
