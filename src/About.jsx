import img from "./assets/TOONME.jpg";
import JOSHUA_OLUWASEGUN_AJAGBE_CV from "./assets/JOSHUA_OLUWASEGUN_AJAGBE_CV.pdf";


function About() {
  return (
    <div
      id="About"
      className="lg:px-50 px-20 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-20 items-center"
    >
      <img
        id="me"
        data-aos="fade-down"
        src={img}
        width={350}
        height={290}
        className="rounded-full border-2 p-1 border-tertiary img_glow"
        alt="Cristian Vellio"
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-center items-center text-white">
        <h2
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal text-secondary uppercase text-white"
        >
          About Me
        </h2>
        <p data-aos="fade-left" className="text-align: justify;">
          I am a Software Developer with a solid foundation in Front-End web
          development. I graduated from Iscom Uviversity Benin Republic form the
          Department of Computer Science of the Faculty of Pure and Applied
          Sciences, then I Later proceded to sharpen my techinical Skills in
          Software Devlopment{"@"}
          <a
            className="text-xl text-violet-400 underline italic"
            href="https//www.Bluehouse Technologies.Com"
            target="blank"
          >
            Bluehouse Technologies
          </a>
          . I’m currently pursuing a certificate award for Full-stack Software
          Devlopment still form Bluehouse, where we are taught and tasked with
          Jobs of building and maintaining Projects ranging from Junior to
          Senior level App and Web Devlopment Coached by Mentors who are ready
          to help where Neccesary. <br />
          Additionally, I am a Musician and a Producer with the talent in
          Drumming and also I train willing individuals who want to understand
          the concept of Computer Application in my Expertise field. <br />
          and I previously pursued a course in Music Production. These
          experiences have enriched my creative problem-solving skills in every
          aspect that I learnt, which I now apply in the IT and programming
          world. My passion for technology began early: I completed my first
          Junior PC Operator course at age 17, even without owning a computer at
          the time. <br /> I am a self-motivated and empathetic individual who
          thrives in collaborative environments. I enjoy learning from others,
          sharing knowledge, and tackling challenges head-on. My journey
          reflects my deep enthusiasm for the IT field and my pride in evolving
          into a dedicated Developer.
          <br />I look forward to potential collaborations or working with you
          in the future.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2"></div>
            <button className="neno-button shadow-xl hover:shadow-secondary/50  text-white border-2 hover:bg-secondary border-tertiary rounded-lg py-4 px-8 uppercase relative overflow-hidden ">
              <a
                href={JOSHUA_OLUWASEGUN_AJAGBE_CV}
                download="JOSHUA_OLUWASEGUN_AJAGBE_CV"
              >
                Download Resume (EN)
              </a>
            </button>
          </div>
        </div>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
