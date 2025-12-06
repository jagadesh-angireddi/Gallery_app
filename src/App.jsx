import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

   async function onSubmit(){
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)

    setUserData(response.data)

  }

  
   

  useEffect(function(){onSubmit()},[index])

  let printUserData="Loading...."

  if (userData.length>0){
    printUserData = userData.map(function(elem){
      
      return <a href={elem.url} target='_blank' key={elem.url}>
        <div>
        <div className='h-40 w-44 rounded-xl overflow-hidden'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
        
      </div>
        <h3 className='text-lg'>{elem.author}</h3>
      </div>
      </a>
    })
  }

  return (
    <div className='bg-black h-screen px-5 py-5 text-white overflow-auto'>
    
      <div className='flex gap-3 justify-center items-center flex-wrap py-5 h-[82%]'>{printUserData}</div>
      <div className='flex flex-row gap-6 justify-center items-center p-4'>

        <button className='bg-red-400 p-3 font-black cursor-pointer active:scale-95' onClick={()=>{
          
          if(index>1){
            setIndex(index-1)
            userData([])

        }}}>Prev</button>
        <h4>{index}</h4>
        <button className='bg-red-400 p-3 font-black active:scale-95' onClick={()=>{setIndex(index+1)}}>Next</button>
      </div>
    </div>
  
  )
}

export default App