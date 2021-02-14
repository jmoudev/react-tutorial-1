import { useState } from 'react';

export const useAgeForm = () => {
  const [userInfo, setUserInfo] = useState({
    displayAge: 0,
    age: 0,
    name: ''
  });

  const changeAge = e => {
    const displayAge = e.target.value;

    setUserInfo(prevState => ({ ...prevState, displayAge }));
  };

  const recordName = e => {
    const name = e.target.innerText;

    setUserInfo(prevState => ({ ...prevState, name }));
  };

  const recordAge = e => {
    e.preventDefault();
    const age = e.target.form[0].value;

    setUserInfo(prevState => ({ ...prevState, age, displayAge: 0 }));
  };

  return {
    userInfo,
    changeAge,
    recordName,
    recordAge
  };
};
