import React from 'react'
import './projects.css'

const ProjectCard = ({data}) =>{
    console.log(data)
    return(
        <div className="project-card">
            <h2 className='proj-title'>{data.name}</h2>
            <div className="proj-dsc">{data.summary}</div> 
            <div ><ul className="proj-tech">
            <div className='tech-list'>
                <h3>Languages</h3>
                {data.languages.map(e =>
                <li>{e}</li>
                )}</div>
                <div className='tech-list'>
                <h3>Packages</h3>
                {data.libraries.map(e =>
                
                <li>{e}</li>
                
                )}
                </div>
                </ul></div>
            <div className="proj-links">links</div>
            <a href={data.githubUrl}>GitHub</a>
        </div>
        )
}
export default ProjectCard