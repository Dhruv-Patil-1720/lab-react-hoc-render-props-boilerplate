import React from 'react'
import RenderProp from './RenderProps'

const LikeImageProps = () => {
  return (
    <RenderProp>
           {
            ({count,handleCount})=>(
                <button onClick={handleCount}>Like Image {count}</button>
            )
        }
    </RenderProp>
  )
}

export default LikeImageProps