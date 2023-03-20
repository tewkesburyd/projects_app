import Link from 'next/link'

export default function NavBar() {
    return (
        <div className='grid grid-cols-4'>
        <p className='z-10 col-span-3 mt-5 text-base px-10 place-content-start text-aqua'><Link href="/">David Tewkesbury</Link></p>
        <ul className="z-20 flex items-center place-content-end mt-5 px-20 text-sm text-aqua">
          <li className="px-5 hover:text-silver"><Link href="/#about"><em className='text-salmon mr-2'>//</em>About</Link></li>
          <li className="px-5 hover:text-silver"><Link href="/#work"><em className='text-salmon mr-2'>//</em>Work</Link></li>
          <li className="px-5 hover:text-silver"><Link href="/#projects"><em className='text-salmon mr-2'>//</em>Projects</Link></li>
          <li className="px-5 hover:text-silver"><Link href="/Contact"><em className='text-salmon mr-2'>//</em>Contact</Link></li>
          {/* {router.asPath.slice(0, 10) != "/dashboard" ? button : null} */}
        </ul>
      </div>
    )
}