import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import AddPlantForm from './components/AddPlantForm';
import PlantsList from './components/PlantsList';
// import StaticPlants from './components/StaticPlants';

// import './stylesheets/App.scss';

function App({ staticPlantData }) {
  const [plants, setPlants] = useState([]);

  const addPlant = (scientificName, commonName) => {
    const newPlants = [
      ...plants,
      {
        id: v4(),
        scientificName,
        commonName
      }
    ];
    setPlants(newPlants);
  }

  const removePlant = (id) => {
    const revisedPlants = plants.filter( plant => plant.id !== id );
    setPlants(revisedPlants);
  }


  return (
    <div className="App">
      <AddPlantForm onNewPlant={addPlant} />
      <PlantsList plants={plants} onRemove={removePlant} />
    </div>
  );
}

export default App;
