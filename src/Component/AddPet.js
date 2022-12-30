import React, {useState} from 'react'

const AddPet = ({handelAdd}) => {

    let [picturee,setPicture]=useState()
    let [namee,setName]=useState()
    let [racee,setrace]=useState()
    let [regionn,setRegion]=useState()

const AddNewwPet =()=>{
  handelAdd({
              id : Date.now(),
              name : namee,
              race : racee,
              region : regionn,
              pic : picturee
            })
}

  return (
    <div>
        picture :    <input type='text' onChange={(event)=>setPicture(event.target.value)}/>
        name    :    <input type='text'onChange={(event)=>setName(event.target.value)}/> 
        race    :    <input type='text' onChange={(event)=>setrace(event.target.value)}/> 
        region  :    <input type='text' onChange={(event)=>setRegion(event.target.value)}/> 
        <button onClick={AddNewwPet}>
          Add
          </button>
    </div>
  )
}

export default AddPet

