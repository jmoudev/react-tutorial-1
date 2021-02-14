import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <main className="exampleList">
        <Example1 />
        <Example2 />
      </main>
    </div>
  );
}

export default App;
