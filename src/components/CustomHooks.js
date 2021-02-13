import React, { useState } from 'react';

export const useAgeForm = callback => {
  const [displayAge, setDisplayAge] = useState(0);
  const [age, setAge] = useState(0);

  // manage submit event
  const handleSubmit = e => {
    e.preventDefault();
    setAge(e.target.value);
  };

  // manage change event
  const handleChange = e => {
    setDisplayAge(e.target.value);
  };

  return {
    displayAge,
    age,
    handleSubmit,
    handleChange
  };
};
