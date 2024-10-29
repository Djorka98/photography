import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "../../i18n";
import {
  HeroContainer,
  HeroTextContainer,
  HeroImageContainer,
  HeroImage,
  HeroSpanContainer,
  HeroSpan,
  HeroText,
  Header,
  NavA,
  NavUl,
  AboutSection,
  AboutContainer,
  AboutContent,
  PhotoSection,
  GalleryHeading,
  Gallery,
  GalleryItem,
  GalleryFigure,
  GalleryFigcaption,
  GalleryImage,
  assignImageHeight,
  ContactSection,
  ContactContainer,
  ContactForm,
  Footer,
  Popup,
  CloseButton,
  FloatingButtonContainer,
  FloatingButton,
} from "./HeroStyles";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setshowContent] = useState(false);
  const [blurAmount, setBlurAmount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();
  const imageRef = useRef(null); 

  const handleImageClick = () => {
    setIsExpanded(true);
    setIsHovered(false);
  };

  const handleAnimationComplete = () => {
    if (isExpanded) {
      setTimeout(() => {
        setshowContent(true);
      }, 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");

    if (name && phone && email && message) {
      setShowPopup(true); 

      setTimeout(() => {
        setShowPopup(false);
      }, 3000); 

      e.target.reset();
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const fetchPhotos = async (lng) => {
    try {
      const photosUrl = lng === "en"
        ? process.env.REACT_APP_PHOTOS_URL_EN
        : process.env.REACT_APP_PHOTOS_URL_ES;    

      const response = await axios.get(photosUrl);

      let photosData =
        typeof response.data === "string"
          ? JSON.parse(response.data)
          : response.data;

      if (Array.isArray(photosData)) {
        const formattedPhotos = photosData.map((photo) => ({
          ...photo,
          src: `${process.env.PUBLIC_URL}${photo.src}`,
        }));

        setPhotos(formattedPhotos);
      } else {
        console.error(
          "La respuesta no es un array después de la conversión:",
          photosData
        );
        setError("Unexpected data format from API.");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data, please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos(i18n.language);

    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const imageVisible = Math.max(0, Math.min(rect.bottom, windowHeight));

        const blurValue = Math.max(0, (1 - imageVisible / windowHeight) * 4);
        setBlurAmount(blurValue);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [i18n.language]);

  const Loading = () => <div className="spinner">Loading...</div>;
  const ErrorMessage = ({ message }) => <div className="error">{message}</div>;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <HeroContainer style={{ height: isExpanded ? "auto" : "100vh" }}>
        <Header
          initial={{ top: "-5rem" }}
          animate={{ top: isExpanded ? "0" : "-5rem" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <NavA href="#home">HOME</NavA>
          <NavUl>
            <li>
              <NavA href="#about">ABOUT</NavA>
            </li>
            <li>
              <NavA href="#photos">PHOTOS</NavA>
            </li>
            <li>
              <NavA href="#contact">CONTACT</NavA>
            </li>
          </NavUl>
        </Header>

        <HeroTextContainer
          id="home"
          style={{ padding: isExpanded ? "13.8rem 0 10px" : "0" }}
        >
          <HeroSpanContainer>
            <HeroSpan
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              {t("webDesign")}
            </HeroSpan>
            <HeroSpan
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              {t("mailDesign")}
            </HeroSpan>
          </HeroSpanContainer>
          <HeroText
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 1,
              y: isExpanded ? -20 : 0,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            PHOTOGRAPHY
          </HeroText>
        </HeroTextContainer>

        <HeroImageContainer>
          <HeroImage
            ref={imageRef}
            src={`${process.env.PUBLIC_URL}/images/HeroImage.jpg`}
            alt="Camera"
            initial={{ opacity: 0 }}
            onHoverStart={() => !isExpanded && setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={handleImageClick}
            animate={{
              scale: isHovered ? 1.03 : 1,
              opacity: 1,
              width: isExpanded ? "100%" : "100%",
              maxWidth: isExpanded ? "100%" : "600px",
              height: isExpanded
                ? window.innerWidth <= 768
                  ? "300px"
                  : window.innerWidth <= 1024
                  ? "500px"
                  : "900px"
                : "300px",
              maxHeight: isExpanded
                ? window.innerWidth <= 768
                  ? "300px"
                  : window.innerWidth <= 1024
                  ? "500px"
                  : "900px"
                : "300px",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              scale: { duration: 0.1 },
            }}
            onAnimationComplete={handleAnimationComplete}
            style={{
              cursor: isExpanded ? "default" : "pointer",
              margin: "0 auto",
              filter: `blur(${blurAmount}px)`,
            }}
          />
        </HeroImageContainer>

        {showContent && (
          <FloatingButtonContainer
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <FloatingButton onClick={() => changeLanguage("es")}>
              ES
            </FloatingButton>
            <FloatingButton onClick={() => changeLanguage("en")}>
              EN
            </FloatingButton>
          </FloatingButtonContainer>
        )}

        {showContent && (
          <AboutSection id="about">
            <AboutContainer>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                {t("aboutTitle")}
              </motion.h2>
              <AboutContent>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  dangerouslySetInnerHTML={{ __html: t('aboutDesc') }}
                >
                </motion.p>
                <motion.img
                  src={`${process.env.PUBLIC_URL}/images/AboutImage.jpg`}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              </AboutContent>
            </AboutContainer>
          </AboutSection>
        )}

        {showContent && (
          <PhotoSection id="photos">
            <GalleryHeading
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {t("photoTitle")}
            </GalleryHeading>

            <Gallery>
              {loading ? (
                <Loading
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              ) : error ? (
                <ErrorMessage
                  message={error}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              ) : (
                <>
                  {photos.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    >
                      No images found.
                    </motion.div>
                  ) : (
                    photos.map((photo, index) => (
                      <GalleryItem key={index}>
                        <GalleryFigure
                          initial={{ opacity: 0, x: -100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                        >
                          <GalleryImage
                            src={photo.src}
                            alt={photo.alt}
                            style={{ height: assignImageHeight(index) }}
                          />
                          <GalleryFigcaption>{photo.caption}</GalleryFigcaption>
                        </GalleryFigure>
                      </GalleryItem>
                    ))
                  )}
                </>
              )}
            </Gallery>
          </PhotoSection>
        )}

        {showContent && (
          <ContactSection id="contact">
            <ContactContainer>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                {t("contactTitle")}
              </motion.h2>
              <ContactForm
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
              >
                <input 
                  type="text" 
                  name="name" 
                  placeholder={t("contactName")}  
                  required 
                />
                <input
                  type="number"
                  name="phone"
                  placeholder={t("contactPhone")} 
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("contactMail")} 
                  required
                />
                <textarea
                  name="message"
                  placeholder={t("contactMessage")} 
                  required
                ></textarea>
                <input type="submit" value={t("contactSubmit")}  />
              </ContactForm>
            </ContactContainer>
          </ContactSection>
        )}

        {showPopup && (
          <Popup>
            <p>{t("popupText")}</p>
            <CloseButton onClick={handleClosePopup}>x</CloseButton>
          </Popup>
        )}

        {showContent && (
          <Footer>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} PHOTOGRAPHY. {t('footerText')}
            </motion.p>
          </Footer>
        )}
      </HeroContainer>
    </>
  );
};