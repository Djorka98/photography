import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './appStyles';
import { LoadingBar } from './components/LoadingBar/LoadingBar';
import { Hero } from './components/Hero/Hero';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [hideLoadingBar, setHideLoadingBar] = useState(false);
  const [, setProgress] = useState(0);
  
  const handleProgress = (currentProgress) => {
    setTimeout(() => {
      setProgress(currentProgress);
      if (currentProgress === 100) {
        setLoadingComplete(true);
      }
    }, 0);
  };

  useEffect(() => {
    if (loadingComplete) {
      const delayHero = setTimeout(() => {
        setShowHero(true);
      }, 1250);

      const hideLoadingBarTimeout = setTimeout(() => {
        setHideLoadingBar(true);
      }, 1250);
  
      return () => {
        clearTimeout(delayHero);
        clearTimeout(hideLoadingBarTimeout); 
      };
    }
  }, [loadingComplete]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        {!hideLoadingBar && (
          <LoadingBar 
          onProgress={handleProgress} 
          loadingComplete={loadingComplete} 
          />
        )}
        {showHero && <Hero />}
      </div>
    </>
  );
}

export default App;