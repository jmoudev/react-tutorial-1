import { useState } from 'react';
import { useAgeForm } from './CustomHooks';

export default function Example1() {
  const [name, setName] = useState('Joe'); // creates a state variable

  const changeName = name => {
    setName(name);
  };

  const { displayAge, age, handleSubmit, handleChange } = useAgeForm();

  return (
    <section className="example">
      <h2>Example 1</h2>
      <button onClick={() => changeName('Jared')}>I am Jared</button>
      <button onClick={() => changeName('Joe')}>I am Joe</button>
      <p>My name is {name}</p>
      <form action="">
        <input
          type="number"
          placeholder="type age"
          value={!displayAge ? '' : displayAge}
          onChange={handleChange}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
      {!!age && <p>I am {age} years old</p>}
    </section>
  );
}
