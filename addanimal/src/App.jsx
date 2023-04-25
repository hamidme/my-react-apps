import AnimalShow from "./AnimalShow";
import Animals from "./Animals"
import { useState } from "react"
import "./App.css"

const animalKan = () => Animals[Math.floor(Math.random()*Animals.length)].image

function App(){
  const [animalList, setAnimalList ] = useState([])

  const handleClick = () => setAnimalList([...animalList, animalKan()])

  return (
    <>
      <div className="app">
        <button onClick={handleClick}>Add Animal</button>
        <p>Animal to show</p>
        <div className="row">
          {animalList.map((animal, index) => <AnimalShow animalType = {animal} key={index} />)}
        </div>
      </div>
    </>
  )
  
  
}

export default App;