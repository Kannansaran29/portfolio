import { Server, Smartphone, Utensils } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Hospital Management System",
      icon: <Server className="w-12 h-12 mb-4 text-purple-400" />,
      description: "Created a user-friendly interface and robust backend using Java, streamlining workflows for hospital staff. Implemented MySQL/PostgreSQL and JDBC for managing patient records, staff information, and medical inventory.",
      technologies: ["Java", "Spring", "Hibernate", "MySQL", "PostgreSQL", "JDBC", "Git", "JUnit"]
    },
    {
      title: "PathConnect (Mobile App)",
      icon: <Smartphone className="w-12 h-12 mb-4 text-purple-400" />,
      description: "Developed a mobile app to bridge journeys and deliveries between users. Works for Android Mobile Phones.",
      technologies: ["Flutter", "Android Studio", "Firebase"]
    },
    {
      title: "FUDIYO-Food Wastage Management System",
      icon: <Utensils className="w-12 h-12 mb-4 text-purple-400" />,
      description: "Designed a web application to serve leftover food for the needy.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "VS Code"]
    }
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
              <div className="text-center">
                {project.icon}
                <h3 className="text-2xl font-semibold mb-4 text-purple-200">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-900/50 text-purple-200 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

