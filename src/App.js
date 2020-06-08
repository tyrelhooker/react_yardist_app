import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import AddPlantForm from './components/AddPlantForm';
// import StaticPlants from './components/StaticPlants';

// import './stylesheets/App.scss';

function App({ staticPlantData }) {
  const [plants, setPlants] = useState([]);
  // const [inputValue, setInputValue] = useState('');
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
 

  // const handleSubmit = e => {
  //   e.preventDefault();


  //   if (myPlants.includes(inputValue)) {
  //     console.log('Already in array.')
  //     console.log(myPlants);
  //     setInputValue('');
  //     const errorMessage = <p>{`The ${inputValue} is already in your plants.`}</p>
  //   } else {
  //       const newPlants = [...myPlants, inputValue];
  //       setMyPlants(newPlants);
  //       setInputValue('');
  //       console.log(myPlants);
  //   } 
  
  // };

  // const addedPlants = myPlants.filter(plant => 
  //   plant.toLowerCase().includes(inputValue.toLowerCase())
  // );

  // useEffect(() => {
  //  console.log(myPlants);
  // }, [myPlants]);


  return (
    <div className="App">
      <AddPlantForm onNewPlant={addPlant} />
      {/* <div className="static-plants-box">
        {staticPlantData.data.map((staticPlant, i) =>
          <StaticPlants key={i} {...staticPlant} />
        )}
        
      </div> */}
    </div>
  );
}

export default App;
