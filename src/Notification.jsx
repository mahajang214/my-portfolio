// // Notification.jsx
// import { motion } from "framer-motion";
// import { useEffect } from "react";

// export default function Notification({ message, type = "success", onClose }) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onClose();
//     }, 3000); // auto-close after 3 seconds
//     return () => clearTimeout(timer);
//   }, [onClose]);
  

//   return (
//     <motion.div
//     initial={{
//         x:1000
//     }}
//     animate={{
//         x:0,
//     }}
//     transition={{
//         duration:.5
//     }}
//       className={`fixed top-5 right-5 px-[10vw] py-3  shadow-lg text-white transition-all duration-300 z-50 text-2xl rounded-lg 
//         ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
//     >
//       {message}
//     </motion.div>
//   );
// }


// Notification.jsx
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Notification({ message, type = "success", onClose }) {
//   const [shouldAutoClose, setShouldAutoClose] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (shouldAutoClose) {
//       timer = setTimeout(() => {
//         onClose();
//       }, 3000);
//     }
//     return () => clearTimeout(timer);
//   }, [onClose, shouldAutoClose]);

//   return (
//     <motion.div
//       initial={{ x: 1000 }}
//       animate={{ x: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-5 right-5 px-[10vw] py-3 shadow-lg text-white z-50 text-2xl rounded-lg flex items-center  justify-between gap-4
//         ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
//     >
//       <span className="w-full flex">{message}</span>
//       <button
//         onClick={onClose}
//         className="text-white ml-[90%]  text-xl font-bold bg-black/30 px-[2vw] py-5 rounded hover:bg-black/50 transition cursor-pointer"
//       >
//         ×
//       </button>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Notification({ message, type = "success", onClose }) {
  const [shouldAutoClose, setShouldAutoClose] = useState(false);

  useEffect(() => {
    let timer;
    if (shouldAutoClose) {
      timer = setTimeout(() => {
        onClose();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [onClose, shouldAutoClose]);

  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000, opacity: 0 }} // 👈 exit animation
      transition={{ duration: 0.5 }}
      className={`fixed top-5 right-5 px-2 md:w-[30vw] md:px-5 py-3 shadow-lg text-white z-50 text-2xl rounded-lg flex justify-between items-center gap-4
        ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      <span className=" flex">{message}</span>
      <button
        onClick={onClose}
        className="text-white text-xl font-bold bg-black/30 px-[2vw] py-5 rounded hover:bg-black/50 transition cursor-pointer"
      >
        ×
      </button>
    </motion.div>
  );
}

