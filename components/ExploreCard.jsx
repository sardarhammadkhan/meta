"use client";
import { motion } from "framer-motion";

import {
  staggerContainer,
  slideIn,
  fadeIn,
  handleActive,
} from "../utils/motion";
import styles from "../styles";

const ExploreCard = ({ active, imgUrl, id, title, index, handleActive }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.7)}
    className={`${
      id == active ? " lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] relative
     transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  >
    <img
      src={imgUrl}
      className="absolute rounded-[24px] w-full h-full object-cover"
      onClick={() => handleActive(id)}
    />
    {id !== active ? (
      <p className="font-semibold sm:text-[26px] text-[18px] text-white lg:absolute lg:bottom-20 lg:rotate-[-90deg]  ">
        {title}
      </p>
    ) : (
      <div className="border  absolute bottom-0 flex justify-center align-center glassmorphism  w-full h-[100px]">
        <div className=" absolute top-0 w-full rounded-[24px]  p-10">
          <img src="/headset.svg" className="mb-5 object-contain" />
          <p className="font-extrabold text-white">The UpSide Down</p>
        </div>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
