import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Saran S Kumar</h3>
            <p>BTech Computer Science Graduate</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-300">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:saranskumar2000@gmail.com" className="flex items-center hover:text-purple-400 transition-colors duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  saranskumar2000@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+919895485166" className="flex items-center hover:text-purple-400 transition-colors duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 9895485166
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-300">Social</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.linkedin.com/in/saranskumar/" className="flex items-center hover:text-purple-400 transition-colors duration-300">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Kannansaran29" className="flex items-center hover:text-purple-400 transition-colors duration-300">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-300">Languages</h4>
            <ul className="space-y-2">
              <li>English (Fluent)</li>
              <li>Malayalam (Native)</li>
              <li>Tamil</li>
              <li>Hindi</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-500/20 text-center">
          <p>&copy; 2025 Saran S Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

