import React from "react";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #ff0080 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #00ff80 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, #8000ff 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #ff0080 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Rocket Emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 1.2,
          }}
          className="mb-8"
        >
          <motion.span
            className="text-6xl md:text-8xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🚀
          </motion.span>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white relative transform-gpu"
            style={{
              textShadow: "0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff",
              filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))",
            }}
            animate={{
              textShadow: [
                "0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff",
                "0 0 30px #ff00ff, 0 0 50px #ff00ff, 0 0 70px #ff00ff",
                "0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
          >
            We are cooking
            <br />
            <span className="text-cyan-400">something amazing!</span>
          </motion.h1>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                "linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.3) 50%, transparent 100%)",
                "linear-gradient(90deg, transparent 0%, rgba(255, 0, 255, 0.3) 50%, transparent 100%)",
                "linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.3) 50%, transparent 100%)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          />
        </motion.div>

        {/* Pulsing Glow Effect */}
        <motion.div
          className="mt-8"
          animate={{
            boxShadow: [
              "0 0 20px rgba(0, 255, 255, 0.3)",
              "0 0 40px rgba(0, 255, 255, 0.6)",
              "0 0 20px rgba(0, 255, 255, 0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full"
            animate={{
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Subtle Floating Animation */}
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-12"
        >
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Stay tuned for groundbreaking innovations
          </p>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-cyan-400 opacity-50"
        animate={{
          borderColor: ["#00ffff", "#ff00ff", "#00ffff"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-pink-400 opacity-50"
        animate={{
          borderColor: ["#ff00ff", "#00ffff", "#ff00ff"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-400 opacity-50"
        animate={{
          borderColor: ["#00ffff", "#ff00ff", "#00ffff"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-pink-400 opacity-50"
        animate={{
          borderColor: ["#ff00ff", "#00ffff", "#ff00ff"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Products;
