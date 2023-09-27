"use client";
import { motion } from "framer-motion";
import { newFeatures } from "../constants";
import {
  staggerContainer,
  slideIn,
  planetVariants,
  textVariant2,
} from "../utils/motion";
const WhatsNew = () => (
  <section className="sm:p-16 px-6 py-12  relative z-10 text-white ">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto  flex lg:flex-row flex-col  "
    >
      <motion.div className=" text-white flex flex-1  flex-col  ">
        <p className="text-[#C7C7C780]">How Metaverus Works</p>
        <motion.h2
          className="font-bold md:text-[55px] text-[40px]   md:leading-[80px] "
          variants={textVariant2}
        >
          What's new about <br></br> Metaversus?
        </motion.h2>
        <div className="flex  justify-between gap-[24px] mt-[30px] border ">
          {newFeatures.map((feature, index) => (
            <div className="border rounded-[24px]  flex justify-center bg-gray-500 items-center h-[70px] w-[70px] relative">
              <img src={feature.imgUrl} className="absolute object-contain" />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className="flex-1 justify-center items-center "
      >
        <img
          src="/get-started.png"
          className="object-contain w-[90%] h-[90%]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
