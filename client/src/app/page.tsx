import Image from 'next/image'
// import styles from './page.module.css'
import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
// import UserContext from '@/contexts/userContext';
import Link from 'next/link'
import Intro from './components/Intro'
import About from './components/About'
import Employers from './components/Employers'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className="">
      <Intro />
      <About />
      <Employers />
      <Projects />
      <footer className="text-center text-aqua">
        <div>
          <Link href="https://github.com/tewkesburyd" rel="noopener noreferrer" target="_blank" className="pb-16 hover:text-salmon">Built by David Tewkesbury &copy;2023</Link>
        </div>
      </footer>
    </main>
  )
}
