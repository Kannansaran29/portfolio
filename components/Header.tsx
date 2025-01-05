import Link from 'next/link'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-300">Saran S Kumar</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="mailto:saranskumar2000@gmail.com" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span className="hidden md:inline">Email</span>
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.linkedin.com/in/saranskumar/" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                <span className="hidden md:inline">LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com/Kannansaran29" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span className="hidden md:inline">GitHub</span>
              </Link>
            </li>
            <li>
              <Link 
                href="tel:+919895485166" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden md:inline">Phone</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

