import { GraduationCap, School } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "College Of Engineering, Kottarakkara, Kerala, India",
      year: "2020-2024",
      grade: "CGPA: 6.58",
      icon: <GraduationCap className="w-12 h-12 mb-4 text-purple-400" />
    },
    {
      degree: "Board of Higher Secondary Examinations (Plus Two)",
      institution: "PKS HSS Kanjiramkulam, Kerala, India",
      year: "",
      grade: "Grade: 77%",
      icon: <School className="w-12 h-12 mb-4 text-purple-400" />
    },
    {
      degree: "Board of Public Examinations (SSLC)",
      institution: "Shree Vidhyadhiraja Vidya Nilayam HSS, Neyyattinkara, Kerala, India",
      year: "",
      grade: "Grade: 96%",
      icon: <School className="w-12 h-12 mb-4 text-purple-400" />
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
              <div className="text-center">
                {edu.icon}
                <h3 className="text-2xl font-semibold mb-2 text-purple-200">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-gray-400">{edu.year}</p>
                <p className="text-purple-300 font-semibold mt-2">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

