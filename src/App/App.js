
import './App.scss';

// === component
import ButtonDefault from './Components/Default'
import ButtonOutline from './Components/Outline'

function App() {
  return (
    <div className="App">
      <h1 style={{margin: 0, marginBottom: '1em'}}>Buttons</h1>
      <ButtonDefault />
      <ButtonOutline />
    </div>
  );
}

export default App;
