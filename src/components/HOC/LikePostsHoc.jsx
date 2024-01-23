import React from 'react'
import CommonHoc from './CommonHoc'

const LikePostsHoc = ({handelCount,count}) => {
  return (
    <div>
        <button onClick={handelCount}>Like Posts {count}</button>
    </div>
  )
}

export default CommonHoc(LikePostsHoc)