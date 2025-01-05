import { Code, Database, Globe, GitBranch } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming",
      icon: <Code className="w-8 h-8 mb-2 text-purple-400" />,
      skills: ["Java", "J2EE", "JDBC", "Hibernate", "Spring"]
    },
    {
      name: "Databases",
      icon: <Database className="w-8 h-8 mb-2 text-purple-400" />,
      skills: ["SQL", "MySQL", "PostgreSQL"]
    },
    {
      name: "Web Technologies",
      icon: <Globe className="w-8 h-8 mb-2 text-purple-400" />,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      name: "Version Control",
      icon: <GitBranch className="w-8 h-8 mb-2 text-purple-400" />,
      skills: ["Git", "GitHub"]
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
              <div className="text-center">
                {category.icon}
                <h3 className="text-xl font-semibold mb-4 text-purple-200">{category.name}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-purple-900/50 text-purple-200 px-3 py-1 rounded-full text-sm">
                      {skill}
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

