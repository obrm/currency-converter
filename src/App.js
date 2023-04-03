import CurrencyConverter from './pages/CurrencyConverter';
import { PwaInstallPrompt } from './components';

function App() {
  return (
    <div className='App'>
      <CurrencyConverter /> 
      <PwaInstallPrompt />
    </div>
  );
}

export default App;