"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, textVariant } from "../utils/motion";
import styles from "../styles";
const Hero = () => (
  <section  className="sm:py-16 py-6 sm:pl-16  pl-6 text-white ">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-[100%] lg:w-[80%] flex flex-col mx-auto"
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(2)}
          className={`${styles.heroHeading}  flex flex-row justify-center items-center `}
        >
          <h1>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>mess</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative  w-full -mt-[12px] md:-mt-[20px]"
      >
        <div className="absolute w-full rounded-tl-[140px] h-[300px ] hero-gradient -top-[30px]"/>
        <img src="/cover.png" className="w-full  rounded-tl-[140px]" />
      </motion.div>
    </motion.div>

  </section>
);

export default Hero;
