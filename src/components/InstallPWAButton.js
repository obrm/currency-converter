import { useEffect } from 'react';

import { connectTo, takeFromState } from '../utils/generic';
import { saveInstallProposalEvent, promptToAddToHomeScreen } from '../actions/generic';
import Button from './Button';

const InstallPWAButton = ({ proposalEvent, promptToAddToHomeScreen }) => {
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      saveInstallProposalEvent(e);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', e => {
        saveInstallProposalEvent(e);
      });
    };
  }, []);

  const onClickHandler = () => {
    promptToAddToHomeScreen();
    proposalEvent.prompt();
  };

  return (
    <Button className='install-pwa-btn' onClick={onClickHandler} >להתקנת האפליקציה</Button>
  );
};

export default connectTo(
  state => takeFromState(state, 'generic', ['proposalEvent']),
  { promptToAddToHomeScreen },
  InstallPWAButton
);
