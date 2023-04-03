import CurrencyConverter from './pages/CurrencyConverter';

import { PwaInstallPrompt } from './components';

function App() {
  return (
    <div className='App'>
      <PwaInstallPrompt />
      <CurrencyConverter /> 
    </div>
  );
}

export default App;