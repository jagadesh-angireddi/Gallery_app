import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './Components/Card'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

   async function onSubmit(){
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)

    setUserData(response.data)

   }

    useEffect(()=>{onSubmit()},[index])

    let printUserData = "Loading...."

    if (userData.length>0){
      printUserData = userData.map(function(elem){
        
        return (
        <div key={elem.id} >
          <Card elem={elem}></Card>
        </div>
        )
        
      })
    }

  return (
    <div className='bg-black h-screen px-5 py-5 text-white overflow-auto'>

      <div className='flex gap-3 justify-center items-center flex-wrap py-5 h-[82%]'>{printUserData}</div>

      <div className='flex flex-row gap-6 justify-center items-center p-4'>
        <button style={{opacity:index>1?1:0.5}} className='bg-red-400 p-3 font-black cursor-pointer active:scale-95' onClick={()=>{
        if(index>1){
            setIndex(index-1)
        }}}>Prev
        </button>

        <h4>Page no {index}</h4>
        
        <button className='bg-red-400 p-3 font-black active:scale-95' onClick={()=>{setIndex(index+1)}}>Next</button>
      </div>
    </div>
  
  )
}

export default App