"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { exploreWorlds } from "../constants";
import { staggerContainer, slideIn, textVariant2 } from "../utils/motion";
import styles from "../styles";
import ExploreCard from "../components/ExploreCard";
const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className=" sm:p-16  xs:p-8 px-6 py-12  text-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full  2xl:mx-w-[1280px] mx-auto flex flex-col "
      >
        <p className="text-center">| The World</p>
        <motion.h2
          className="text-center font-bold md:text-[55px] text-[40px] hidden sm:block  md:leading-[80px]"
          variants={textVariant2}
        >
          Choose the world you want <br></br> to explore
        </motion.h2>

        <div className=" mt-[50px]  min-h-[70vh]   flex lg:flex-row flex-col gap-5">
          {exploreWorlds.map((card, index) => (
            <ExploreCard

              index={index}
              id={card.id}
              {...card}
              active={active}
              handleActive={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
