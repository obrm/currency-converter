import useInstallPrompt from './hooks/use-install-prompt';

import CurrencyConverter from './pages/CurrencyConverter';
import { Button } from './components';

function App() {
  const { showInstallPrompt, installPromptEvent } = useInstallPrompt();

  return (
    <div className='App'>
      {installPromptEvent && <Button className='install-pwa-btn' clickHandler={showInstallPrompt}>להתקנת האפליקציה</Button>}
      <CurrencyConverter /> 
    </div>
  );
}

export default App;