import './App.css';
import { Counter } from './components/Counter';
import { CounterDisplay } from './components/CounterDisplay';


function App() {
  return (
    <div className="container">
      App component
      <Counter />
      <CounterDisplay />
    </div>
  );
}

export default App;
