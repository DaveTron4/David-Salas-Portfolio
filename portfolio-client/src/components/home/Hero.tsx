import { Mail, FileText } from "lucide-react"; // icons
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-slate-900 text-white
                 px-6
                 sm:px-8 
                 md:px-16 
                 lg:px-20"
    >
      <div
        className="flex flex-col-reverse items-center h-full justify-center gap-10 mt-[50vh]
                   sm:gap-0 sm:flex-col-reverse sm:items-center sm:justify-center sm:w-full sm:mt-0
                   md:gap-0 md:flex-row md:items-center md:justify-center md:w-11/12
                   lg:gap-12 lg:flex-row lg:items-center lg:justify-center lg:w-11/12"
      >
        {/* Left side */}
        <div className="flex flex-col items-center space-y-4 h-full text-left
                        sm:items-center sm:justify-center sm:w-1/2 sm:h-[40vh] sm:text-left
                        md:items-start  md:w-1/2 md:text-left md:justify-center
                        lg:justify-center lg:ml-30 lg:items-start lg:w-1/2 lg:text-left"
        >

            <h3 className="text-base text-gray-200
                           sm:text-lg 
                           md:text-2xl
                           lg:text-3xl"
            >
                <Typewriter
                options={{
                    strings: ["Hi, my name is"],
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                    delay: 75,
                    deleteSpeed: 50,
                }}
                />
            </h3>

            <h1 className="text-4xl font-bold
                           sm:text-5xl 
                           md:text-7xl
                           lg:text-8xl"
            >
                David Salas C.
            </h1>
        
            <h3 className="text-xl text-indigo-400
                           sm:text-2xl 
                           md:text-3xl
                           lg:text-4xl"
            >
                Full Stack Developer
            </h3>

            {/* Buttons Div */}
            <div className="flex space-x-4 mt-6
                            md:justify-start
                            lg:space-x-6"
            >
                {/* Primary button */}
                <button className="px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-800 transition
                                text-white font-semibold
                                sm:px-7 sm:py-3 sm:text-lg
                                md:px-8 md:py-4 md:text-lg
                                lg:px-10 lg:py-5 lg:text-xl"
                >
                    View Work
                </button>

                {/* Circle buttons */}
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition
                                   sm:w-12 sm:h-12
                                   md:w-14 md:h-14
                                   lg:w-16 lg:h-16"
                >
                    <Mail size={20} />
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 hover:bg-purple-600 transition
                                   sm:w-12 sm:h-12
                                   md:w-14 md:h-14
                                   lg:w-16 lg:h-16"
                >
                    <FileText size={20} />
                </button>
            </div>
        </div>

        {/* Right side */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative flex justify-center items-center mb-12
                       sm:mb-0 sm:w-1/2 sm:
                       md:w-1/2
                       lg:w-1/3 lg: lg:h-auto lg:mr-30"
        >

            {/* Outline */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                // pulsing animation
                whileHover={{ scale: 1.05 }}
                
                className="absolute w-64 h-64 bg-amber-300 rounded-full z-0
                           sm:w-72 sm:h-72
                           md:w-80 md:h-80 
                           lg:w-[550px] lg:h-[550px]"
            >

            </motion.div>

            {/* Image */}
            <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                src="/profile.jpg"
                alt="profile"
                className="relative z-10 object-cover rounded-full shadow-lg
                           w-48 h-48
                           sm:w-56 sm:h-56 
                           md:w-72 md:h-72 
                           lg:w-[450px] lg:h-[450px] lg:shadow-lg lg:shadow-black/30"
            />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
