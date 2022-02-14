import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import HeaderPrimary from "../../common/headerPrimary/headerPrimary";
import posterHero from "../../assets/images/video-poster/poster-hero.svg"
import AnimatedText from "../../common/animatedText";

// Styles
import "./styles.scss";

const HomeScreen = () => {
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  }

  setTimeout(() => {
    document.getElementById('vid').play();
  }, 2500);

  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const headingText = [
    { type: "heading1", text: "Leaders In" },
    {
      type: "heading1", text: "Design Strategy"
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  return (
    <div className="home-page-style">
      <HeaderPrimary />
      <div className="container">
        <div className="row">
          <div className="flex-section">
            <motion.div
              initial={{ opacity: 0, y: "0%" }}
              animate={{ opacity: 1, y: "30%" }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.4,
              }}>
              <div className="gradient-first"></div>
            </motion.div>
            <section className="hero-section">
              <motion.div
                className="App"
                initial="hidden"
                // animate="visible"
                animate={replay ? "visible" : "hidden"}
                variants={container}
                className="heading-sec"
              >
                <div className="cursor-scale">
                  {headingText.map((item, index) => {
                    return <AnimatedText {...item} key={index} />;
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  delay: 0.6,
                }}>
                <p className="description cursor-scale">
                  We think in design and act in innovation, stirring the way people and technology interact.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  delay: 0.6,
                }}
                className="video-sec"
              >
                <video width="180" height="105" muted playsInline loop poster={posterHero} id="vid">
                  <source src="https://www.onething.design/wp-content/themes/tweentynineteen-child/assets/images/videos/showreel.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>

            </section>
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '20%' }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.4,
              }}>
              <div className="gradient-second"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
