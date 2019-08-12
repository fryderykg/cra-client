import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './add-company.scss';

const AddCompany = () => {
  const [name, setName] = useState('');

  const nameHandler = (e) => {
    setName(e.target.value)
  };
  
  const addUserHandler = (e) => {
    e.preventDefault();
    console.log('name', name);

    const data = {
      user: {
        name: name,
      }
    };
    
    console.log(data);
    
    fetch('/api/company', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
  };
  
  return (
    <div>
      <h2>
        Dodaj firmę
      </h2>
      <form>
        <div className='input-field'>
          <input
            type="text"
            value={name}
            placeholder='Nazwa'
            onChange={nameHandler}
          />
        </div>

        <button onClick={addUserHandler}>
          Dodaj
        </button>
      </form>
    </div>
  );
};

// AddCompany.propTypes = {
//
// };

export default AddCompany;