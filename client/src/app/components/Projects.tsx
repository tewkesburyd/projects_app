import Link from 'next/link'

export default function Projects(){
    return (
        <>
            <div className='mx-auto w-3/4 mb-20 text-4xl text-silver font-bold'>
                <h1><em className='text-salmon mr-2'>//</em> Noteworthy Projects</h1>
            </div>
            <div id="projects" className="divide-y w-3/4 m-auto pb-48 overflow-hidden rounded-none drop-shadow-xl sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            {/* {projects.map((project, projectIdx) => (
            <Project projects={projects} setProjects={setProjects} project={project} projectIdx={projectIdx} length={project.length} />
            ))} */}
            insert projects
            </div>
            <div className="mx-auto text-center mb-40 max-w-2xl">
                <h1 className="text-salmon text-4xl mb-6 font-bold">Reach Out</h1>
                <p className="text-silver text-xl">I'm always looking for new opportunities. If you have any questions or would like to work together, please feel free to reach out!</p>
                <button className="px-8 py-2 mt-10 border border-mustard text-mustard"><Link href="/contact">Say Hello</Link></button>
            </div>
      </>
    )
}