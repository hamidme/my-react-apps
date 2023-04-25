import { useState } from 'react'
import heart from './heart.png'


function AnimalShow({animalType}){
    const [expImage, setExpImage] = useState([80,60])
    const handleClick = function(){
        return (
            setExpImage(expImage.map(e => e*1.33))
        )
    }

    return (
        <>
            <div onClick={handleClick} className="col mb-3">
                <figure>
                   {animalType}
                   <figcaption>Click me if you love to adopt me?</figcaption>
                </figure>
                
                <img src={heart} alt='heart' srcSet="" height={expImage[1]} width={expImage[0]}/>
            </div>
        </>
    )
}

export default AnimalShow