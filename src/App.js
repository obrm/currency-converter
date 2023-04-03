import CurrencyConverter from './pages/CurrencyConverter';
import { PwaInstallButton } from './components';

function App() {
  return (
    <div className='App'>
      <PwaInstallButton />
      <CurrencyConverter /> 
    </div>
  );
}

export default App;