import useInstallPrompt from './hooks/useInstallPrompt';

import CurrencyConverter from './pages/CurrencyConverter';

function App() {
  useInstallPrompt()

  return (
    <div className='App'>
      <CurrencyConverter /> 
    </div>
  );
}

export default App;