import { useEffect, useState } from 'react';

const useInstallPrompt = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPromptEvent(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

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

  return { showInstallPrompt, installPromptEvent };
};

export default useInstallPrompt;