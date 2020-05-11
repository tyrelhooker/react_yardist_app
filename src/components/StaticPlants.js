import React from 'react';



const StaticPlants = ({ staticPlantData }) => {
  const nameNormalizer = (name) => name.toLowerCase().replace(/ /g, "_"); 

  const savedPlants = staticPlantData.map((key) => nameNormalizer(key))
  
  return (
    // <p>{savedPlants[1]["common name"]}</p>
    savedPlants.map((plant, i) => 
      <div key={i}>
        <p>{plant.scientific_name}</p>
        <p>{plant.common_name}</p>
      </div>
    )
  )
}

export default StaticPlants;