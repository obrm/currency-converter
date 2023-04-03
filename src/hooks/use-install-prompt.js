import { useCallback, useEffect, useState } from 'react';

const useInstallPrompt = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);

  const showInstallPrompt = useCallback(() => {
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
  }, [installPromptEvent]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // Prevent Chrome 76 and later from showing the mini-infobar
      event.preventDefault();
      // Save the event so it can be triggered later
      setInstallPromptEvent(event);
    };

    showInstallPrompt();

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Clean up the event listener
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [showInstallPrompt]);


  return { showInstallPrompt, installPromptEvent };
};

export default useInstallPrompt;