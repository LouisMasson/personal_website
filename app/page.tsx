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

export default function Home() {
  return (
    <div className="space-y-16">
      <ProfileHeader profile={profile} />

      {/* About Me */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me 👋</h2>
        <p className="text-lg text-muted-foreground">{profile.bio}</p>
      </section>

      {/* Technologies */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Technologies & Tools that I Love 💻</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {technologies.map((tech) => (
            <Card key={tech.name} className="p-4 text-center">
              <div className="text-2xl mb-2">{tech.emoji}</div>
              <div className="font-medium">{tech.name}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Passion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What Drives Me 🚀</h2>
        <p className="text-muted-foreground">{profile.passion}</p>
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
        <div className="grid gap-4">
          {experiences.map((exp) => (
            <Card key={exp.company} className="p-6">
              <div className="flex items-start gap-4">
                {exp.logo && (
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image src={exp.logo} alt={exp.company} fill className="object-contain" />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-medium">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company} • {exp.duration}</p>
                  <p className="mt-2 text-sm">{exp.description}</p>
                  {exp.skills && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Certifications 🎓</h2>
        <div className="grid gap-4">

{/* Exemple d'utilisation dans votre page principale (ajoutez ceci à l'endroit approprié) */}
<section className="py-8">
  <h2 className="text-2xl font-bold mb-4">Expérience professionnelle</h2>
  <div className="grid gap-4 md:grid-cols-1">
    {experiences.map((exp, i) => (
      <ExperienceCard key={i} experience={exp} />
    ))}
  </div>
</section>

          {certifications.map((cert) => (
            <CertificationCard key={cert.title} certification={cert} />
          ))}
        </div>
      </section>
    
      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Fun Projects 🎨</h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                {project.tags && (
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button asChild size="sm">
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
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