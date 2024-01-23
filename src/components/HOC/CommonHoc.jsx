import React from 'react'

const CommonHoc = (ChildComp) => {
    let logic=()=>{
        //count
        const [count,setCount]=React.useState(0)
        // func
        function handelCount(){
            setCount(count+1)
        }
        return <ChildComp handelCount={handelCount} count={count} />
    }
  return logic
   
}

export default CommonHoc