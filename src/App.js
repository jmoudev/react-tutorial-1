import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <main className="exampleList">
        <Example1 />
        <Example2 />
        <Example3 />
      </main>
    </div>
  );
}

export default App;
