import { useEffect, useState } from 'react';

const useInstallPrompt = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);

  useEffect(() => {
    const showInstallPrompt = () => {
      if (installPromptEvent) {
        // Show the install prompt
        installPromptEvent.prompt();

        // Check the user's response
        installPromptEvent.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          // Clear the saved prompt event
          setInstallPromptEvent(null);
        });
      }
    };

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPromptEvent(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    showInstallPrompt();

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [installPromptEvent]);
};

export default useInstallPrompt;
