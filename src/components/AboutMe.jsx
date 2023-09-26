import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/nrprofile.png";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Hi, it is nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>I am an experienced Design Engineer, Robotics Coach & Mentor, and full-time nerd.</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  Today, my professional journey is in flux. As a Coach and Mentor of a 'home-roots'
                  <span style={{ color: "var(--hl-color)" }}> <i>FIRST<sup>™</sup></i> Robotics Competition team</span>, I am learning more each day! 
                  My playgrounds? The captivating universes of <span style={{ color: "var(--hl-color)" }}> CAD</span>, investing, 
                  <span style={{ color: "var(--hl-color)" }}> Mother Nature</span>, robotics,
                  <a href="https://en.wikipedia.org/wiki/Mycorrhizal_network" style={{ textDecoration: 'none' }}>
                    <span style={{ color: "var(--hl-color)" }}> the "Wood Wide Web"</span>
                  </a>, 
                  artificial intelligence, and <span style={{ color: "var(--hl-color)" }}> blockchain ecosystems</span>.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Here, I don my <span style={{ color: "var(--hl-color)" }}> curiosity </span>
                  cap and dive headfirst into the circle of life, all while relentlessly building a career using my {" "}
                  <span style={{ color: "var(--hl-color)" }}> B.S.E in Product Design & Manufacturing</span> from 
                  Grand Valley State University. Get wet Lakers! ⚓
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Life is a constellation of experiences, far beyond the confines of work. When engineering is not my focus, I am
                  shredding double-black diamonds on my snowboard, kayaking in remote rivers, admiring classic cars, listening to music, or collecting my thoughts.
                  Amid serene moments, I dissolve into wonder how quantum fluctuations can exist in a vacuum. My purpose is to find a hidden book-of-knowledge.
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <div style={{ display: "flex", gap: "10px", opacity: 1, transform: "none" }}>
                {/* Button to view the portfolio */}
                <NavLink to="/portfolio" style={{ display: "flex", gap: "10px", opacity: 1, transform: "none" }}>
                  <Button name="View Portfolio" />
                </NavLink>
                {/* Button to view the resume */}
                <NavLink to="/resume" style={{ display: "flex", gap: "10px", opacity: 1, transform: "none" }}>
                  <Button name="Jump to Resume" />
                </NavLink>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
