"use client";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";
import styles from "../styles";

const About = () => (
  <section className="sm:p-16  xs:p-8 px-6 py-12  relative z-10">
    <div className="gradient-02 z-0"/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] flex-col mx-auto  w-full text-center justify-center`}
    >
      <motion.p variants={slideIn(("up", "tween", 0.2, 1))} className="text-secondary-white"> | About Metaversus</motion.p>
      <motion.p variants={fadeIn(("up", "tween", 0.2, 1))} 
      className="font-normal leading-[40px] md:leading-[57.6px] text-[20px] sm:text-[32px] text-center text-secondary-white">
      Metaverse is a new thing in the future, where you can enjoy the virtual
      world by feeling like it's really real, you can feel what you feel in this
      metaverse world, because this is really the madness of the metaverse of
      today, using only VR devices you can easily explore the metaverse world
      you want, turn your dreams into reality. Let's explore the madness of the
      metaverse by scrolling down
      </motion.p>
      <div className="flex w-full justify-center relative">
      <img src='/arrow-down.svg' className="w-[28px] h-[28px] mt-[20px] object-contain"/>.
      </div>
    </motion.div>
  </section>
);

export default About;
