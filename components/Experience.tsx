import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">Experience</h2>
        <div className="bg-gray-900 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 max-w-2xl mx-auto">
          <div className="text-center">
            <Briefcase className="w-16 h-16 mb-6 text-purple-400 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2 text-purple-200">Java Full Stack Developer Trainee</h3>
            <p className="text-xl text-gray-400 mb-2">Qspiders Global, Kochi, Kerala, India</p>
            <p className="text-lg text-gray-400">Full-time internship</p>
          </div>
        </div>
      </div>
    </section>
  )
}

