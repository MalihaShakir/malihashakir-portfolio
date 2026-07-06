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
      title: 'Combine Water Management System',
      year: '2024',
      category: 'Full Stack Business Management',
      technologies: ['Next.js', 'React', 'TypeScript', 'Dashboard', 'Admin Panel'],
      overview: 'Comprehensive business management dashboard for water distribution company. Streamlines order processing, inventory tracking, customer management, and financial reporting.',
      keyFeatures: [
        'Real-time dashboard analytics and KPIs',
        'Order and inventory management system',
        'Customer tracking and payment records',
        'Financial reports with profit calculations',
      ],
      challenges: 'Building a complete business management system with real-time data tracking and financial calculations.',
      result: 'Fully functional admin dashboard managing orders, inventory, customers, and finances efficiently.',
      color: '#3b82f6',
      backgroundColor: '#3b82f6',
      image: '/combinewater.png',
      liveUrl: 'https://aquapal.vercel.app/dashboard',
    },
    {
      number: 2,
      title: 'Black Trucks Co',
      year: '2024',
      category: 'Full Stack Web App',
      technologies: ['Next.js', 'React', 'TypeScript', 'Admin Dashboard'],
      overview: 'Premium chauffeur service platform with integrated booking management system and admin dashboard for Toronto\'s luxury transportation services.',
      keyFeatures: [
        'Online booking and scheduling system',
        'Admin dashboard for fleet management',
        'Real-time availability tracking',
        'Client testimonials and reviews',
      ],
      challenges: 'Building an elegant customer experience while providing powerful management tools for operations.',
      result: 'Successfully serving 15,000+ clients with 5.0★ rating and streamlined booking operations.',
      color: '#000000',
      backgroundColor: '#1a1a1a',
      image: '/black trucks.PNG',
      liveUrl: 'https://black-trucksco.vercel.app/',
    },
    {
      number: 3,
      title: 'SolarCare Electric',
      year: '2024',
      category: 'Business Website',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      overview: 'Professional solar installation company website showcasing services for residential and commercial solar solutions.',
      keyFeatures: [
        'Service showcase and pricing',
        'Free quote request system',
        'Solar solutions information',
        'Contact and FAQ integration',
      ],
      challenges: 'Creating a trustworthy presence that clearly communicates technical solar solutions to diverse clients.',
      result: 'Clean, professional website positioning SolarCare Electric as a trusted solar partner.',
      color: '#f59e0b',
      backgroundColor: '#f59e0b',
      image: '/solar care.PNG',
      liveUrl: 'https://solarcare-electric.com/',
    },
    {
      number: 4,
      title: 'Pavulum',
      year: '2024',
      category: 'eCommerce Platform',
      technologies: ['Next.js', 'React', 'Stripe', 'E-commerce'],
      overview: 'Modern eCommerce platform for books and educational courses focused on personal growth and relationships.',
      keyFeatures: [
        'Secure payment processing',
        'Course enrollment system',
        'Community features',
        'Content management',
      ],
      challenges: 'Balancing sophisticated content delivery with seamless shopping experience.',
      result: 'Beautiful platform combining commerce with community for meaningful content engagement.',
      color: '#dc2626',
      backgroundColor: '#dc2626',
      image: '/pavulum.PNG',
      liveUrl: 'https://pavulum.com/',
    },
    {
      number: 5,
      title: 'Lupin Project Group',
      year: '2024',
      category: 'Service Website',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      overview: 'Construction and handyman services website for residential and commercial projects throughout The GTA.',
      keyFeatures: [
        'Service catalog',
        'Quote request system',
        'Project showcase',
        'Contact integration',
      ],
      challenges: 'Building trust through professional design while making service information accessible.',
      result: 'Professional platform effectively communicating expertise and reliability to clients.',
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
