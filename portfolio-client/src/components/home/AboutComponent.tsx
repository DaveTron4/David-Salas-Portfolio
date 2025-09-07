import { motion } from "framer-motion";

const AboutComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 pt-16 bg-slate-900">
        {/* Left section */}
        <div className="align-middle flex flex-col justify-center h-[80vh] space-y-6 px-0 md:px-16">
            <h2 className="text-[10vh] font-bold text-white">About Me</h2>
            <p className="text-gray-100">
                I am a dedicated Full-Stack Developer currently pursuing a Bachelor’s degree in Computer Science. I enjoy working on personal projects in my free time, where I explore new technologies and strengthen my technical skills. I thrive in team environments, value collaboration, and enjoy solving complex problems through creative and efficient solutions. My goal is to leverage both my technical expertise and passion for continuous learning to build impactful and scalable applications.
            </p>
            <button className="text-white self-start bg-sky-600 rounded-full py-2 px-6">Learn More</button>
        </div>

        {/* Right section */}
        <div className="flex justify-center items-center overflow-hidden relative">
            <motion.img
                src="/profile_long.jpg"
                alt="profile"
                className="w-64 h-64 md:w-100 md:h-fit object-cover rounded-t-full shadow-lg z-0"
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
            />
        </div>
    </div>
  )
}

export default AboutComponent