import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { findAllByTitle } from '@testing-library/react';
// import '../stylesheets/AddPlantForm.scss';

const AddPlantForm = ({ onNewPlant= f=>f }) => {
  const scientificNameInput = useRef();
  const commonNameInput = useRef();

  const submit = e => {
    e.preventDefault();
    onNewPlant(scientificNameInput.current.value, commonNameInput.current.value);
    scientificNameInput.current.value='';
    commonNameInput.current.value='';
    scientificNameInput.current.focus();
  };

  return (
    <form className='add-plant' onSubmit={submit}>
      <input
        ref={scientificNameInput}
        type='text'
        placeholder={`add a plant's scientific name`}
        required
      />
      <input
        ref={commonNameInput}
        type='text'
        placeholder={`add a plant's common name`}
        required
      />
      <button>ADD</button>
    </form>
  )
}

AddPlantForm.propTypes = {
  onNewPlant: PropTypes.func
};

export default AddPlantForm;