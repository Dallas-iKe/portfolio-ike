import ikelogo from "../assets/ikeLogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

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

            <a href="https://github.com/Dallas-iKe/" target="_blank">
            <FaGithub />
            </a>
            <FaInstagram />
            <a href="https://x.com/dallas_ikee/" target="_blank">
            <FaSquareXTwitter />
            </a>

        </div>
    </nav>
  )
}

export default Navbar
