import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import img from "./assets/Josh.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Banner() {
  const [text] = useTypewriter({
    words: ["...?", "Front-End", "Software"],
    loop: {},
    typeSpeed: 190,
    delaySpeed: 800,
    deleteSpeed: 150,
  });

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div
      id="Banner"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center lg:text-left gap-5 flex lg:flex-row flex-col-reverse justify-between items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-tertiary">
        <h1
          data-aos="fade-right"
          className="text-[52px] text-center w-full font-semibold mb-8 leading-normal uppercase"
          style={{ maxWidth: "100%" }}
        >
          Joshua Ajagbe
          <br />
          <span className="text-primary  text-white">{text}</span>
          <span className=" text-gray-400">
            <Cursor cursorStyle="</>" />
          </span>
          <br />
          <span className="text-primary text-white"> Developer</span>
        </h1>
        <p
          data-aos="fade-left"
          className="text-[30px] flex justify-center items-center flex-wrap text-center w-full font-semibold mb-8 leading-normal uppercase"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          HTML | CSS | JAVASCRIPT <br/> |TYPESCRIPT| REACT  
        </p>
        <div className="flex mt-8 gap-4 justify-center lg:justify-center w-full">
          <a
            href="https://www.github.com/Jay-Israel"
            target="_blank"
            rel="noopener noreferrer"
            className="text- hover:text-white rounded-full glow p-4"
          >
            <FaGithub className="text-[48px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/Joshua-Israel"
            target="_blank"
            rel="noopener noreferrer"
            className="text hover:text-white rounded-full glow p-4"
          >
            <FaLinkedinIn className="text-[48px]" />
          </a>
        </div>
      </div>
      <img id="me"
        data-aos="fade-up"
        src={img}
        width={400}
        height={290}
        className="rounded-full aspect-sqaure border-2 p-1 border-tertiary img_glow"
        alt="Joshua Ajagbe"
      />
    </div>
  );
}

export default Banner;
