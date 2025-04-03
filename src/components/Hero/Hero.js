import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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

const photosEN = [
  {
    title: "Mountain Serenity",
    description: "A breathtaking view of a mountain range bathed in golden sunlight.",
    src: "/images/Photo1.jpg",
    alt: "Mountain landscape with golden sunlight",
    caption: "Golden hour in the mountains",
  },
  {
    title: "Tranquil Sunset",
    description: "A peaceful lake reflecting the warm hues of a stunning sunset.",
    src: "/images/Photo2.jpg",
    alt: "Sunset over a calm lake",
    caption: "Reflections of the sun",
  },
  {
    title: "Forest Glow",
    description: "Sunlight filtering through the dense forest, creating a magical atmosphere.",
    src: "/images/Photo3.jpg",
    alt: "Sunlit forest with warm tones",
    caption: "Nature's warm embrace",
  },
  {
    title: "Urban Sunset",
    description: "A city skyline illuminated by the vibrant colors of dusk.",
    src: "/images/Photo4.jpg",
    alt: "City skyline at sunset",
    caption: "Metropolitan twilight",
  },
  {
    title: "Golden Meadows",
    description: "Rolling hills covered in golden grass under a clear blue sky.",
    src: "/images/Photo5.jpg",
    alt: "Golden grass fields with blue sky",
    caption: "Nature's open canvas",
  },
  {
    title: "Majestic Peaks",
    description: "Towering mountains rising dramatically against the sky.",
    src: "/images/Photo6.jpg",
    alt: "Snow-capped mountains at dawn",
    caption: "The call of the peaks",
  },
  {
    title: "Coastal Sunset",
    description: "A mesmerizing sunset over the shoreline, waves gently touching the sand.",
    src: "/images/Photo7.jpg",
    alt: "Beach sunset with golden waves",
    caption: "Serenity by the sea",
  },
  {
    title: "Moonlit Beach",
    description: "A quiet night at the beach under the gentle glow of the moon.",
    src: "/images/Photo8.jpg",
    alt: "Night beach under moonlight",
    caption: "Whispers of the tide",
  },
  {
    title: "Neon Metropolis",
    description: "A futuristic city glowing under vibrant lights and endless energy.",
    src: "/images/Photo9.jpg",
    alt: "Colorful futuristic city",
    caption: "Urban dreams",
  },
  {
    title: "Skyline Sunrise",
    description: "A golden sunrise lighting up a modern city skyline.",
    src: "/images/Photo10.jpg",
    alt: "Skyscrapers at sunrise",
    caption: "New day rising",
  },
  {
    title: "Mystic Forest",
    description: "A dense forest with tall trees casting long shadows at dawn.",
    src: "/images/Photo11.jpg",
    alt: "Dark forest with morning light",
    caption: "Nature's cathedral",
  },
  {
    title: "Golden Desert Dunes",
    description: "Soft sand dunes glowing under the setting sun’s warm light.",
    src: "/images/Photo12.jpg",
    alt: "Desert at sunset",
    caption: "Waves of sand and light",
  },
];

const photosES = [
  {
    title: "Serenidad Montañosa",
    description: "Una vista impresionante de una cadena montañosa bañada por la luz dorada del sol.",
    src: "/images/Photo1.jpg",
    alt: "Paisaje montañoso con luz dorada del sol",
    caption: "Hora dorada en las montañas",
  },
  {
    title: "Atardecer Tranquilo",
    description: "Un lago pacífico que refleja los tonos cálidos de un impresionante atardecer.",
    src: "/images/Photo2.jpg",
    alt: "Atardecer sobre un lago tranquilo",
    caption: "Reflejos del sol",
  },
  {
    title: "Brillo del Bosque",
    description: "Luz solar filtrándose a través del denso bosque, creando una atmósfera mágica.",
    src: "/images/Photo3.jpg",
    alt: "Bosque iluminado por el sol con tonos cálidos",
    caption: "El cálido abrazo de la naturaleza",
  },
  {
    title: "Atardecer Urbano",
    description: "Un horizonte urbano iluminado por los vibrantes colores del anochecer.",
    src: "/images/Photo4.jpg",
    alt: "Horizonte urbano al atardecer",
    caption: "Crepúsculo metropolitano",
  },
  {
    title: "Praderas Doradas",
    description: "Colinas onduladas cubiertas de pasto dorado bajo un cielo azul claro.",
    src: "/images/Photo5.jpg",
    alt: "Campos de pasto dorado con cielo azul",
    caption: "El lienzo abierto de la naturaleza",
  },
  {
    title: "Picos Majestuosos",
    description: "Montañas imponentes que se elevan dramáticamente contra el cielo.",
    src: "/images/Photo6.jpg",
    alt: "Montañas nevadas al amanecer",
    caption: "El llamado de los picos",
  },
  {
    title: "Atardecer Costero",
    description: "Un atardecer hipnotizante sobre la costa, con olas tocando suavemente la arena.",
    src: "/images/Photo7.jpg",
    alt: "Atardecer en la playa con olas doradas",
    caption: "Serenidad junto al mar",
  },
  {
    title: "Playa a la Luz de la Luna",
    description: "Una noche tranquila en la playa bajo el suave resplandor de la luna.",
    src: "/images/Photo8.jpg",
    alt: "Playa nocturna bajo la luz de la luna",
    caption: "Susurros de la marea",
  },
  {
    title: "Metrópoli de Neón",
    description: "Una ciudad futurista iluminada por luces vibrantes y energía infinita.",
    src: "/images/Photo9.jpg",
    alt: "Ciudad futurista colorida",
    caption: "Sueños urbanos",
  },
  {
    title: "Amanecer en la Ciudad",
    description: "Un amanecer dorado iluminando el horizonte de una ciudad moderna.",
    src: "/images/Photo10.jpg",
    alt: "Rascacielos al amanecer",
    caption: "Un nuevo día amanece",
  },
  {
    title: "Bosque Místico",
    description: "Un bosque denso con árboles altos proyectando largas sombras al amanecer.",
    src: "/images/Photo11.jpg",
    alt: "Bosque oscuro con luz matutina",
    caption: "La catedral de la naturaleza",
  },
  {
    title: "Dunas Doradas del Desierto",
    description: "Dunas suaves brillando bajo la cálida luz del sol poniente.",
    src: "/images/Photo12.jpg",
    alt: "Desierto al atardecer",
    caption: "Olas de arena y luz",
  },
];

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const imageRef = useRef(null);
  const [showContent, setshowContent] = useState(false);
  const [blurAmount, setBlurAmount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  const handleImageClick = () => {
    setIsExpanded((prev) => !prev);
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

  const fetchPhotos = (lng) => {
    setLoading(true);
  
    try {
      const selectedPhotos = lng === "en" ? photosEN : photosES;
  
      const formattedPhotos = selectedPhotos.map((photo) => ({
        ...photo,
        src: `${process.env.PUBLIC_URL}${photo.src}`,
      }));
  
      setPhotos(formattedPhotos);
      setError(null);
    } catch (error) {
      console.error("Error loading photos:", error);
      setError("Error loading data.");
    }
  
    setLoading(false);
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

  const getResponsiveHeight = () => {
    if (window.innerWidth <= 768) {
      return '300px';
    } else if (window.innerWidth <= 1024) {
      return '500px';
    } else {
      return '900px';
    }
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
            width: isExpanded ? '100%' : '80%',
            maxWidth: isExpanded ? '100%' : '600px',
            height: isExpanded ? getResponsiveHeight() : '300px',
            maxHeight: isExpanded ? getResponsiveHeight() : '300px',
          }}
          transition={{
            width: { duration: 1, ease: 'easeInOut' },
            height: { duration: 1, ease: 'easeInOut' },
            opacity: { duration: 0.5 },
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