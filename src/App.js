import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import AddPlantForm from './components/AddPlantForm';
import PlantsList from './components/PlantsList';
// import StaticPlants from './components/StaticPlants';
import Count from './components/Count';

import './stylesheets/App.scss';

function App({ staticPlantData }) {
  const [plants, setPlants] = useState([]);
  const [count, setCount] = useState(0);

  const handleDecrement = () =>
    setCount(currentCount => currentCount - 1);
  
  const handleIncrement = () =>
    setCount(currentCount => currentCount + 1);

  useEffect(() => setCount(currentCount => currentCount + 1), [])

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
      <Count testCount={count} onDecrement={handleDecrement} onIncrement={handleIncrement}/>
      <AddPlantForm onNewPlant={addPlant} />
      <PlantsList plants={plants} onRemove={removePlant} />
    </div>
  );
}

export default App;
