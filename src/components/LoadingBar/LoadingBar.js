import React, { useState, useEffect } from 'react';
import {
  MainContainer,
  Container,
  ProgressText,
  BarContainer,
  ProgressBar,
  CurtainContainer,
  Curtain
} from './LoadingBarStyles';

export const LoadingBar = ({ onProgress, loadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          const newProgress = prev + 1;
          onProgress(newProgress);
          return newProgress;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onProgress]);

  return (
    <MainContainer>
      {!loadingComplete && (
        <Container>
          <ProgressText
            animate={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {progress}%
          </ProgressText>
          <BarContainer>
            <ProgressBar
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0, ease: 'easeInOut' }}
            />
          </BarContainer>
        </Container>
      )}

      {loadingComplete && (
        <CurtainContainer>
          <Curtain
            initial={{ x: '0%' }}
            animate={{ x: '-100%' }}
            transition={{ duration: 1.25, ease: 'easeInOut' }}
          />
          <Curtain
            initial={{ x: '0%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.25, ease: 'easeInOut' }}
          />
        </CurtainContainer>
      )}
    </MainContainer>
  );
};