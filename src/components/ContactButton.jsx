import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";

const ContactButton = () => {
  return (
    <div className="fixed -bottom-20 -right-20 ">
      <div className="relative">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          viewBox="0 0 400 400"
          className="w-64 h-64"
          >
          <defs>
            {/* Reduced the radius of the circular path */}
            <path
              id="circlePath"
              d="M 200, 200 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
            ></path>
          </defs>
          <text fill="green" fontSize="14">
            {/* Attach the text to the smaller circle */}
            <textPath href="#circlePath" startOffset="0%" className="text-lg">
            Contact Me
            </textPath>
          </text>
        </motion.svg>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-11 h-11 md:w-11 md:h-11 absolute top-0 left-0 right-0 bottom-0 m-auto bg-green-400 text-white rounded-full flex items-center justify-center"
        ><FiPhoneCall />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactButton;
