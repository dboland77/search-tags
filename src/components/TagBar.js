import React from 'react'

const TagBar = (props) => {
  const data = props.props
 if(Object.keys(data).length>0){
   console.log(data)
   return (
     <ul>
     {data.map((item,index) => {
         return <li key = {index}>{item.name}</li>
     })}
     </ul>
    
   )
 }
 else{
   return <p></p>
 }
}

export default TagBar
