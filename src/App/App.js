
import './App.scss';

// === component
import ButtonDefault from './Components/1.Default';
import ButtonOutline from './Components/2.Outline';
import ButtonText from './Components/3.Text';
import DisabledShadow from './Components/4.DisabledShadow';
import Disabled from './Components/5.Disabled';

function App() {
  return (
    <div className="App">
      <h1 style={{margin: 0, marginBottom: '1em'}}>Buttons</h1>
      <ButtonDefault />
      <div style={{marginBottom: '1em'}}/>
      <ButtonOutline />
      <div style={{marginBottom: '1em'}}/>
      <ButtonText />
      <div style={{marginBottom: '1em'}}/>
      <DisabledShadow />
      <div style={{marginBottom: '1em'}}/>
      <Disabled />
    </div>
  );
}

export default App;
