import React from 'react';
import '../stylesheets/PlantList.scss'

const PlantsList = ({ plants=[], onRemove=f =>f }) => 
  <div className='plants'>
    {plants.map(plant => (
      <section className='plant' key={plant.id}>
        <button onClick={() => onRemove(plant.id)}>X</button>
        {/* <div > */}
          <h2>{plant.scientificName}</h2>
          <h3>{plant.commonName}</h3>
        {/* </div> */}
      </section>
    ))}
      
  </div>

export default PlantsList;