
import './App.scss';

// === component
import ButtonDefault from './Components/1.Default';
import ButtonOutline from './Components/2.Outline';
import ButtonText from './Components/3.Text';
import DisabledShadow from './Components/4.DisabledShadow';
import Disabled from './Components/5.Disabled';
import ButtonIcon from './Components/6.Icon';
import ButtonSize from './Components/7.Size';
import ButtonColor from './Components/8.Color';
import ButtonPrimary from './Components/9.Primary';
import ButtonSecondary from './Components/10.Secondary';
import ButtonDanger from './Components/11.Danger';

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
      <div style={{marginBottom: '1em'}}/>
      <ButtonIcon />
      <div style={{marginBottom: '1em'}}/>
      <ButtonSize />
      <div style={{marginBottom: '1em'}}/>
      <ButtonColor />
      <div style={{marginBottom: '1em'}}/>
      <ButtonPrimary />
      <div style={{marginBottom: '1em'}}/>
      <ButtonSecondary />
      <div style={{marginBottom: '1em'}}/>
      <ButtonDanger />
    </div>
  );
}

export default App;
