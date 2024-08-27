import React from 'react'
import { Skeleton, Card } from 'antd'

const Skeletons = ({limit = 8}) => {
  return <div className='container mx-auto grid grid-cols-4 gap-3'>

    {
        new Array(limit).fill().map((_, inx)=>(
            <Card key={inx}>
                <Skeleton/>
        
            </Card>
          ))
    }
  </div>
}

export default Skeletons