import React, { useState } from 'react';

export const useAgeForm = callback => {
  const [displayAge, setDisplayAge] = useState(0);
  const [age, setAge] = useState(0);

  // manage click event
  const handleClick = e => {
    e.preventDefault();
    setAge(e.target.form[0].value);
    setDisplayAge(0);
  };

  // manage change event
  const handleChange = e => {
    setDisplayAge(e.target.value);
  };

  return {
    displayAge,
    age,
    handleClick,
    handleChange
  };
};
