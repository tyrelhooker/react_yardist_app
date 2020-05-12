import React from 'react';



const StaticPlants = ({ staticPlantData }) => {
  // const nameNormalizer = (name) => name.toLowerCase().replace(/ /g, "_"); 

  const savedPlants = staticPlantData;
  
  return (
    // <p>{savedPlants[1]["common name"]}</p>
    savedPlants.map((plant, i) => 
      <div key={i}>
        <h2>{plant.scientific_name}</h2>
        
        <div className="common-name">
          <h3>Common Name</h3>
          {plant.common_name.map((com_name, j) =>
            <p key={j}>{`${com_name}`}</p>
          )}
        </div>
      </div>
    )
  )
}

export default StaticPlants;