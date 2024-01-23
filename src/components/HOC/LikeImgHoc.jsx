import React from 'react'
import CommonHoc from './CommonHoc'

const LikeImgHoc = ({handelCount,count}) => {
  return (
    <div>
        <button onClick={handelCount}>Like Image {count}</button>
    </div>
  )
}

export default CommonHoc(LikeImgHoc)