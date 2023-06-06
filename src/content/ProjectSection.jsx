import React from "react";
import QUIZ from '../assets/QUIZ.jpg'
import Coins from "../assets/Coins.jpg";
import login from "../assets/login.jpg";
import shop from "../assets/shop.jpg";
import manage from "../assets/manage.jpg";
import OntimePicturePng from "../assets/images/Ontime.png";
import LandingPagePng from "../assets/images/landing-page-1.png";
import BookshelfPng from "../assets/images/bookshelf-1.png";
import NobarkuyPng from "../assets/images/nobarkuy-preview-1.png";
import WarkopbaePng from "../assets/images/warkopbae.png";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const dataProjects = [

    {
      title: "employee-management-system",
      desc: "Table Data Management (CRUD)",
      tech: ["React", "Redux-Toolkit", "Bootstrap"],
      img: manage,
      imgPng: manage,
      liveLink: "https://warkopbae-v3-0.vercel.app",
      repoLink: "https://github.com/Jubayet1/employee-management-system"
    },
    {
      title: "WIZ_QUIZ",
      desc: "Its a Trivia/Quiz app",
      tech: ["Javascript", "React", "API"],
      img: QUIZ,
      imgPng: QUIZ,
      liveLink: "https://wiz-quiz.vercel.app/",
      repoLink: "https://github.com/Jubayet1/WIZ_QUIZ"
    },
    {
      title: "Crypto-Park",
      desc: "Information about crypto coins",
      tech: ["React", "API", "Tailwind"],
      img: Coins,
      imgPng: Coins,
      liveLink: "https://crypto-park.vercel.app/",
      repoLink: "https://github.com/Jubayet1/crypto-park"
    },
    {
      title: "Sweet-Manage",
      desc: "Firebase Authentication System",
      tech: ["React", "Firebase", "Tailwind"],
      img: login,
      imgPng: login,
      liveLink: "https://sweet-auth.vercel.app/",
      repoLink: "https://github.com/Jubayet1/sweet-manage"
    },
    {
      title: "Shopaholic",
      desc: "Simple E-Commerce App",
      tech: ["React", "Redux-Toolkit", "Tailwind"],
      img: shop,
      imgPng: shop,
      liveLink: "https://web-movie-react-js.vercel.app/",
      repoLink: "https://github.com/Jubayet1/shopaholic"
    },
  ];

  return (
    <div id="project" className=" container  mt-10 ">
      <div id="project-content" className="flex flex-wrap justify-center w-full">
        {dataProjects.map((project, id) => (
          <div className={`bg-white text-black dark:bg-slate-900 dark:text-white card relative mt-2 lg:m-3 rounded-lg shadow-md shadow-sky-400 h-[350px]`}>
            <div className="w-full h-[60%]">
              <picture>
                <source type="image/webp" media="(min-width: 600px)" srcSet={project.img} />
                <source type="image/png" media="(max-width: 600px)" srcSet={project.imgPng} />
                <img loading="lazy" className="w-full h-full rounded-t-lg" src={project.img} alt={`${project.title} preview`} />
              </picture>
            </div>
            <div id="project-title" className="w-full ">
              <div className="p-5">
                <div className="w-full flex">
                  {project.tech.map((stack, id) => (
                    <h3 key={id} className="flex flex-row justify-center px-2 rounded-full border-2 border-sky-500 items-center mr-1">
                      {stack}
                    </h3>
                  ))}
                </div>
                <h2 className="font-semibold  text-md lg:text-lg mt-1 hover:text-sky-400 ease-in-out transition-all duration-75">{project.title}</h2>
                <p className="font-normal">{project.desc}</p>
                <div className="flex flex-row justify-center">
                  <a href={project.repoLink} target="_blank"><button className=" px-2 rounded-full border-2 border-sky-500 flex justify-center flex-wrap items-center mr-1">
                    GitHub
                  </button></a>
                  <a href={project.liveLink} target="_blank"><button className=" px-2 rounded-full border-2 border-sky-500 flex justify-center flex-wrap items-center mr-1">
                    Live
                  </button></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
