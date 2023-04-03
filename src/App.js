import { useEffect } from 'react';

import useInstallPrompt from './hooks/use-install-prompt';

import CurrencyConverter from './pages/CurrencyConverter';
import { Button } from './components';

function App() {
  const { showInstallPrompt, installPromptEvent } = useInstallPrompt();

  useEffect(() => {
    if (installPromptEvent) {
      showInstallPrompt();
    }
  }, [installPromptEvent, showInstallPrompt]);  

  return (
    <div className='App'>
      {installPromptEvent && <Button className='install-pwa-btn' clickHandler={showInstallPrompt}>להתקנת האפליקציה</Button>}
      <CurrencyConverter />
    </div>
  );
}

export default App;