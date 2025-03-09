import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProfileHeader } from "@/components/profile-header"
import { profile, technologyCategories, projects, education, experiences } from "@/lib/content"
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
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Technologies & Tools that I Love 💻</h2>
        
        {technologyCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="text-xl">{category.emoji}</div>
              <h3 className="text-lg font-medium">{category.name}</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {category.technologies.map((tech) => (
                <Card key={tech.name} className="tech-tile text-center">
                  <div className="text-xl mb-1">{tech.emoji}</div>
                  <div className="font-medium text-sm">{tech.name}</div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Passion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What Drives Me 🚀</h2>
        <p className="text-muted-foreground">{profile.passion}</p>
        
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Card key="ai-innovation" className="p-4 transition-all hover:shadow-md text-center w-40">
            <div className="flex flex-col items-center gap-1">
              <div className="text-3xl mb-1">🤖</div>
              <h3 className="text-sm font-medium">AI-Powered Innovation</h3>
            </div>
          </Card>
          
          <Card key="democratizing-tech" className="p-4 transition-all hover:shadow-md text-center w-40">
            <div className="flex flex-col items-center gap-1">
              <div className="text-3xl mb-1">🌐</div>
              <h3 className="text-sm font-medium">Democratizing Technology</h3>
            </div>
          </Card>
          
          <Card key="continuous-learning" className="p-4 transition-all hover:shadow-md text-center w-40">
            <div className="flex flex-col items-center gap-1">
              <div className="text-3xl mb-1">📚</div>
              <h3 className="text-sm font-medium">Continuous Learning</h3>
            </div>
          </Card>
          
          <Card key="sports-wellbeing" className="p-4 transition-all hover:shadow-md text-center w-40">
            <div className="flex flex-col items-center gap-1">
              <div className="text-3xl mb-1">🏄‍♂️</div>
              <h3 className="text-sm font-medium">Sports & Well-being</h3>
            </div>
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
      <section id="experience" className="space-y-4 scroll-mt-20">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} certification={cert} />
          ))}
        </div>
      </section>
    
      {/* Projects */}
      <section id="projects" className="space-y-4 scroll-mt-20">
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