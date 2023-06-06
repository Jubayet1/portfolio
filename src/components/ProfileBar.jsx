import { useState } from "react";
import Swal from "sweetalert2";
import profile from "../assets/profile.png";
import DetailPicturePng from "../assets/images/detail-profile.png";

const ProfileBar = () => {
  const [pictureView, setpictureView] = useState(0);

  const detailImage = () => {
    if (pictureView === 0) {
      setpictureView(pictureView + 1);
    }
    Swal.fire({
      imageUrl: `${DetailPicturePng}`,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Profile Picture",
      showConfirmButton: false,
    });
  };

  return (
    <div id="head-profile" className=" transition duration-150 ease-in-out flex flex-wrap xl:flex-nowrap  w-full   relative">
      <div id="profile-image" className="w-[100%] lg:w-[100%] xl:w-[30%] mx-4">
        <div className="relative image-profile flex justify-center xl:justify-end">
          <picture className="flex justify-center xl:justify-end">
            <source type="image/webp" media="(min-width: 600px)" srcSet={profile} />
            <source type="image/png" media="(max-width: 600px)" srcSet={profile} />
            <img
              id="profile-picture"
              loading="lazy"
              width={"200px"}
              height="200px"
              onClick={detailImage}
              src={profile}
              alt="Profile Picture"
              className={`${pictureView === 1 ? "" : "border-red-500/70"} w-[40%] cursor-pointer rounded-full border-4  `}
            />
          </picture>
        </div>
      </div>
      <div id="profile-desc" className="w-full xl:w-[70%]">
        <div className="desc-profile flex flex-wrap justify-center xl:justify-start">
          <h1 className="xl:text-3xl text-2xl text-center  xl:text-left font-medium w-full">Md. Jubayet Hossain</h1>
          <h2 id="status" className="font-light text-center  xl:text-left">
            Student | <span className="font-normal">Junior Front-End Web</span>
          </h2>
          <div className={`w-full flex justify-center xl:justify-start pt-2 text-slate-900 dark:text-white `}>
            <div id="contact-logo" className="flex  mb-5">
              {/* <!-- Github --> */}
              <a
                href="https://github.com/Jubayet1"
                aria-label="view my github"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex items-center justify-center border  border-slate-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white"
              >
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              {/* <!-- Linkedin --> */}
              <a
                href="https://www.linkedin.com/in/jubayet-hossain-02367a274/"
                target="_blank"
                aria-label="view my linkedin"
                className="linkedin w-9 h-9 mr-3 rounded-full flex items-center justify-center border  border-slate-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white"
              >
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* <!-- Email --> */}
              <a
                href="mailto:jubayetme@gmail.com"
                aria-label="contact me via email"
                target="_blank"
                className="email w-9 h-9 mr-3 rounded-full flex items-center justify-center border  border-slate-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white"
              >
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Gmail</title>
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
              <a href="https://twitter.com/jubayetme" target="_blank" className="linkedin w-9 h-9 mr-3 rounded-full flex items-center justify-center border  border-slate-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white">
                <svg id="changeColor" fill="#DC7633" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="70" zoomAndPan="magnify" viewBox="0 0 375 374.9999" height="70" version="1.0"><defs></defs><g></g><g id="inner-icon" transform="translate(85, 75)"> <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" id="mainIconPathAttribute"></path> </svg> </g></svg>
              </a>
            </div>
          </div>
          <h2 className="font-medium text-lg  text-left">About Me</h2>
          <p className="font-light">I am a web developer, interested in the field of front end web developer and very passionate about improving my coding skills.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
