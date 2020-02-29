import React from 'react'
import ProjectCard from './projectCard'
import './projects.css'

const Projects = ({data}) =>{
    
 return  <div className='projects'> {data.map(e => {
  return  <ProjectCard
  data={e}
  />

})}
</div> 
}
export default Projects