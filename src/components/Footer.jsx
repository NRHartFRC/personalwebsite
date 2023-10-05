// import { useState, useEffect } from "react";
// import { AiOutlineStar } from "react-icons/ai";
// import { BiGitRepoForked } from "react-icons/bi";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  // Variants for button animation
  const buttonVariants = {
    hover: {
      scale: 1.75,
    },
    tap: {
      scale: 1,
    },
  };

  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      {/* GitHub repository link */}
      <div className="footer-link">
        {/* <span>
          <AiOutlineStar /> {gitHubInfo.stars} <BiGitRepoForked />
          {gitHubInfo.forks} - Give this project a star!
        </span> */}
        <div><span>▷</span> Curated x <a href="https://nrhartfrc.github.io/resume/" target="_blank" rel="noopener noreferrer" className="footer-soclink !important">Nicholas Rombach</a> &copy; {currentYear} <span>◁</span></div>
        &nbsp;
        <div><span>▷</span> Originated x <a href="https://github.com/mdyeates/my-portfolio" target="_blank" rel="noopener noreferrer" className="footer-soclink !important"> Michael Yeates</a> &copy; {currentYear} <span>◁</span></div>
        &nbsp;
      </div>

      {/* Buy Me A Coffee link */}
      <motion.a
        href="https://www.buymeacoffee.com/nrombach"
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        transition={{ ease: "easeInOut" }}
      >
        <motion.img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
          alt="Buy Me A Coffee"
          style={{
            height: "40px",
            scale: 1,
            width: "auto",
            marginTop: "10px",
          }}
          variants={buttonVariants}
          transition={{ ease: "easeInOut" }}
        />
      </motion.a>
    </footer>
  );
};

export default Footer;
