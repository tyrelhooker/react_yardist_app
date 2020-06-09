import React from 'react';

const PlantsList = ({ plants=[] }) => 
  <div className='plants'>
    {plants.map(plant =>
      <div className='plant' key={plants.id}>
        <h2>{plant.scientificName}</h2>
        <h3>{plant.commonName}</h3>
      </div>)}
  </div>

export default PlantsList;