import React from 'react'
import RenderProp from './RenderProps'
const LikePostProps = () => {
  return (
    <RenderProp>
                   {
            ({count,handleCount})=>(
                <button onClick={handleCount}>Like Post {count}</button>
            )
        }
    </RenderProp>
  )
}

export default LikePostProps