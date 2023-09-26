import React from "react";
import PageHeader from "../../components/PageHeader";

import Button from "../../components/Button"; //added for new feature
import { motion } from "framer-motion"; //added for new feature

const Resume = ({ brand }) => {
  // URL of your GitHub Pages website
  const websiteUrl = "https://nrhartfrc.github.io/resume/";

  // Calculate the delay based on the length of the 'brand' variable
  const dramatic = brand.length * 0.005; // Adjust the multiplier as needed

  // Log the value of 'dramatic' to the console
  console.log("The value of dramatic is:", dramatic);

  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise" />
      <p className="brand">{brand}</p>
      {/* add for experiment */}
        <motion.div
                style={{ display: "flex", gap: "10px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition= {{ duration: 0.5, delay: dramatic }}
              >
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                  <Button name="View Resume" />
                </a>
        </motion.div>
    </section>
  );
};

export default Resume;
