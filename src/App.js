import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import AddPlantForm from './components/AddPlantForm';
import PlantsList from './components/PlantsList';
import './stylesheets/App.scss';

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
    try {
      // Allow value to be a function to have same API as useState
      console.log(value);
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



const App = () => {
  // Plants
  const [plants, setPlants] = useLocalStorage('storedPlants', []);

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

  // useEffect(() => window.localStorage.setItem('storagePlants', JSON.stringify(plants)), [plants]);


  return (
    <div className="App">
      <AddPlantForm onNewPlant={addPlant} />
      <PlantsList plants={plants} onRemove={removePlant} />
    </div>
  );
}



export default App;
