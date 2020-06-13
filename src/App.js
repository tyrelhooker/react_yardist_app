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
  // const initializeCount = JSON.parse(localStorage.getItem('storedCount')) || 0;

  const [plants, setPlants] = useLocalStorage('storedPlants', []);
  // const [count, setCount] = useState(initializeCount);

  // const handleDecrement = () =>
  //   setCount(currentCount => currentCount - 1);
  
  // const handleIncrement = () =>
  //   setCount(currentCount => currentCount + 1);
  
  // useEffect(() => {
  //   localStorage.setItem('storedCount', JSON.stringify(count));
  //   console.log(localStorage);
  //   }, [count]);

  

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

  

  // const removePlant = (id) => {
  //   const revisedPlants = plants.filter( plant => plant.id !== id );
  //   setPlants(revisedPlants);
  // }

  // useEffect(() => {
  //   localStorage.setItem('storedPlants', plants);
  //   // plants.map(plant => JSON.stringify(plant)));
  //   console.log(localStorage); 
  //   // setPlants(localStorage.getItem('storedPlants'))
  // }, [plants]);




  return (
    <div className="App">
      {console.log({plants})}
      <Count testCount={count} onDecrement={handleDecrement} onIncrement={handleIncrement}/>
      <AddPlantForm onNewPlant={addPlant} />
      <PlantsList plants={plants} onRemove={removePlant} />
    </div>
  );
}

// Hook
function useLocalStorage(key, initialValue) {
  // State to store value. Pass initial state function to useState so logic only used once.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get value from local storage by it key
      const item = window.localStorage.getItem(key);
      // Parse stored JSON or if none return initial value
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If there is an error then return the initialValue
      console.log(error)
      return initialValue;
    }
  });

  const setValue = value => {
    try{
      // Allow value to be a function to have same API as useState
      const valueToStore = 
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error)
    }
  };

  return [storedValue, setValue];
}

export default App;
