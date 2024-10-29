import styled from 'styled-components';
import { motion } from 'framer-motion';

// ? Main Style
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transition: height 2s ease;
`;

export const HeroTextContainer = styled.div`
  text-align: center;
  font-size: 2rem;
  width: 100%;
  max-width: 500px;
`;

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const HeroImage = styled(motion.img)`
  width: 100%;
  max-width: 600px; 
  transition: all 2s ease;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 80%;
    height: auto;
  }

  @media only screen and (min-width: 1025px) {
    max-width: 600px;
    height: auto;
  }
`;

export const HeroSpanContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Responsive adjustments */
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const HeroSpan = styled(motion.span)`
  font-size: 20px;
  font-weight: 700;
`;

export const HeroText = styled(motion.h1)`
  margin: 2rem 0;
`;

// ? Header Style
export const Header = styled(motion.header)`
  width: 100%;
  padding: 1rem 2rem;
  background-color: #eeeeee;
  position: fixed;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavA = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: #000;
  font-size: 18px;
`;

export const NavUl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  gap: 1rem;
  margin: 0;
`;

// ? About Style
export const AboutSection = styled.div`
  width: 100%;
  padding: 2rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  background: #eeeeee;
  padding: 2rem;
`;

export const AboutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: justify;

  p {
    padding: 0 3rem 0 0;  
  }

  img {
    width: 400px;
    height: 450px;
    border-radius: 50%;
  }

  /* Responsive adjustments */
  @media only screen and (max-width: 1024px) {
    flex-direction: column;

    img {
      margin-top: 2rem;
    }

    p {
      padding: 0;  
    }
  }
`;

// ? Photo Style
export const PhotoSection = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const GalleryHeading = styled(motion.h2)`
  text-align: center;
  font-size: 2rem;
`;

export const Gallery = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  column-count: 4; /* Adjust this value for the number of columns */
  column-gap: 15px; /* Space between columns */

  /* Responsive adjustments */
  @media only screen and (max-width: 768px) {
    column-count: 1;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    column-count: 2;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  transition: transform 0.5s ease;
`;


export const GalleryFigcaption = styled.figcaption`
  font-style: italic;
  font-size: 12px;
  padding: 8px;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  box-sizing: border-box;
  bottom: 3px;
  color: #fff;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 0 0 14px 14px;
  transition: transform 0.5s ease;
`;

export const GalleryItem = styled.div`
  display: inline-block;
  margin-bottom: 15px;
  break-inside: avoid;
  width: 100%;

  &:hover ${GalleryImage}, &:hover ${GalleryFigcaption} {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const GalleryFigure = styled(motion.figure)`
  margin: 0;
  position: relative;
`;

export const assignImageHeight = (index) => {
  const heights = [250, 200, 300, 150];
  return `${heights[index % heights.length]}px`;
};

// ? Contact Style
export const ContactSection = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  background: #eeeeee;
  padding: 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContactForm = styled(motion.form)`
  width: 100%;
  max-width: 700px;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  input[type='text'],
  input[type='number'],
  input[type='email'],
  textarea {
    font-family: 'JetBrains Mono', monospace;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #000;
    width: 100%;
  }

  textarea {
    resize: none;
    width: 100%;
    height: 150px;
  }

  input[type='submit'] {
    font-family: 'JetBrains Mono', monospace;
    padding: 12px 24px;
    text-align: left;
    border-radius: 8px;
    background: #000;
    border-color: #fff;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;

// ? Footer Style
export const Footer = styled.footer`
  width: 100%;
  padding: 1rem;
  background: #eeeeee;
  text-align: center;
`;

// ? Popup Style
export const Popup = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  background-color: #4caf50;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

// ? Floating Button Language
export const FloatingButtonContainer = styled(motion.div)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
`;

export const FloatingButton = styled.button`
  background-color: #6e6e6e;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #adadad;
  }

  &:active {
    transform: scale(0.95);
  }
`;