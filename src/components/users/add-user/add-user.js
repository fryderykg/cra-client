import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './add-user.css';

const AddUser = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  
  const nameHandler = (e) => {
    setName(e.target.value)
  };
  
  const surnameHandler = (e) => {
    setSurname(e.target.value)
  };
  
  const emailHandler = (e) => {
    setEmail(e.target.value)
  };
  
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  };
  
  const repeatPasswordHandler = (e) => {
    setRepeatPassword(e.target.value)
  };
  
  const addUserHandler = (e) => {
    e.preventDefault();
    console.log('name', name);
    console.log('surname', surname);
    console.log('email', email);
    console.log('password', password);
  
    const data = {
      user: {
        first_name: name,
        last_name: surname,
        email: email,
        password: password
      }
    };
    
    console.log(data);
    
    fetch('/api/user', {
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
        Dodaj użytkownika
      </h2>
      <form>
        <div className='input-field'>
          <input
            type="text"
            value={name}
            placeholder='imię'
            onChange={nameHandler}
          />
        </div>
        <div className='input-field'>
          <input
            type="text"
            value={surname}
            placeholder='nazwisko'
            onChange={surnameHandler}
          />
        </div>
        <div className='input-field'>
          <input
            type="email"
            value={email}
            placeholder='adres email'
            onChange={emailHandler}
          />
        </div>
        <div className='input-field'>
          <input
            type="password"
            value={password}
            placeholder='hasło'
            onChange={passwordHandler}
          />
        </div>
        <div className='input-field'>
          <input
            type="password"
            value={repeatPassword}
            placeholder='powtórz hasło'
            onChange={repeatPasswordHandler}
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

export default AddUser;