import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 2;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #4a4a4a;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

export const ProgressText = styled(motion.div)`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
`;

export const BarContainer = styled.div`
  width: 80%;
  height: 10px;
  background-color: black;
  border-radius: 5px;
  overflow: hidden;
`;

export const ProgressBar = styled(motion.div)`
  height: 100%;
  background-color: white;
`;

export const Curtain = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #4a4a4a;
  z-index: 3;
`;

export const CurtainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;