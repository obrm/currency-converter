import { useEffect } from 'react';

const PwaInstallPrompt = () => {
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      console.log('beforeinstallprompt event fired');
    };

    const handleAppInstalled = () => {
      console.log('App installed');
    };

    // Add a delay before adding the event listeners
    setTimeout(() => {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.addEventListener('appinstalled', handleAppInstalled);
    }, 2000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  return null;
};

export default PwaInstallPrompt;
