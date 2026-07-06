'use client'

import { HeroSection } from '@/components/HeroSection'
import { ProjectCard } from '@/components/ProjectCard'
import { AboutSection } from '@/components/AboutSection'
import { ServicesSection } from '@/components/ServicesSection'
import { ContactSection } from '@/components/ContactSection'

export default function Page() {
  type Project = {
    number: number
    title: string
    year: string
    category: string
    technologies: string[]
    overview: string
    keyFeatures: string[]
    challenges: string
    result: string
    color: string
    backgroundColor: string
    image?: string
    liveUrl?: string
    codeUrl?: string
  }

  const projects: Project[] = [
    {
      number: 1,
      title: 'Black Trucks Co',
      year: '2024',
      category: 'Full Stack Web App',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Admin Dashboard'],
      overview: 'Luxury chauffeur service platform for premium black car and truck rentals in Toronto. Features a sleek customer-facing website with an integrated admin dashboard for booking management and fleet operations.',
      keyFeatures: [
        'Premium luxury chauffeur service booking system',
        'Admin dashboard for fleet and booking management',
        '24/7 service availability showcase',
        'Professional gallery and client testimonials',
        'Real-time booking and scheduling system',
      ],
      challenges: 'Building a sophisticated booking platform that combines elegant customer experience with powerful admin tools for managing drivers, vehicles, and reservations in real-time.',
      result: 'Delivered a premium platform serving 15,000+ clients with 5.0★ Google rating, combining beautiful design with efficient operations management through the admin dashboard.',
      color: '#000000',
      backgroundColor: '#1a1a1a',
      image: '/black trucks.PNG',
      liveUrl: 'https://black-trucksco.vercel.app/',
    },
    {
      number: 2,
      title: 'SolarCare Electric',
      year: '2024',
      category: 'Business Website',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      overview: 'Professional solar installation website offering comprehensive solar energy solutions for homes and businesses. Features clean design with clear service offerings and customer engagement tools.',
      keyFeatures: [
        'Professional solar installation services showcase',
        'Maintenance, repairs, and cleaning services',
        'Battery add-ons and EV charger solutions',
        'Free quote request system',
        'FAQ and contact integration',
      ],
      challenges: 'Creating a trustworthy and professional online presence that effectively communicates technical solar solutions to both residential and commercial clients while maintaining easy navigation.',
      result: 'Successfully launched a clean, professional website that positions SolarCare Electric as USA\'s trusted solar partner, with integrated quote request functionality driving customer engagement.',
      color: '#f59e0b',
      backgroundColor: '#f59e0b',
      image: '/solar care.PNG',
      liveUrl: 'https://solarcare-electric.com/',
    },
    {
      number: 3,
      title: 'Pavulum',
      year: '2024',
      category: 'eCommerce Platform',
      technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'E-commerce'],
      overview: 'Intellectual food for the mind, heart, and spirit. An elegant eCommerce platform for books, conversations, and courses exploring love, relationships, parenting, personal growth, and life lessons.',
      keyFeatures: [
        'Book shop with secure payment processing',
        'Podcast and community features',
        'Course enrollment system',
        'Responsive design for all devices',
        'Content management for books and resources',
      ],
      challenges: 'Building an eCommerce platform that balances sophisticated content delivery with seamless shopping experience. Creating an inspiring brand identity that resonates with readers seeking personal growth.',
      result: 'Launched a beautiful platform that successfully combines commerce with community, enabling users to explore books, join conversations, and engage with meaningful content.',
      color: '#dc2626',
      backgroundColor: '#dc2626',
      image: '/pavulum.PNG',
      liveUrl: 'https://pavulum.com/',
    },
    {
      number: 4,
      title: 'Lupin Project Group',
      year: '2024',
      category: 'Service Website',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      overview: 'Expert construction and handyman services platform built on trust. From quick repairs to major construction projects, Lupin Project Group delivers exceptional craftsmanship throughout The GTA.',
      keyFeatures: [
        'Service catalog and project showcase',
        'Free quote request system',
        'Licensed, insured, and experienced team highlights',
        'Contact and booking integration',
        'Professional service presentation',
      ],
      challenges: 'Creating a professional platform that builds trust and showcases construction expertise while making it easy for clients to request quotes and understand service offerings.',
      result: 'Developed a professional website that effectively communicates reliability and expertise, with streamlined quote requests and clear service presentation driving client acquisition.',
      color: '#8b5cf6',
      backgroundColor: '#8b5cf6',
      image: '/lupin.PNG',
      liveUrl: 'https://www.lupinprojectgroup.com/',
    },
  ]

  return (
    <main className="relative w-full overflow-x-hidden bg-[#050816]">
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <section className="relative w-full bg-[#050816]">
        <div className="space-y-0">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              year={project.year}
              category={project.category}
              technologies={project.technologies}
              overview={project.overview}
              keyFeatures={project.keyFeatures}
              challenges={project.challenges}
              result={project.result}
              color={project.color}
              backgroundColor={project.backgroundColor}
              {...(project.image && { image: project.image })}
              {...(project.liveUrl && { liveUrl: project.liveUrl })}
              {...(project.codeUrl && { codeUrl: project.codeUrl })}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
