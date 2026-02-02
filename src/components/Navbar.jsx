import ikelogo from "../assets/ikeLogo.png";
import { FaLinkedin, FaInstagram, FaSquareXTwitter, FaGithub  } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-10 lg:mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="w-11" src={ikelogo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-end gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/dallas-ike/" target="_blank">
            <FaLinkedin />
            </a>

            <div className="relative group">
              <a href="https://github.com/Dallas-iKe/" className="flex items-center justify-center">
                <FaGithub />
              </a>
              <div className="absolute hidden group-hover:block bg-transparent shadow-lg rounded-md mt-0.5 text-sm w-40 -ml-14 flex">
                <a href="https://github.com/isaacmensahx/" target="_blank" className="block px-4 py-2 text-white hover:bg-[#67E8F9] hover:text-black">Work GitHub</a>
                <a href="https://github.com/Dallas-iKe/" target="_blank" className="block px-4 py-2 text-white hover:bg-[#67E8F9] hover:text-black">Personal GitHub</a>
              </div>
            </div>
            <FaInstagram />
            <a href="https://x.com/dallas_ikee/" target="_blank">
            <FaSquareXTwitter />
            </a>

        </div>
    </nav>
  )
}

export default Navbar
