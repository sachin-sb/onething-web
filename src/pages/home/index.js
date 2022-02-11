import React, { useRef } from "react";
import { motion } from "framer-motion";
import HeaderPrimary from "../../common/headerPrimary/headerPrimary";
import posterHero from "../../assets/images/video-poster/poster-hero.svg"

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
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  delay: 0.4,
                }}>
                <h1 className="hero-title">Leaders In <br /> Design Strategy</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  delay: 0.6,
                }}>
                <p className="description">
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
              // onClick={handlePlayVideo}
              >
                {/* ref={vidRef if you click to play*/}
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
