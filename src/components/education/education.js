import React from 'react'
import EducationCard from './educationCard'

const Education = ({data}) =>{
    return  <div className='education'> {data.map(e => {
        return  <EducationCard
        data={e}
        />
}
    )
}
</div>
}
export default Education