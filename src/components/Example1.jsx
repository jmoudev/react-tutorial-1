import { useAgeForm } from './CustomHooks';

export default function Example1() {
  const {
    userInfo: { displayAge, age, name },
    changeAge,
    recordName,
    recordAge
  } = useAgeForm();

  return (
    <section className="example">
      <h2>Example 1</h2>
      <p>What is your name?</p>
      <button onClick={recordName}>Jared</button>
      <button onClick={recordName}>Joe</button>
      <p>What is your age?</p>
      <form action="">
        <input
          type="number"
          placeholder="type age"
          value={!!displayAge && displayAge}
          onChange={changeAge}
        />
        <button type="button" onClick={recordAge}>
          Submit
        </button>
      </form>
      {!!name && <p>My name is {name}</p>}
      {!!age && <p>I am {age} years old</p>}
    </section>
  );
}
