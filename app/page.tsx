import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{ background: "url(/main-bg.jpg)" }}>
        <div className="pl-10 md:pl-20 pb-10 md:pb-20 flex flex-col gap-5 z-[10] max-w-[90%]"> {/* Changed padding and max-width to percentages */}
          <h1 className="text-3xl md:text-5xl text-white font-semibold"> {/* Adjusted text size for smaller screens */}
            Web Dev / Cloud / Cybersecurity
            <span className="block mt-2 md:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Joshua Cook (ATL, GA)</span> {/* Adjusted margin for smaller screens */}
          </h1>

          <div className="text-gray-200"> {/* Removed hidden class */}
            <p>
              Expertise in Web Dev, Coding, Cloud computing, and Cybersecurity. <br/> {/* Added line break */}
              I excel at crafting innovative solutions, developing robust software applications, <br/> {/* Added line break */}
              and ensuring the security and integrity of digital systems.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3"> {/* Removed hidden class */}
            <Link href="/my-skill" className="rounded-[20px] group bg-gray-500 hover:bg-gray-400 px-5 py-3 text-lg text-white max-w-[90%] relative">
              About Me
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" /> {/* Corrected class name for hover effect */}
            </Link>
            <Link href="/my-projects" className="rounded-[20px] group bg-gray-500 hover:bg-gray-400 px-5 py-3 text-lg text-white max-w-[90%] relative">
              My Projects
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" /> {/* Corrected class name for hover effect */}
            </Link>
            <Link href="/contact" className="rounded-[20px] group bg-gray-500 hover:bg-gray-400 px-5 py-3 text-lg text-white max-w-[90%] relative">
              Contact
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" /> {/* Corrected class name for hover effect */}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 md:bottom-10 z-[20] right-5 flex-col md:hidden"> {/* Adjusted bottom padding */}
        <Link href="/my-skill" className="rounded-[20px] group bg-gray-500 hover:bg-gray-400 px-5 py-3 text-lg text-white max-w-[90%] relative">
          More
        </Link>
        <Link href="/my-projects" className="rounded-[20px] group bg-gray-500 hover:bg-gray-400 px-5 py-3 text-lg text-white max-w-[90%] relative">
          My Projects
        </Link>
        <Link href="/contact" className="rounded-[20px] group bg-gray-500 hover:bg-gray-400 px-5 py-3 text-lg text-white max-w-[90%] relative">
          Contact
        </Link>
      </div>

      <Image 
        src="/stars.png"
        alt="stars"
        layout="fill" 
        className="absolute top-0 left-0 z-[10]" /> {/* Changed width and height to fill container */}
    </main>
  );
}





