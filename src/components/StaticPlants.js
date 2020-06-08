import React from 'react';



const StaticPlants = ({ scientific_name, common_name }) => {
  const nameNormalizer = (name) => 
    name.toLowerCase().replace(/ /g, "_"); 

  // const savedPlants = staticPlantData;
  console.log(scientific_name);
  
  return (
    <div>
      <h2>{scientific_name}</h2>
      <div className="common-name">
        <h3>Common Name</h3>
        {common_name.map((com_name, j) =>
          <p key={j}>{`${com_name}`}</p>
        )}
      </div>
    </div>
  )
}

export default StaticPlants;