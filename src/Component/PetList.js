import React, { useState ,useEffect} from 'react'
import AddPet from './AddPet'
import PetCard from './PetCard'

const PetList = () => {
let pets = [
    {id : 1 , pic :"logo192.png",name : "bouchka", race :"angola", region : "tunis"},
    {id : 2 , pic :"logo192.png",name : "rika", race :"egyptian", region : "ben arous"},
    {id : 3 , pic :"logo192.png",name : "frifer", race :"himalaya", region : "tunis"},
    {id : 4 , pic :"logo192.png",name : "sally", race :"angola", region : "sousse"}
    ]
let [pet,setPet]= useState(pets)
let [show,setShow]= useState(false)

const [search,setSearch]=useState()

const handelAdd = (newPet)=>{
  setPet([...pet,newPet])
}

useEffect(()=>{
      // traja3 l tableau ll etat initial
  setPet(pets)
},[search])


const handelSearch = ()=> {

  let res = pets.filter(el => el.name === search || el.race === search || el.region === search); 
  setPet(res)
  if(search === "" || search === undefined){
    // traja3 l tableau ll etat initial
    setPet(pets)
  }
}

const handelShow =()=>{
  setShow(!show)
}
  return (
    <div>
      search : <input type='search' onChange={event=> setSearch(event.target.value)}/>
      <button onClick={handelSearch}>
        search
      </button>
      {/* button pour le hide et show */}
      <button onClick={handelShow}>{show ? 'hide' : 'show'} </button>
      {show ? <AddPet handelAdd={handelAdd}/>: null}
        {pet.map(el => <PetCard element ={el}/>)}
    </div>
  )
}

export default PetList
