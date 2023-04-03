import CurrencyConverter from './pages/CurrencyConverter';
import { InstallPWAButton } from './components';

function App() {
  return (
    <div className='App'>
      <InstallPWAButton />
      <CurrencyConverter /> 
    </div>
  );
}

export default App;