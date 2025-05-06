import { FaGithub, FaTelegram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import img from "./assets/LOG.png";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-600 text-white px-4 py-8 md:px-12 lg:px-48">
      <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto gap-4">
        <a href="/" rel="noopener noreferrer">
          <img
            src={img}
            width={80}
            height={80}
            className="rounded-full mb-4 lg:mb-0"
            alt="logo"
          />
        </a>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="text-lg font-bold">Joshua Ajagbe &#169; 2025</p>
        </div>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h3 className="text-xl font-semibold text-blue-400 py-2 uppercase">
            Formation as
          </h3>
          <ul className="text-lg font-bold">
            <li className="my-2">Software Developer</li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold text-blue-400 py-2 uppercase">
            Find Me on
          </h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://www.github.com/Jay-Israel"
              target="_blank"
              rel="noopener noreferrer"
              className="text- hover:text-green-400 p-3"
            >
              <FaGithub className="text-3xl" />
            </a>

            <a
              href="https://www.Telegram.com/@kingolujosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text- hover:text-green-400 p-3"
            >
              <FaTelegram className="text-3xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/Joshua-Israel"
              target="_blank"
              rel="noopener noreferrer"
              className="text- hover:text-green-400 p-3"
            >
              <FaLinkedinIn className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
