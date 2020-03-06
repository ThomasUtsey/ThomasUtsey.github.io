import React from 'react'
import './profilecard.css'

const ProfileCard = ({data}) =>{
 
return(
    <div className='profile-card'>
     <div className = 'name-container'>
    <h1>{data.name}</h1>
    <h2>{data.label}</h2>
    </div>
    <div className='profile-card-mid'>
    <img src={data.picture} alt="pic of me"/>
   
    <div className='headline'>
    <h2>"{data.headline}"</h2>
    </div>
    </div>
    </div>
)
}
export default ProfileCard