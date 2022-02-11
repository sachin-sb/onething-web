import React from "react";
import logo from '../../assets/images/logo.svg';
import toggleLine from '../../assets/images/toggle-line.svg';
import { motion } from "framer-motion";

// Styles
import "./styles.scss";

const HeaderPrimary = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.4,
      }}>

      <div className="header-style">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img src={logo} />
            </div>
            <div className="col-sm-8">
              <div className="navigation">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>

                <button className="toggle-btn"><img src={toggleLine} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderPrimary;
