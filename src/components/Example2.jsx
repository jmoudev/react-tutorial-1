import React from 'react';

export default function Example2() {
  const [language, setLanguage] = React.useState('python');
  const [yearsExperience, setYearsExperience] = React.useState(0);
  const [displayLanguage, setDisplayLanguage] = React.useState('');

  return (
    <section className="example">
      <h2>Example 2</h2>
      <form action="">
        <input
          type="text"
          value={displayLanguage}
          onChange={e => {
            setDisplayLanguage(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={e => {
            e.preventDefault();
            setLanguage(e.target.form[0].value);
            setDisplayLanguage('');
          }}
        >
          Change language
        </button>
      </form>
      <input
        type="number"
        value={yearsExperience}
        onChange={event => setYearsExperience(event.target.value)}
      />
      <p>I am now learning {language}</p>
      <p>I have {yearsExperience} years of experience</p>
    </section>
  );
}
