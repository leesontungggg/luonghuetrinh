"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import Event from "../../components/event";
import Compositions from "../../components/compositions";
import Bio from "../../components/bio";
import Interview from "../../components/interview";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/15.jpg",
  "/images/16.jpg",
  "/images/17.jpg",
  "/images/18.jpg",
  "/images/19.jpg",
  "/images/20.jpg",
  "/images/21.jpg",
  "/images/22.jpg",
  "/images/23.jpg",
  "/images/24.jpg",
  "/images/25.jpg",
  "/images/26.jpg",
  "/images/27.jpg",
  "/images/28.jpg",
  "/images/29.jpg",
  "/images/30.jpg",
  "/images/31.jpg",
  "/images/32.jpg",
  "/images/33.jpg",
  "/images/34.jpg",
  "/images/35.jpg",
  "/images/36.jpg",
  "/images/37.jpg",
  "/images/38.jpg",
  "/images/39.jpg",
  "/images/40.jpg",
  "/images/41.jpg",
  "/images/42.jpg",
  "/images/43.jpg",
  "/images/44.jpg",
  "/images/45.jpg",
  "/images/46.jpg",
  "/images/47.jpg",
  "/images/48.jpg",
  "/images/49.jpg",
  "/images/50.jpg",
  "/images/51.jpg",
  "/images/52.jpg",
  "/images/53.jpg",
  "/images/54.jpg",
  "/images/55.jpg",
  "/images/56.jpg",
  "/images/57.jpg",
  "/images/58.jpg",
  "/images/59.jpg",
  "/images/60.jpg",
  "/images/61.jpg",
  "/images/62.jpg",
  "/images/63.jpg",
  "/images/64.jpg",
  "/images/65.jpg",
  "/images/66.jpg",
  "/images/67.jpg",
  "/images/68.jpg",
  "/images/69.jpg",
  "/images/70.jpg",
  "/images/71.jpg",
  "/images/72.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <main
      id="home"
      className="flex min-h-screen flex-col items-center justify-between bg-black w-screen overflow-hidden"
    >
      <nav className="fixed w-full md:flex flex-row z-10 bg-black/30 left-0 top-0 text-white hidden">
        <a className="px-8 py-4 hover:bg-white/50" href="#home">
          HOME
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#bio">
          BIO
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#events">
          EVENTS
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#compositions">
          COMPOSITIONS
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#interviews">
          INTERVIEWS
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#music">
          MUSIC
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#gallery">
          GALLERY
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#collabs">
          COLLABS
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#contact">
          CONTACT
        </a>
      </nav>
      <label
        className="fixed z-40 cursor-pointer px-3 py-6 bg-black/30 md:hidden w-full"
        htmlFor="mobile-menu"
      >
        <input className="peer hidden" type="checkbox" id="mobile-menu" />
        <div className="relative z-50 block h-[1px] w-7 bg-white bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-white before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
        <div className="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
          &nbsp;
        </div>
        <div className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
          <div className="float-right min-h-full w-[85%] bg-white/30 px-6 pt-12 shadow-2xl">
            <menu className="text-white flex flex-col gap-4 pt-8">
              <li>
                <a className="px-8 py-4 hover:bg-white/50" href="/#home">
                  HOME
                </a>
              </li>
              <li>
                <a className="px-8 py-4 hover:bg-white/50" href="#bio">
                  BIO
                </a>
              </li>
              <li>
                <a className="px-8 py-4 hover:bg-white/50" href="#events">
                  EVENTS
                </a>
              </li>
              <li>
                <a className="px-8 py-4 hover:bg-white/50" href="#compositions">
                  COMPOSITIONS
                </a>
              </li>
              <li>
                <a className="px-8 py-4 hover:bg-white/50" href="#interviews">
                  INTERVIEWS
                </a>
              </li>
              <li>
                <a className="px-8 py-4 hover:bg-white/50" href="#music">
                  MUSIC
                </a>
              </li>
              <li>
                <a className="px-8 py-4 hover:bg-white/50" href="#gallery">
                  GALLERY
                </a>
              </li>
              <li>
                <a className="px-8 py-4 hover:bg-white/50" href="#collabs">
                  COLLABS
                </a>
              </li>
              <li>
                <a className="px-8 py-4 hover:bg-white/50" href="#contact">
                  CONTACT
                </a>
              </li>
            </menu>
          </div>
        </div>
      </label>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
      <div className="w-full h-screen relative">
        <div
          style={{ backgroundImage: `url("/images/hero.jpg")` }}
          className="w-full h-full absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-fixed bg-para bg-no-repeat bg-[70%] md:bg-center bg-cover"
        >
          <div className="w-full h-full flex items-center justify-center text-white bg-white/25 flex-col">
            <p className="text-4xl md:text-6xl font-brassiere -mt-12">
              <span className="font-brassiere_solid">Luong</span> Hue Trinh
            </p>
            <p className="text-md md:text-lg italic mt-3">
              electroacoustic/multimedia composer & improviser
            </p>
            <p className="text-md md:text-lg italic">organizer & producer</p>
          </div>
        </div>
      </div>
      <div className="h-[150px] w-full flex justify-center items-center bg-white italic text-[#777777] text-sm lg:text-lg px-8">
        "Music is my inner voice,
        <br /> expressing deep emotions and thoughts."
      </div>
      <div
        className="w-full h-[200px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/0.jpg")` }}
        id="bio"
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-4xl font-brassiere">Bio</p>
        </div>
      </div>
      <Bio />
      <div
        className="w-full h-[200px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/VET.jpeg")` }}
        id="events"
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-4xl font-brassiere">Events</p>
        </div>
      </div>
      <Event />
      <div
        className="w-full h-[200px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/projects.jpeg")` }}
        id="compositions"
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-4xl font-brassiere">Compositions</p>
        </div>
      </div>
      <Compositions />
      <div
        className="w-full h-[200px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/media.jpg")` }}
        id="interviews"
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-4xl font-brassiere">Interviews</p>
        </div>
      </div>
      <Interview />
      <div
        id="music"
        className="w-full h-[200px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/p11.jpeg")` }}
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-4xl font-brassiere">Music</p>
        </div>
      </div>
      <div className="w-full min-h-screen h-fit relative grid grid-cols-1 lg:grid-cols-3 bg-white py-8 lg:py-32 px-8 lg:px-72 gap-4">
      <iframe
          width="320"
          height="240"
          src="https://youtu.be/fxzuH8gyW0k?si=X-7URrP01pLJwB3Z"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/aMux-nqOcCg?si=4x8mWC-yCMEQTJmL"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/lzgXcwD-Nmw?si=AoRcKz-KPr_Qjbhi"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/1dWJPBceLLo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/wCzbv6xrz18"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/oC02n_IzFMY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/dvg-LzOqGUk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/EZg_8DEZbmc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/CXqgpMBLMLg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/ELB1nbcXoyE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/XeYwGbJ8cwU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/dDrDd6MB1oM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/nZs9-ZVo_DE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/K7rG6ddyIIY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/uMeQoYZnMBA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
      </div>
      <div
        id="gallery"
        className="w-full h-[200px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/gallery.jpg")` }}
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-4xl font-brassiere">Gallery</p>
        </div>
      </div>
      <div className="w-full min-h-screen h-fit relative bg-white lg:py-32 py-8 px-8 lg:px-72 gap-4 flex flex-col items-center text-black">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 h-fit gap-4">
          {images.map((src, index) => (
            <Image
              onClick={() => openImageViewer(index)}
              key={index}
              alt=""
              width={200}
              height={200}
              className="w-full h-auto cursor-pointer"
              src={src}
            />
          ))}
        </div>
      </div>
      <div
        className="w-full h-[200px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/p6-min.jpeg")` }}
        id="collabs"
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-4xl font-brassiere">Collabs</p>
        </div>
      </div>
      <div className="w-[100%] min-h-screen h-fit relative bg-white py-32 px-8 lg:px-72 gap-4 flex flex-col items-left text-[#777777]">
        <p>
          <b>
            <i>
              Composers, Performers & Conductors I have had pleasure to work
              with:
            </i>
          </b>
          <br />
          <br />
          <a href="http://www.alexanderschubert.net">
            {" "}
            <u>Alexander Schubert</u>
          </a>{" "}
          /
          <a href="https://iwk.mdw.ac.at/hofmann/">
            {" "}
            <u>Alex Hofmann</u>
          </a>{" "}
          /
          <a href="https://music.youtube.com/channel/UCC1t8mZhR0mA_PjPYtOAvnQ">
            {" "}
            <u>Andrea Neumann</u>
          </a>{" "}
          /
          <a href="http://www.arnontnongyao.com">
            {" "}
            <u>Arnont Nongyao</u>
          </a>{" "}
          /
          <a href="https://www.audreychen.com">
            {" "}
            <u>Audrey Chen</u>
          </a>{" "}
          /
          <a href="https://antyegreie.com">
            {" "}
            <u>AGF aka Poemproducer</u>
          </a>{" "}
          /
          <a href="https://www.sathecollective.org/about/andy-chia-2">
            {" "}
            <u>Andy Chia</u>
          </a>{" "}
          /
          <a href="https://www.burkhardbeins.de">
            {" "}
            <u>Burkhard Beins</u>
          </a>{" "}
          /
          <a href="https://www.bjorncharlesdreyer.com">
            {" "}
            <u>Bjørn Charles Dreyer</u>
          </a>{" "}
          /
          <a href="http://syrphe.com/c-drik.html">
            {" "}
            <u>Cedrik Fermont</u>
          </a>{" "}
          /
          <a href="http://www.claudiachan.ca">
            {" "}
            <u>Claudia Chan</u>
          </a>{" "}
          /
          <a href="hhttps://www.youtube.com/watch?v=thaADIlL3zg">
            {" "}
            <u>Đoàn Thanh Bình</u>
          </a>{" "}
          /
          <a href="https://www.ghanaweb.com/person/Botri-Dela-772">
            {" "}
            <u>Dela Botri</u>
          </a>{" "}
          /
          <a href="http://www.dieter-mack.de">
            {" "}
            <u>Dieter Mack</u>
          </a>{" "}
          /
          <a href="http://www.djsniff.com">
            {" "}
            <u>DJ Sniff</u>
          </a>{" "}
          /
          <a href="http://www.eva-zoellner.de">
            {" "}
            <u>Eva Zöllner</u>
          </a>{" "}
          /
          <a href="https://www.miasmah.com/eks/index.html">
            {" "}
            <u>Erik K Skodvin aka Miasmah</u>
          </a>{" "}
          /
          <a href="http://www.georghajdu.de">
            {" "}
            <u>Georg Hajdu</u>
          </a>{" "}
          /
          <a href="https://www.hallasteinunn.com">
            {" "}
            <u>Halla Steinunn Stefánsdóttir </u>
          </a>{" "}
          /
          <a href="https://henrikfrisk.com">
            {" "}
            <u>Henrik Frisk</u>
          </a>{" "}
          /
          <a href="https://indramenus.bandcamp.com/track/jalmo-angkoro-mati-murko-live-at-sumonar-fest-2020">
            {" "}
            <u>Indra Menus aka To Die</u>
          </a>{" "}
          /
          <a href="https://zangimusic.wordpress.com/ignaz-schick/">
            {" "}
            <u>Ignaz Schick</u>
          </a>{" "}
          /
          <a href="https://www.ina-ich.net">
            {" "}
            <u>INA-ICH</u>
          </a>{" "}
          /
          <a href="https://www.instagram.com/indramenus/">
            {" "}
            <u>Indra Menus</u>
          </a>{" "}
          /
          <a href="https://www.iac.lu.se/calendar/jakob-riis-inhabitants-intonal-2024">
            {" "}
            <u>Jakob Riis</u>
          </a>{" "}
          /
          <a href="https://jdmozaic.com">
            {" "}
            <u>Jean-David Caillouët</u>
          </a>{" "}
          /
          <a href="https://joachimheintz.net">
            {" "}
            <u>Joachim Heintz</u>
          </a>{" "}
          /
          <a href="https://jeffvonderschmidt.com">
            {" "}
            <u>Jeff von der Schmidt</u>
          </a>{" "}
          /
          <a href="https://juliusholtz.de">
            {" "}
            <u>Julius Holtz</u>
          </a>{" "}
          /
          <a href="https://sites.google.com/site/katthernandez/?fbclid=IwY2xjawFFDvJleHRuA2FlbQIxMAABHZdWUGhNGo5a72hITZ5DCoa_vQwNqOZEHh9x-eZi_mbklnmBKoCNw6skpg_aem_aLnmDEJ70MYEoqhZ-ga78Q">
            {" "}
            <u>Katt Hernandez</u>
          </a>{" "}
          /
          <a href="https://chongkeeyong-studio-c.com">
            {" "}
            <u>Kee-Yong Chong</u>
          </a>{" "}
          /
          <a href="https://koksiewwai.wordpress.com">
            {" "}
            <u>Kok Siew-Wai</u>
          </a>{" "}
          /
          <a href="https://siedlcao.com">
            {" "}
            <u>Lan Cao & Gregor Siedl</u>
          </a>{" "}
          /
          <a href="https://lin-chen-percussion.com">
            {" "}
            <u>Lin Chen</u>
          </a>{" "}
          /
          <a href="https://www.lotteanker.com">
            {" "}
            <u>Lotte Anker</u>
          </a>{" "}
          /
          <a href="https://www.lukasligeti.com">
            {" "}
            <u>Lukas Ligeti</u>
          </a>{" "}
          /
          <a href="http://www.nicholasisherwood.com">
            {" "}
            <u>Nicholas Isherwood</u>
          </a>{" "}
          /
          <a href="https://www.youtube.com/@tramyngo2403">
            {" "}
            <u>Ngô Trà My</u>
          </a>{" "}
          /
          <a href="https://nguyenthanhthuy.weebly.com">
            {" "}
            <u>Nguyễn Thanh Thủy</u>
          </a>{" "}
          /
          <a href="https://www.sathecollective.org/about/natalie-alexandra-2/">
            {" "}
            <u>Natalie Alexandra Tse</u>
          </a>{" "}
          /
          <a href="https://www.minhtamnguyen.com">
            {" "}
            <u>Minh-Tâm Nguyen</u>
          </a>{" "}
          /
          <a href="https://www.donosovera.de/en-gb">
            {" "}
            <u>Martín Donoso Vera </u>
          </a>{" "}
          /
          <a href="https://playingforchange.org/mohammed-alidu/">
            {" "}
            <u>Mohammed Alidu</u>
          </a>{" "}
          /
          <a href="https://en.wikipedia.org/wiki/Mohamed_Issa_Haji_%27Matona%27">
            {" "}
            <u>Mohamed Issa Haji 'Matona</u>
          </a>{" "}
          /
          <a href="https://otomoyoshihide.com">
            {" "}
            <u>Otomo Yoshihide</u>
          </a>{" "}
          /
          <a href="https://oteanankanduro.wordpress.com">
            {" "}
            <u>Oteanankanduro</u>
          </a>{" "}
          /
          <a href="https://www.musikfabrik.eu/en/ensemble/members/peter-veale/">
            {" "}
            <u>Peter Veale</u>
          </a>{" "}
          /
          <a href="https://teamsachikom.wixsite.com/sachiko-m">
            {" "}
            <u>Sachiko M</u>
          </a>{" "}
          /
          <a href="https://sabineercklentz.com">
            {" "}
            <u>Sabine Ercklentz</u>
          </a>{" "}
          /
          <a href="https://www.severineballon.com">
            {" "}
            <u>Séverine Ballon</u>
          </a>{" "}
          /
          <a href="https://www.youtube.com/@ostersjo">
            {" "}
            <u>Stefan Östersjö</u>
          </a>{" "}
          /
          <a href="https://stefankohmann.de">
            {" "}
            <u>Stefan Kohmann</u>
          </a>{" "}
          /
          <a href="https://www.instagram.com/steloolive/">
            {" "}
            <u>Steloolive</u>
          </a>{" "}
          /
          <a href="https://www.instagram.com/griot_barasuno/">
            {" "}
            <u>Seidou Barassounon</u>
          </a>{" "}
          /
          <a href="https://nedlandkultur.com">
            {" "}
            <u>Sigbjørn Nedland</u>
          </a>{" "}
          /
          <a href="https://www.timodwyer.com">
            {" "}
            <u>Tim O'Dwyer</u>
          </a>{" "}
          /
          <a href="https://www.youtube.com/@grundtongrundton">
            {" "}
            <u>Tim Tarek-Grund</u>
          </a>{" "}
          /
          <a href="https://utewassermann.com">
            {" "}
            <u>Ute Wassermann</u>
          </a>{" "}
          /
          <a href="https://ntu.ccasingapore.org/residency/yuen-chee-wai/">
            {" "}
            <u>Yuen Chee Wai</u>
          </a>{" "}
          /
          <a href="http://www.yiikahhoe.com">
            {" "}
            <u>Yii Kah Hoe</u>
          </a>{" "}
          /
          <a href="https://doubtful-sounds.bandcamp.com/album/disillusion">
            {" "}
            <u>Yong Yansend</u>
          </a>{" "}
          / ...
          <br />
          <br />
          <br />
          <a href="http://www.ensembletimf.org">
            {" "}
            <u>Ensemble TIMF (Korea)</u>
          </a>{" "}
          /
          <a href="http://ensemble-handwerk.eu">
            {" "}
            <u>Ensemble Hand werk (Germany)</u>
          </a>{" "}
          /
          <a href="https://hanoinewmusicensemble.org">
            {" "}
            <u>Hanoi New Music Ensemble (Vietnam)</u>
          </a>{" "}
          /
          <a href="https://www.youtube.com/watch?v=Qx6GH9grw0Q">
            {" "}
            <u>Abdoulaye Nderguet & the Bex'Tet (Chad, France)</u>
          </a>{" "}
          /
          <a href="https://www.percussionsdestrasbourg.com/en/">
            {" "}
            <u>Les Percussions de Strasbourg (France)</u>
          </a>
          <br />
          <br />
        </p>
      </div>
      <div
        className="w-full h-[200px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/p10-min.jpeg")` }}
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <h3 className="text-4xl font-brassiere">Contact</h3>
        </div>
      </div>
      <div className="w-[100%] h-fit relative bg-white pt-32 pb-4 px-8 lg:px-72 gap-4 flex flex-col items-left text-[#777777]">
        <div className="">
          <i className=""></i>
          <b>Lương Huệ Trinh </b>
          <br />
          huetrinh.luong@gmail.com
          <br />
        </div>
        <i id="contact" className="">
          {" "}
          <a className="underline" href="mailto:huetrinh.luong@gmail.com">
            Contact me
          </a>{" "}
          for further information!
        </i>
      </div>

      <div className="w-[100%] h-fit relative bg-white py-2 px-8 lg:px-72 gap-4 flex flex-row items-left justify-around md:justify-center md:gap-8 border-none">
        <a href="https://www.facebook.com/luonghuetrinh" target="_blank">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/luong_hue_trinh?igsh=ZTMzYXh5bTh4eHQ1"
          target="_blank"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UCc4ZYWrGpTfOk92rhvsKtMg"
          target="_blank"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/hue-trinh-luong-5a56b8215/"
          target="_blank"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </a>
      </div>

      <div className="w-[100%] h-fit relative bg-white pt-12 pb-32 px-8 lg:px-72 gap-4 flex flex-col items-left text-[#777777]">
        <h3 className="text-center text-xl">Legal Notice</h3>
        <p>
          <b>Lương Huệ Trinh </b> <br />
          Paris - France and Hanoi - Vietnam
          <br />
          <br />
          <br />
          <b>Copyright</b>
          <br />
          © 2024, <br />
          All rights reserved
          <br />
          The content of this website is protected by international copyright
          laws. The content of this site may not be used for reproduction in any
          form or for transmission, multiplication and publication by electronic
          mediums without the express written permission of{" "}
          <b>Lương Huệ Trinh</b>, unless otherwise stated.
          <br />
          <b>Links to external websites</b>
          <br />
          The website contains links to external websites. We do not accept any
          responsibility for the contents and data copyright policies of
          external websites, as this lies beyond our jurisdiction and influence.
          All links have been carefully examined, and do not pose any legal or
          ethical issues at the time of publishing.
          <br />
          <b>Exclusion of liability</b>
          <br />
          This contents of the website reflect the ongoing nature of a
          continuous working process. I cannot guarantee the actuality, quality,
          correctness or completeness of the information contained on our web
          pages, although utmost care has been taken with the selection of
          included content.
          <br />
          No liability claims can be made against me, relating to damages of
          material or ideological claims caused by the use or misuse of the
          presented information or by faulty and incomplete information.
        </p>
      </div>

      <a
        href="#"
        className="fixed bottom-3 md:bottom-6 right-3 md:right-6 bg-black/50 rounded-full z-50 w-8 md:w-10 h-8 md:h-10 p-3 flex justify-center items-center cursor-pointer"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="#74C0FC"
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          />
        </svg>
      </a>
    </main>
  );
}
