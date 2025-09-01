import { Mail, FileText } from "lucide-react"; // icons

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row  justify-between w-full max-w-6xl md:m-10 items-end">
            {/* Left side */}
            <div className="flex flex-col items-start space-y-4 md:w-1/2 text-center md:text-left mt-10 md:mt-15">
                <h3 className="text-lg md:text-2xl text-gray-200">Hi, my name is</h3>
                <h1 className="text-5xl md:text-7xl font-bold">David Salas C.</h1>
                <h3 className="text-2xl md:text-3xl text-indigo-400">Full Stack Developer</h3>

                <div className="flex space-x-4 mt-6">
                    <button className="px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-800 transition">
                        View Work
                    </button>

                    {/* Circle buttons */}
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition">
                        <Mail size={20} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 hover:bg-purple-600 transition">
                        <FileText size={20} />
                    </button>
                </div>
            </div>

            {/* Right side */}
            <div className="mt-10 md:mt-0 flex justify-center items-center relative">
                <img
                src="/profile.jpg"
                alt="profile"
                className="w-64 h-64 md:w-100 md:h-100 object-cover rounded-full shadow-lg z-1 "
                />
                <div className="w-110 md:h-110 absolute bg-amber-300 rounded-full z-0"></div>
            </div>
        </div>
    </section>
  )
}

export default Hero