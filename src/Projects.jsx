import img1 from "./assets/TOONME.jpg";
import img2 from "./assets/sec.jpg"
import img3 from "./assets/calcu.png";
import img4 from "./assets/stop.jpg";
import img5 from "./assets/TRANSPORTES_X.jpg";
import img6 from "./assets/jay.jpg";
import img7 from "./assets/church.png";
import img8 from "./assets/adss.png";
import img9 from "./assets/Resturantly.jpg";
import img10 from "./assets/forms.jpg";
import img11 from "./assets/Bienestar_Plus_Banner.png";
import { FaReact, FaJava, FaPython, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiAngular, SiTailwindcss, SiTypeform, SiTypescript } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";

function Projects() {
  const projects = [
    {
      img: img3,
      title: "Calculator App",
      link: "https://github.com/Jay-Israel/sci-calculator",
      icon: <FaReact />,
    },
    // {
    //   img: img11,
    //   title: "Bienestar Plus Fullstack",
    //   link: "https://github.com/ISPC-Soluciones/Bienestar-Plus",
    //   icon: <SiAngular />,
    // },
    {
      img: img6,
      title: "Portfolio",
      link: "https://github.com/Jay-Israel/PORT-FOLIO",
      icon: <FaReact />,
    },
    {
      img: img2,
      title: "Fullstack Weather Project IoT",
      link: "https://github.com/Jay-Israel/weather-app",
      icon: <FaHtml5 />,
    },
    {
      img: img4,
      title: "Stop-Watch",
      link: "https://github.com/Jay-Israel/stop-watch",
      icon: <AiOutlineJavaScript />,
    },
    {
      img: img7,
      title: "Curch-Website",
      link: "https://github.com/Jay-Israel/Church-App",
      icon: <FaHtml5 />,
    },
    {
      img: img8,
      title: "Advertisment-site",
      link: "https://github.com/Jay-Israel/ads",
      icon: <FaCss3 />,
    },
    {
      img: img9,
      title: "Resturantly",
      link: "https://github.com/Jay-Israel/Food",
      icon: <FaHtml5 />,
    },
    {
      img: img10,
      title: "Authentication-Forms",
      link: "https://typescript.com/form",
      icon: <SiTypescript />,
    },
    {
      img: img1,
      title: "TOONS(FrontEnd)",
      link: "",
      icon: <FaHtml5 />,
    },
    // {
    //   img: img5,
    //   title: "Transportation Co. (FrontEnd)",
    //   link: "https://transportex-x-utn-frba.netlify.app/",
    //   icon: <FaHtml5 />,
    // },
  ];

  return (
    <div
      id="Projects"
      className="p-30 flex flex-col items-center justify-center"
    >
      <h2
        data-aos="fade-left"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white"
      >
        Projects
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <img
              data-aos="fade-up"
              height={700}
              width={400}
              className="project-image flex items-center text-tertiary hover:text-secondary rounded-3xl p-1 border-1 b_glow"
              src={project.img}
              alt={project.title}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
              <div className="text-6xl text-white rounded-3xl mb-2 glow p-1">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-300">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
