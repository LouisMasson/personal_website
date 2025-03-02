import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProfileHeader } from "@/components/profile-header"
import { profile, technologies, projects, education, experiences } from "@/lib/content"
import { CertificationCard } from "@/components/certification-card"
import { certifications } from "@/lib/content"
import { ExperienceCard } from "@/components/experience-card"

export default function Home() {
  return (
    <div className="space-y-16">
      <ProfileHeader profile={profile} />

      {/* About Me */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me 👋</h2>
        <p className="text-lg text-muted-foreground">{profile.bio}</p>
        
        {/* Social Media Links */}
        <div className="flex gap-3 pt-2 justify-center">
          <Button asChild variant="outline" size="sm">
            <Link href={profile.social.twitter} target="_blank">
              <Twitter className="mr-1 h-4 w-4" />
              Twitter
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={profile.social.linkedin} target="_blank">
              <Linkedin className="mr-1 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={profile.social.github} target="_blank">
              <Github className="mr-1 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Technologies */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Technologies & Tools that I Love 💻</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {technologies.map((tech) => (
            <Card key={tech.name} className="tech-tile text-center">
              <div className="text-xl mb-1">{tech.emoji}</div>
              <div className="font-medium text-sm">{tech.name}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Passion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What Drives Me 🚀</h2>
        <p className="text-muted-foreground">{profile.passion}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card className="p-4 border-l-4 border-blue-500">
            <h3 className="font-medium mb-2">AI-Powered Innovation</h3>
            <p className="text-sm text-muted-foreground">
              I'm fascinated by how AI can transform business processes and create new possibilities for growth. Exploring AI applications that enhance human capabilities rather than replace them is what excites me most.
            </p>
          </Card>
          
          <Card className="p-4 border-l-4 border-green-500">
            <h3 className="font-medium mb-2">Democratizing Technology</h3>
            <p className="text-sm text-muted-foreground">
              I believe in making powerful technologies accessible to everyone. Self-hosting solutions and open-source alternatives empower users to maintain control over their digital lives while enjoying cutting-edge capabilities.
            </p>
          </Card>
          
          <Card className="p-4 border-l-4 border-purple-500">
            <h3 className="font-medium mb-2">Continuous Learning</h3>
            <p className="text-sm text-muted-foreground">
              The tech landscape evolves rapidly, and staying curious is essential. I dedicate time each week to explore new tools, technologies, and methodologies that can expand my perspective and capabilities.
            </p>
          </Card>
          
          <Card className="p-4 border-l-4 border-orange-500">
            <h3 className="font-medium mb-2">Sports & Well-being</h3>
            <p className="text-sm text-muted-foreground">
              Beyond technology, I'm passionate about maintaining a healthy body and mind. Windsurfing and other sports not only provide physical benefits but also teach persistence, adaptability, and focus—skills that translate perfectly to professional challenges.
            </p>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Education 🎓</h2>
        <div className="grid gap-4">
          {education.map((edu) => (
            <Card key={edu.school} className="p-6">
              <div className="flex items-start gap-4">
                {edu.logo && (
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image src={edu.logo} alt={edu.school} fill className="object-contain" />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-medium">{edu.school}</h3>
                  <p className="text-sm text-muted-foreground">{edu.degree} • {edu.field}</p>
                  <p className="text-sm text-muted-foreground">{edu.duration}</p>
                  {edu.description && <p className="mt-2 text-sm">{edu.description}</p>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience 💼</h2>
        <div className="grid gap-4 md:grid-cols-1">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Certifications 🎓</h2>
        <div className="grid gap-4">



          {certifications.map((cert) => (
            <CertificationCard key={cert.title} certification={cert} />
          ))}
        </div>
      </section>
    
      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Fun Projects 🎨</h2>
        <div className="projects-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.name} className="project-tile overflow-hidden h-full">
                <div className="relative h-40 w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 flex flex-col h-[calc(100%-10rem)]">
                  <h3 className="text-lg font-medium mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 flex-grow">{project.description}</p>
                  {project.tags && (
                    <div className="flex gap-1 mb-3 flex-wrap">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2 mt-auto">
                    <Button asChild variant="outline" size="sm" className="h-8 px-3 text-xs">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-1 h-3 w-3" />
                        GitHub
                      </Link>
                    </Button>
                    {project.demo && (
                      <Button asChild size="sm" className="h-8 px-3 text-xs">
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Let's Connect 👋</h2>
        <div className="flex gap-4 flex-wrap">
          <Button asChild variant="outline" size="lg">
            <Link href={profile.social.twitter} target="_blank">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={profile.social.linkedin} target="_blank">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={profile.social.github} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}