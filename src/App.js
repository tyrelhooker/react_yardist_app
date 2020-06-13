import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import AddPlantForm from './components/AddPlantForm';
import PlantsList from './components/PlantsList';
// import StaticPlants from './components/StaticPlants';
import Count from './components/Count';

import './stylesheets/App.scss';

const App = () => {

  // window.onunload = () => window.localStorage.clear();

  // const initializePlants = localStorage.getItem('storedPlants');
  const initializeCount = JSON.parse(localStorage.getItem('storedCount')) || 0;

  const [plants, setPlants] = useState([]);
  const [count, setCount] = useState(initializeCount);

  const handleDecrement = () =>
    setCount(currentCount => currentCount - 1);
  
  const handleIncrement = () =>
    setCount(currentCount => currentCount + 1);
  
  useEffect(() => {
    localStorage.setItem('storedCount', JSON.stringify(count));
    console.log(localStorage);
    }, [count]);

  

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

  useEffect(() => {
    localStorage.setItem('storedPlants', plants);
    // plants.map(plant => JSON.stringify(plant)));
    console.log(localStorage); 
    // setPlants(localStorage.getItem('storedPlants'))
  }, [plants]);




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
