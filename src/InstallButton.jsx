import React, { useState, useEffect } from 'react';

import './button.css';


const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }

        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div className="btn-ins-div">
    <button className='btn-ins' onClick={handleInstallClick} disabled={!deferredPrompt}>
      Install App
    </button>
    </div>
  );
};

export default InstallButton;