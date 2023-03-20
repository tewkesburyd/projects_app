import Link from 'next/link'

export default function Intro(){
    return (
        <div className="mt-36 m-auto pl-8 max-w-[1000px]">
        <p className="text-aqua text-base">Hi, my name is</p>
          <h1 className="pt-4 text-7xl font-bold text-white">David Tewkesbury.</h1>
          {/* <h1 className="pt-4 text-7xl font-bold text-silver">I'm a Digital Crafter.</h1> */}
          <p className="pt-8 pb-4 text-xl w-1/2 text-silver">I am a software engineer that has a passion for building user-friendly <em className="text-salmon not-italic">full-stack applications.</em>
        </p>
        <button className="px-8 py-2 mt-10 border border-mustard text-mustard"><Link href="/contact">Say hello</Link></button>
      </div>
    )
}