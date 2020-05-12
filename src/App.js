import React, { useState, useEffect } from 'react';
import StaticPlants from './components/StaticPlants';
import logo from './logo.svg';
import './App.css';

function App({ staticPlantData }) {
  const [myPlants, setMyPlants] = useState([]);
  const [inputValue, setInputValue] = useState('');

  console.log(staticPlantData);

  const handleSubmit = e => {
    e.preventDefault();


    if (myPlants.includes(inputValue)) {
      console.log('Already in array.')
      console.log(myPlants);
      setInputValue('');
      const errorMessage = <p>{`The ${inputValue} is already in your plants.`}</p>
    } else {
        const newPlants = [...myPlants, inputValue];
        setMyPlants(newPlants);
        setInputValue('');
        console.log(myPlants);
    } 
  
  };

  const addedPlants = myPlants.filter(plant => 
    plant.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
   console.log(myPlants);
  }, [myPlants]);


  return (
    <div className="App">
      <h1>My Plants </h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor='addPlant'>Add a Plant: </label>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      </form>
      <ul>
        {addedPlants.map((plant) =>
          <li>{plant}</li>
        )}
      </ul>
      <hr></hr>
      <div className="static-plants-box">
        {staticPlantData.data.map((staticPlant, i) =>
          <StaticPlants key={i} {...staticPlant} />
        )}
        
      </div>
    </div>
  );
}

export default App;
