import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
