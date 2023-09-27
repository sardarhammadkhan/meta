"use client";
import { motion } from "framer-motion";
import { startingFeatures } from "../constants";
import {
  staggerContainer,
  slideIn,
  planetVariants,
  textVariant2,
} from "../utils/motion";
const GetStarted = () => (
  <section className="sm:p-16 px-6 py-12  relative z-10 text-white ">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto  flex lg:flex-row flex-col  "
    >
      <motion.div
        variants={planetVariants("left")}
        className="flex-1 justify-center items-center "
      >
        <img
          src="/get-started.png"
          className="object-contain w-[90%] h-[90%]"
        />
      </motion.div>

      <motion.div className=" text-white flex flex-1  flex-col  ">
        <p className="text-[#C7C7C780]">How Metaverus Works</p>
        <motion.h2
          className="font-bold md:text-[55px] text-[40px]   md:leading-[80px]"
          variants={textVariant2}
        >
          Get started <br></br> with just a few <br></br> clicks
        </motion.h2>
        {startingFeatures.map((feature, index) => (
          <div className="flex flex-row mt-5">
            <div
              className="mr-[30px] rounded-[24px] bg-[#FFFFFF14]
           text-white p-4 mb-5 w-[70px] h-[70px] flex justify-center items-center" 
            >
              
              <p>{`${0} ${index + 1}`}</p></div>
            <p className="flex-1 mt-3 text-secondary-white leading-32px">{feature}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
