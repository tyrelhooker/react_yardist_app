import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import AddPlantForm from './components/AddPlantForm';
import PlantsList from './components/PlantsList';
// import StaticPlants from './components/StaticPlants';
import Count from './components/Count';

import './stylesheets/App.scss';

function App({ staticPlantData }) {
  const initializePlants = () => {
    try {
      const item = window.localStorage.getItem('storagePlants');

      return JSON.parse(item) || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  const [plants, setPlants] = useState(initializePlants);
  const [count, setCount] = useState(0);

  const handleDecrement = () =>
    setCount(currentCount => currentCount - 1);
  
  const handleIncrement = () =>
    setCount(currentCount => currentCount + 1);

  

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

  useEffect(() => window.localStorage.setItem('storagePlants', JSON.stringify(plants)), [plants]);


  return (
    <div className="App">
      {console.log({plants})}
      <Count testCount={count} onDecrement={handleDecrement} onIncrement={handleIncrement}/>
      <AddPlantForm onNewPlant={addPlant} />
      <PlantsList plants={plants} onRemove={removePlant} />
    </div>
  );
}

export default App;
