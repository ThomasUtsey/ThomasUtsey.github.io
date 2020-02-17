import React from 'react'
import './profilecard.css'

const ProfileCard = ({data}) =>{
    console.log(data)
return(
    <div className='profile-card'>
    <img src={data.picture} alt="pic of me"/>
    <div className = 'name-container'>
    <h2>{data.name}</h2>
    <h3>{data.label}</h3>
    
    </div>

    </div>
)
}
export default ProfileCard