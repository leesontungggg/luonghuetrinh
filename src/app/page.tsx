"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const images = [
  "/images/1a.jpg",
  "/images/1b.jpg",
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
        <a className="px-8 py-4 hover:bg-white/50" href="#biography">
          BIOGRAPHY
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#events">
          EVENTS
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#works">
          WORKS
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#music">
          MUSIC
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#gallery">
          GALLERY
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#links">
          LINKS
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#contact">
          CONTACT
        </a>
        <a className="px-8 py-4 hover:bg-white/50" href="#legal">
          LEGAL NOTICE
        </a>
      </nav>
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
          className="w-full h-full absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-fixed bg-para bg-no-repeat bg-center bg-cover"
        >
          <div className="w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
            <p className="text-4xl md:text-6xl font-brassiere">
              <span className="font-brassiere_solid">Luong</span> Hue Trinh
            </p>
            <p className="text-md md:text-lg italic">
              Multimedia composer & improviser
            </p>
          </div>
        </div>
      </div>
      <div className="h-[150px] w-full flex justify-center items-center bg-white italic text-[#777777] text-sm lg:text-lg px-8">
        "Music is the voice from my inner self,
        <br /> the sincerity of my emotions and thoughts."
      </div>
      <div
        className="w-full h-[100px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/0.jpg")` }}
        id="biography"
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-6xl font-brassiere">Biography</p>
        </div>
      </div>
      <div className="h-fit w-full flex justify-center items-center bg-white py-8 lg:py-32 px-8 lg:px-72 flex-col">
        <p className="mt-8 text-[#777777]">
          Short version: Starting with music at age 5, then in 1998 at age 13,
          LUONG Hue Trinh entered the Vietnam National Academy of Music. After
          12 years of studying, she obtained her Bachelor’s degree in Jazz
          Keyboard in 2010. Since then, she has focused on electroacoustic
          music. From 2015 to 2018, she won a full German Academic Exchange
          Service (DAAD) scholarship for the program New Techniques in
          Composition and then, Master Multimedia Composition at Hochschule für
          Musik & Theater Hamburg.
          <br />
          <br />
          LUONG is interested in exploring traditional and experimental elements
          in music and visuals, in scenography and in creating artwork for
          specific sites. Not only active as a composer but also an improviser,
          she got commissions for exhibitions, contemporary dance projects,
          films and live performances in many different countries in Asia,
          Europe, Australia, Canada, North America and Africa.
          <br />
          ------------------
          <br />
          <br />
          Full:
          <br />
          Starting with music at age 5, then in 1998 at age 13, LUONG Hue Trinh
          entered the Vietnam National Academy of Music. After 12 years of
          studying, she obtained her Bachelor’s degree in Jazz Keyboard in 2010.
          Since then, she has focused on electroacoustic music under the
          guidance of Vietnamese composer Nguyen Xuan Son (SonX). From 2015 to
          2018, she won a full German Academic Exchange Service (DAAD)
          scholarship for the program New Techniques in Composition and then,
          Master Multimedia Composition with Prof. Dr. Georg Hajdu, Prof. Elmar
          Lampson and Alexander Schubert at Hochschule für Musik & Theater
          Hamburg.
          <br />
          <br />
          LUONG is interested in exploring traditional and experimental elements
          in music and visuals, in scenography and in creating artwork for
          specific sites. Not only active as a composer but also an improviser,
          she got commissions for exhibitions, contemporary dance projects,
          films and live performances in many different countries in Asia,
          Europe, Australia, Canada, North America and Africa.
          <br />
          <br />
          Illusions (2016), her first album, was reviewed and became one of the
          Best of 2016 – Albums of The Year selected by Avant Music News, San
          Francisco-USA. Hanoi Grapevine Finest 2019, the first and only
          bi-lingual site of Art and Culture Events in Vietnam chose her as the
          Finest Artist of the year. She won a scholarship in the Réciprocité
          program of Villa Saigon-Institut Français Vietnam for a 3
          month-residence at the Cité Internationale des Arts Paris in 2020. In
          the same year, she was chosen as one of 14 successful alumni of DAAD
          Vietnam since 1985 and was written in a publication for the
          celebration of the 45 years of diplomatic relations between Germany
          and Vietnam.
          <br />
          Trinh's music was broadcast from time to time on the radio in the USA,
          Thailand, India, Czech Republic, Australia, Scotland, England and
          highlighted as Artist of the Month on StillStream Radio, Los
          Angeles-USA (2013). The Norwegian Broadcasting Corporation (NRK)
          interviewed and presented her music in 2014 & 2015. Her performance in
          Mikromusik Festival (2018) organised by Berliner Künstlerprogramm des
          DAAD and the Humboldt Forum Foundation was broadcasted on radio
          Deutschlandfunk Kultur, Germany.
          <br />
          <br />
          Hanoi Sound Stuff Festival (2010 & 11)/ Riverscapes IN FLUX (2011-13)
          toured in five Southeast Asian countries by Goethe Institut/ Hanoi New
          Music Festival (2013 & 18)/ The Roving Eye - Contemporary Art from
          South-East Asia (2014) Istanbul/ SAVAKA Vol. 11- Asia Experimental
          Music Current Project – Artist of the Month (July 2014) for concerts
          and talks at Shanghai Rockbund Art Museum & Banye Art Hotel in
          Hangzhou/ as a creator in Echoes (2014) - a “geolocative” audio
          project in Hanoi-Copenhagen & workshop in Roskilde University/
          Soundtrack for hand drawn animation film Light-being by Nguyen Hoang
          Giang & trailer of Mini DOCFEST (2014) Hanoi/ Asian Meeting Festival
          (2015) Tokyo and Kyoto/Punkt Festival (2015) Kristiansand Norway.
          <br />
          <br />
          Blurred Edges Festival (2016 & 17) Hamburg/ Project Hanoi-Berlin
          Experimental Music Meeting in Copenhagen Jazz Festival (2016)
          Copenhagen & Berlin/ Soundtrack for a five-channel video The Bridge 3
          (2016) by Le Brothers at Goethe Institut Hanoi/ Opera Dido & Aeneas
          (2016) at the Opera Stabile - Staatsoper Hamburg/ the 13th SMC
          Conference 2016 - Sound & Music Computing Hamburg/ Wenjack (2016) - an
          audio book for disable people, by The National Network for Equitable
          Library Service (NNELS) Toronto/ Concert tour of project wESTAMAN
          (2016-17) Southern Norway/ Virtual Exhibition – OUA Electroacoustic
          Music Festival (2017) at Osaka University of Art, Japan/ Next
          Generation 7.0:SENSORIK Festival (2017) at ZKM Karlsruhe Germany/
          Concert Vietnamese words and music (2017) at Inter Arts Center-Malmö
          Academy of Music Sweden/ Portrait Concert: Luong Hue Trinh (2017) in
          the 43th Lüneburg Neue Musik Festival Germany/ G((o))ng Tomorrow
          Festival (2017) at Jazzhouse Copenhagen/ Concert of Trio “Đ” (2017) at
          Inter Art Center Malmö/ Summer Concert (2018) at Skálholt church,
          Iceland/ STREAKS - a multimedia concert by Luong Hue Trinh (2018)
          Hamburg/ ASEAN Youth Ensemble & International Conference MUSIC &
          METAMORPHOSIS (2018) at Princess Galyani Vadhana Institute of Music,
          Bangkok.
          <br />
          <br />
          Ultima Oslo Contemporary Music Festival (2018) Norway/ Project
          Berlin-Hanoi Meeting in Electroacoustic music (2019) Goethe Institut
          Hanoi/ VỆT - Multimedia Concert by Luong Hue Trinh (2019) by Goethe
          Institut Hanoi and Institut Français de Hanoi/ the 10th Anniversary
          Celebrations of Manila Composers Lab (2019) at the Philippines
          University/ Concert In the Path of the Ancestors (2019) at Vietnam
          National Academy of Music/ Concert The Poetry of the Moon (2019) at
          Goethe Institut Hanoi/ Blind Signal project (2019) at Goethe Institut
          Hanoi and Wasserspeicher Prenzlauer Berg Berlin/ Concert Frontière
          Indécise/Blurred Boundary (2019) at Institut Françai de Hanoi -
          L’Espace/ Intonal Festival at Inter Arts Center, Malmö Academy of
          Music Sweden/ SoundBridge IV Contemporary music Festival (2019) at
          Taylor’s University, Malaysia/ Franco-Vietnamese concert Lettres de
          Hanoi (2019) in European Music Festival at Ho Chi Minh Conservatory of
          Music and Hanoi Youth Theatre, Vietnam/ Fête de la Musique (2020) at
          Alliance Française d'Accra, Ghana/ INTERKONZERT - intermedial und
          interkulturell (2020) with ensemble Handwerk at Alte
          Feuerwache-Cologne, Theater im Pumpenhaus-Münster,
          Bürgermeisterhaus-Essen in Germany/ HEAVE/Phập phồng - a multimedia
          performance (2021)at Alliance française Accra, Ghana/ Drifting
          Intervals (2021)- online concert for 5 female artists from Vietnam,
          Germany, France Switzerland, & Ghana by Goethe Institut Vietnam/ TÍCH
          TỊCH TÌNH TANG... Concert (2022) at Goethe Institut Vietnam/ ACCRA
          JAZZ FESTIVAL 2022 at Alliance Française Accra/ THE APPEAL (2022) - an
          intercultural & intermedia, a site-specific performance by Luong Hue
          Trinh at Alliance Française Accra, Ghana/ The Vivid Silences (2022) -
          a multimedia and site-specific performance at Goethe Institut Ghana,
          NHẤP NHOÁNG (2023) - a music performance at the 33rd AngelicA
          International Music Festival in Bologna, Italy/ Slanted Silhouettes -
          a multimedia & site-specific project at Alliance Française Accra,
          Ghana ...
          <br />
          <br />
        </p>
      </div>
      <div
        className="w-full h-[100px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/VET.jpeg")` }}
        id="events"
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-6xl font-brassiere">Events</p>
        </div>
      </div>
      <div className="w-full min-h-screen h-fit relative bg-white py-32 px-8 lg:px-72 gap-4 flex flex-col items-center text-[#777777]">
        <ul className="flex flex-col gap-8">
          <li className="list-disc">
            09.06.2024 at 21:00:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/photo/?fbid=464322732923807&set=a.325553506800731"
            >
              #Gió chướng/Headwind - Ồ Ạt Oh Art Festival 2024{" "}
            </a>{" "}
            at S.Pace - Sun Life, 102c Nguyễn Văn Cừ, district 1, Saigon,
            Vietnam.{" "}
          </li>
          <li className="list-disc">
            04.06.2024 at 19:30:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/photo/?fbid=464316002924480&set=a.325553506800731"
            >
              #Ớiii À! - a night of music & dance - Ồ Ạt Oh Art Festival 2024{" "}
            </a>{" "}
            at Amanaki Thảo Điền, fl. 2, 10 Nguyễn Đăng Giai, district 2,
            Saigon, Vietnam.{" "}
          </li>
          <li className="list-disc">
            01.06.2024 at 19:30:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/photo/?fbid=464316919591055&set=a.325553506800731"
            >
              #Những thanh âm chưng cất/Distilled Sounds - a night of multimedia
              compositions - Ồ Ạt Oh Art Festival 2024{" "}
            </a>{" "}
            at S.Pace - Sun Life, 102c Nguyễn Văn Cừ, district 1, Saigon,
            Vietnam.{" "}
          </li>
          <li className="list-disc">
            31.05.2024 at 19:30:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/photo?fbid=464317426257671&set=a.325553506800731"
            >
              #Cót Két Concert - Ồ Ạt Oh Art Festival 2024{" "}
            </a>{" "}
            at Amanaki Thảo Điền, fl. 2, 10 Nguyễn Đăng Giai, district 2,
            Saigon, Vietnam.{" "}
          </li>
          <li className="list-disc">
            09.03.2024 at 20:00:{" "}
            <a className="underline" href=" ">
              #Serious Play Improv Lab (SPIL 085){" "}
            </a>{" "}
            at Percussion Sotre, Kota Damansara, Malaysia.{" "}
          </li>
          <li className="list-disc">
            08.03.2024 at 20:00:{" "}
            <a className="underline" href=" ">
              #Album Release - Opening Performance{" "}
            </a>{" "}
            at Khatulistiwa 3/F, B-2-36, 13AJalan PJU 5, Cascades, Kota
            Damansara, Malaysia.{" "}
          </li>
          <li className="list-disc">
            06.03.2024 at 19:30:{" "}
            <a className="underline" href=" ">
              #Lương Huệ Trinh & Natalie Alexandra TSE{" "}
            </a>{" "}
            at ThirdSpace, 113 Depot Road #14-1023 Singapore 100113.{" "}
          </li>
          <li className="list-disc">
            23.01.2024 at 19:30:{" "}
            <a className="underline" href=" ">
              #Premiere Concert of the project TRAIECT IV in Vietnam{" "}
            </a>{" "}
            at Culture & Art Center, 22 Hàng Buồm, Hanoi.{" "}
          </li>
          <li className="list-disc">
            20.01.2024 at 19:30:{" "}
            <a className="underline" href=" ">
              #Premiere Concert of the project TRAIECT IV in Vietnam{" "}
            </a>{" "}
            at Culture & Art Center, 22 Hàng Buồm, Hanoi.{" "}
          </li>
          <li className="list-disc">
            18.01.2024 at 7:30 PM{" "}
            <a className="underline" href="https://hgnm.de/traiect-iv-vietnam/">
              #Premiere Concert of the project TRAIECT IV in Vietnam{" "}
            </a>{" "}
            at MoTplus, Amanaki Thảo Điền, fl 6., 10 Nguyễn Đăng Giai, Thảo
            Điền, Saigon.{" "}
          </li>
          <li className="list-disc">
            29.11.2023 at 8 PM{" "}
            <a className="underline" href="https://hgnm.de/traiect-iv-vietnam/">
              #Premiere Concert of the project TRAIECT IV Vietnam{" "}
            </a>{" "}
            at Academy of Arts, Berlin - Germany.{" "}
          </li>
          <li className="list-disc">
            28.11.2023 at 7 PM{" "}
            <a className="underline" href="https://hgnm.de/traiect-iv-vietnam/">
              #Premiere Concert of the project TRAIECT IV Vietnam{" "}
            </a>{" "}
            at Übersee Museum, Bremen - Germany.{" "}
          </li>
          <li className="list-disc">
            26.11.2023 at 6 PM{" "}
            <a className="underline" href="https://hgnm.de/traiect-iv-vietnam/">
              #Premiere Concert of the project TRAIECT IV Vietnam{" "}
            </a>{" "}
            at Sprengel Museum, Hannover - Germany.{" "}
          </li>
          <li className="list-disc">
            24.11.2023 at 7:30 PM{" "}
            <a className="underline" href="https://hgnm.de/traiect-iv-vietnam/">
              #Conversations with composers of the project TRAIECT IV Vietnam{" "}
            </a>{" "}
            at Hannover University of Music, Theater and Media (Room E45), New
            House 1, 30175 Hannover.{" "}
          </li>
          <li className="list-disc">
            13.10.2023 at 6 PM{" "}
            <a
              className="underline"
              href="https://iwk.mdw.ac.at/hofmann/peek-etudes/news/2023/04/04/Vienna-Workshop/"
            >
              #Showcase Concert of the project Études for Live-Electronics
            </a>{" "}
            at the Future Art Lab - Klangtheater at University of Music and
            Performing Arts, Anton-von-Webern-Platz 1 1030 Vienna - Austria.{" "}
          </li>
          <li className="list-disc">
            10-12.10.2023 at 10 AM - 5 PM{" "}
            <a
              className="underline"
              href="https://iwk.mdw.ac.at/hofmann/peek-etudes/news/2023/04/04/Vienna-Workshop/"
            >
              #Workshop Live-Electronics{" "}
            </a>{" "}
            at University of Music and Performing Arts (mdw), Vienna - Austria.{" "}
          </li>
          <li className="list-disc">
            22.09.2023 at 7 PM{" "}
            <a
              className="underline"
              href="hhttps://www.facebook.com/photo?fbid=1072897170715058&amp;set=pcb.1072897240715051"
            >
              #composition Departure of a Leaf{" "}
            </a>
            for violin and electronics for Halla Steinunn Stefánsdóttir will be
            performed at Sibelius Museum, Turku - Finland.{" "}
          </li>
          <li className="list-disc">
            08.08.2023 at 7 PM{" "}
            <a
              className="underline"
              href="https://www.facebook.com/photo/?fbid=600592735536733&amp;set=a.500080278921313"
            >
              #A talk: Multimedia Projects: Meet &amp; Share
            </a>{" "}
            at Alliance Française Accra, Ghana.{" "}
          </li>
          <li className="list-disc">
            09.06.2023 at 7 PM{" "}
            <a
              className="underline"
              href="https://web.facebook.com/events/181801891191773?acontext=%7B%22source%22%3A%2229%22%2C%22ref_notif_type%22%3A%22plan_user_invited%22%2C%22action_history%22%3A%22null%22%7D&amp;notif_id=1686043548618768&amp;notif_t=plan_user_invited&amp;ref=notif"
            >
              #Concert &amp; Conversation with Eva Zöllner, Stefan Kohmann &amp;
              Dela Botri
            </a>{" "}
            at Goethe Institut Ghana.{" "}
          </li>
          <li className="list-disc">
            06.06.2023 at 6 PM{" "}
            <a className="underline" href="">
              #Meet Mohammed Alidu and Bizung School of Music and Dance{" "}
            </a>{" "}
            at the Wooden Restaurant, Tamale, Ghana.{" "}
          </li>
          <li className="list-disc">
            03.06.2023 at 7:30 PM{" "}
            <a
              className="underline"
              href="https://www.facebook.com/photo/?fbid=564866039109403&amp;set=a.500080278921313"
            >
              #SLANTED SILHOUETTES{" "}
            </a>{" "}
            - a multicultural, multimedia and a site-specific performance by
            Luong Hue Trinh with artists from Ghana, Vietnam, France, Togo,
            Germany &amp; Cameroon, at Alliance Française Accra, Ghana.
          </li>
          <li className="list-disc">
            10.05.2023 at 9 PM{" "}
            <a
              className="underline"
              href="https://aaa-angelica.com/aaa/festival/angelica-33-lauren-sarah-hayes-luong-hue-trinh-ngo-tra-my/"
            >
              #NHẤP NHOÁNG{" "}
            </a>{" "}
            - a performance by Luong Hue Trinh and Ngo Tra My at the 33rd
            AngelicA International Music Festival, at Teatro San Leonardo - a
            Performance Art Theatre at San Vitale 63 - 67, Bologna, Italy.
          </li>
          <li className="list-disc">
            14-21.04.2023{" "}
            <a
              className="underline"
              href="https://iwk.mdw.ac.at/hofmann/peek-etudes/"
            >
              #Workshop of project Études for Live-Electronics{" "}
            </a>{" "}
            at University of Music and Performing Arts Vienna, Austria.
          </li>
          <li className="list-disc">
            03-05.04.2023{" "}
            <a className="underline" href="https://hgnm.de/traiect-iv-vietnam/">
              #Workshop and performance of project TRAIECT IV - Vietnam{" "}
            </a>{" "}
            at Hochschule für Musik Theater und Medien Hanover, Germany.
          </li>
          <li className="list-disc">
            26.11.2022 at 7:30 PM{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/1123926778327014/?ref=newsfeed"
            >
              #The Vivid Silences{" "}
            </a>{" "}
            - a multimedia and site-specific project by Luong Hue Trinh at
            Goethe Institut Ghana. A production of Goethe Institut Ghana with
            the support from Alliance Française Accra.
          </li>
          <li className="list-disc">
            23.10.2022 at 4:00 PM{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/1177999709730550?ref=newsfeed"
            >
              #Music for a short experimental film 'Yellow My Window' by
              Ghanaian artist, Ato Kwamina Hasford - Oteanankanduro{" "}
            </a>{" "}
            at Auditorium, Cité Internationale des Arts, Paris.
          </li>
          <li className="list-disc">
            26.08.2022{" "}
            <a
              className="underline"
              href="https://hallasteinunn.bandcamp.com/album/strengur"
            >
              #'strengur' album release{" "}
            </a>{" "}
            - a project of the Icelandic violinist, composer Halla Steinunn
            Stefánsdóttir with four international composers, released by
            Carriers Records, New York City - USA with the support from Ministry
            of Culture in Iceland.
          </li>
          <li className="list-disc">
            18.06.2022 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/AllianceFrancaisedAccra/photos/a.143983402374576/4739778496128354/"
            >
              #THE APPEAL
            </a>{" "}
            - an intercultural and intermedia, a site-specific project by Luong
            Hue Trinh, with artists from Ghana, Vietnam, Germany and France, at
            Alliance Française Accra - Ghana. A production of Alliance Française
            Accra.
          </li>
          <li className="list-disc">
            19.05.2022 at 6:00 PM:{" "}
            <a
              className="underline"
              href="https://www.murateartdistrict.it/en/electric-voice/?fbclid=IwAR05fFzl6FzkxQfi9vOeG_pKSefnLgqqECeScZfzsa3AGNGs_1YybepYCYs"
            >
              #THE ELECTRIC VOICE - NICHOLAS ISHERWOOD
            </a>{" "}
            - Music for Voice and Electro-acoustic music at MAD Murate Art
            District, Florence - Italy
          </li>
          <li className="list-disc">
            07.05.2022 at 7:30 PM:{" "}
            <a
              className="underline"
              href="https://music.washington.edu/events/2022-05-07/guest-artist-recital-nicholas-isherwood-bass-baritone?fbclid=IwAR3VHSaBDhx2QIVkYAHTuWeb-4PJ736HVnDLuSNdARfl8VWlAHUQZIxma_Y"
            >
              #THE ELECTRIC VOICE - NICHOLAS ISHERWOOD
            </a>{" "}
            - Music for Voice and Electro-acoustic music at Brechemin
            Auditorium, University of Washington, Seattle - USA
          </li>
          <li className="list-disc">
            30.04.2022 at 7:00 PM:{" "}
            <a className="underline" href="">
              #Societe Generale Ghana Jazz Festival - as a guest artist with
              Abdoulaye Nderguet &amp; theBex'Tet Jazz Band (France/Chad)
            </a>{" "}
            at Alliance Française Accra, Ghana.
          </li>
          <li className="list-disc">
            20.04.2022 at 4:30 PM: Worldpremiere of{" "}
            <a
              className="underline"
              href="https://www.facebook.com/photo?fbid=10159960037673966&amp;set=a.120770133965"
            >
              {" "}
              #THE ELECTRIC VOICE - NICHOLAS ISHERWOOD
            </a>{" "}
            - Music for Voice and Electro-acoustic music at The California State
            University, Fullerton - USA
          </li>
          <li className="list-disc">
            09.04.2022 at 7:30 PM: Worldpremiere of{" "}
            <a
              className="underline"
              href="https://museo.unav.edu/agenda/-/events/09/04/2022/the-electric-voice/JA6fw1cTOMDY/35767801?fbclid=IwAR0gypZeKZqp1tqRPqXKEYIB91OtRzlOFrpKed2_57aXQe26LDC9tWuEsPQ"
            >
              {" "}
              #THE ELECTRIC VOICE - NICHOLAS ISHERWOOD
            </a>{" "}
            - Music for Voice and Electro-acoustic music at Theatre of
            University of Navarra Museum, Pamplona - Spain.
          </li>
          <li className="list-disc">
            02.04.2022 at 7:30 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/2154272998054200/?ref=newsfeed"
            >
              {" "}
              #TÍCH TỊCH TÌNH TANG Concert
            </a>{" "}
            at Goethe-Instiut Hanoi, 56-58 Nguyen Thai Hov, Hanoi - Vietnam.
          </li>
          <li className="list-disc">
            06.11.2021 at 4:00 PM-6 PM Singapore Time:{" "}
            <a className="underline" href="">
              {" "}
              #Fusing Tradition and Innovation
            </a>
            , a presentation panel in the SEADOM (the Southeast Asia Directors
            of Music) 30 Under 30, hosted by Yong Siew Toh Conservatory of Music
            - National University of Singapore.
          </li>
          <li className="list-disc">
            17.07.2021 at 7:00 PM-Vietnam, 2 PM-Europe, 12 PM-Ghana:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/947355292779971?ref=newsfeed"
            >
              {" "}
              #Drifting Intervals/Những khoảng trôi
            </a>{" "}
            - a network performance from Germany, France, Switzerland, Vietnam
            and Ghana. Live performance of Vietnamese artist with audiences at
            Goethe-Institut Vietnam, 56-58 Nguyễn Thái Học, Hà Nội.
          </li>
          <li className="list-disc">
            29.05.2021 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/307499067714217"
            >
              {" "}
              #HEAVE/Phập phồng - a multimedia project{" "}
            </a>{" "}
            for music, poetry, dance and video at the outdoor Amphitheater -
            Alliance Française, Casely Hayford Road, Airport Residential Area,
            Accra - Ghana.
          </li>
          <li className="list-disc">
            16.01.2021 at 12:00 PM:{" "}
            <a
              className="underline"
              href="https://www.instagram.com/if_officiel/"
            >
              {" "}
              #Online talk in Guest Lecture Series in Composers on Soundscape
              Composition
            </a>{" "}
            at Leuphana University, Lüneburg Germany.
          </li>
          <li className="list-disc">
            10.12.2020 at 6:00 PM: Online Open-Studios of{" "}
            <a
              className="underline"
              href="https://www.instagram.com/if_officiel/"
            >
              {" "}
              #Le lointain proche project
            </a>{" "}
            in the Réciprocité program of Villa Saigon, Institut Français du
            Vietnam, Institut Français Paris at Cité interantionale des arts,
            Paris
          </li>
          <li className="list-disc">
            27.09.2020 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/1996030040530009"
            >
              {" "}
              #INTER Konzert intermedial und interkulturell
            </a>{" "}
            with ensemble Hand werk, đàn Tranh player Nguyễn Thanh Thủy and
            video at Bürgemeisterhaus Essen Werden, Heckstraße 105, 45239 Essen
            - Germany.
          </li>
          <li className="list-disc">
            26.09.2020 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/684394142288505/"
            >
              {" "}
              #INTER Konzert intermedial und interkulturell
            </a>{" "}
            with ensemble Hand werk, đàn Tranh player Nguyễn Thanh Thủy and
            video at Theater in Pumpenhaus Münster, Gartenstr. 123 - Germany.
          </li>
          <li className="list-disc">
            25.09.2020 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/324146162052937"
            >
              {" "}
              #INTER Konzert intermedial und interkulturell
            </a>{" "}
            with ensemble Hand werk, đàn Tranh player Nguyễn Thanh Thủy and
            video at Alte Feuerwache Cologne, Melchiorstr. 3 - Germany.
          </li>
          <li className="list-disc">
            10.09.2020 at 9:00 PM–Midnight Pacific Time (UTC -7) on broadcast
            curated by Radio Eclectus on Hollow Earth Radio: KHUH LP 104.9 in
            Central Seattle, Washington-USA, hollowearthradio.org and on demand
            at Mixcloud starting Friday.
          </li>
          <li className="list-disc">
            06.07.2020 at 10:00 PM BST:{" "}
            <a className="underline" href="https://resonancefm.com/schedule">
              {" "}
              #Sound-art and transmission-art delivered monthly
            </a>{" "}
            by London sound art collective Gwaith Sŵn. To be broadcast on
            Resonance FM via 104.4FM in London and online at
            www.resonancefm.com; repeated on the following Sunday at 6AM and
            also simulcast on DAB+ via Resonance Extra.{" "}
          </li>
          <li className="list-disc">
            20.06.2020 at 8:00 PM: <u>#Fête de la Musique</u> - a performance
            with Ghanaian choreographer/dancer Sena Atsugah at Alliance
            Française d'Accra, Ghana. LIVE STREAM on Instagram: af_accra;
            Facebook: Alliance Francaise d'Accra, Alliance Francaise Accra
            Cultural Events; Youtube: Alliance Francaise Accra.{" "}
          </li>
          <li className="list-disc">
            28 &amp; 30.11.2019 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/579543092783943/"
            >
              {" "}
              #Concert Lettres de Hanoi
            </a>{" "}
            in European Music Festival in Vietnam on 28.11 at Ho Chi Minh
            Conservatory of Music/ on 30.11 at Youth Theatre of Vietnam, Hanoi.{" "}
          </li>
          <li className="list-disc">
            23.11.2019 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/398139147525762/"
            >
              {" "}
              #Concert 5: SoundBridge-IV
            </a>{" "}
            in SoundBridge Contemporary music Festival at Experimental &amp; TV
            Studio, Taylor's University, Malaysia.{" "}
          </li>
          <li className="list-disc">
            20.09.2019 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/379041056079050/"
            >
              {" "}
              #Concert Blind Signal GRMN VTNM
            </a>{" "}
            at Wasserspeicher Prenzlauer Berg, Berlin-Germany.
          </li>
          <li className="list-disc">
            06.07.2019 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/653027985169230/"
            >
              {" "}
              #Concert Frontière Indécise/Blurred Boundary
            </a>{" "}
            for music and video at Institut Francais de Hanoi - L'Espace, 24
            Trang Tien, Hanoi-Vietnam.
          </li>
          <li className="list-disc">
            27.04.2019 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/803450143345055/"
            >
              {" "}
              #Concert: Blind Signal Vietnam-Germany "Đoàn"
            </a>{" "}
            at Goethe-Institut Hanoi, 56-58 Nguyen Thai Hoc, Hanoi-Vietnam.
          </li>
          <li className="list-disc">
            26.04.2019 at 7:00 PM: world premiere of "Móng Hường/Scarlet Nails"
            for đàn Tranh and electronics in the Intonal Festival at Inter Arts
            Center, Red Room, Bergsgatan 29, 214 22 Malmö-Sweden.
          </li>
          <li className="list-disc">
            21.04.2019 at 8:00 PM: "JiJi" for đàn Tranh, flute/picollo, bass
            clarinet, violin, cello, tape and video in{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/2121387418162515/"
            >
              {" "}
              #Concert The Poetry of the Moon
            </a>{" "}
            with Hanoi New Music Ensemble and conductor Jeff Von Der Schmidt at
            Goethe-Institut Hanoi, 56-58 Nguyen Thai Hoc, Hanoi.
          </li>
          <li className="list-disc">
            20.04.2019 at 12:30 PM -2:30 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/694408290978166/"
            >
              {" "}
              #Workshop/Luong Hue Trinh - In the middle of borders
            </a>{" "}
            in Blind Signal Vietnam-Germany project at Hanoi Rock City, 27/52 To
            Ngoc Van, Hanoi.
          </li>
          <li className="list-disc">
            25-30.03.2019 from 9:00 AM:{" "}
            <a
              className="underline"
              href="https://music.upd.edu.ph/MCL.html?fbclid=IwAR1qRZuEwr7wYuNrr6nU6Ruh7R4uL04tucDZKWuLSyYUcnEVU_G9kQHx8c8"
            >
              {" "}
              #Event the 10th anniversary of Manila Composers Lab
            </a>{" "}
            at University of Philippines.
          </li>
          <li className="list-disc">
            22.03.2019 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/603802070093556/"
            >
              {" "}
              #Concert TIẾP và NỐI/On the Path of the Ancestors
            </a>{" "}
            - Three generations of Vietnam Contemporary music at Vietnamese
            National Academy of Music, 77 Hao Nam, Hanoi.
          </li>
          <li className="list-disc">
            16.03.2019 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/1208841429291813/"
            >
              {" "}
              #Concert VỆT/ STREAKS - Hòa nhạc đa phương tiện/Concert Multimédia
            </a>
            , supported by Goethe-Institut Hanoi and Institut Français de Hanoi
            - L'Espace at L'Espace, 24 Trang Tien, Hanoi.
          </li>
          <li className="list-disc">
            03.03.2019 at 8:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/553010875186595/"
            >
              {" "}
              #Concert Berlin-Hanoi Meeting
            </a>{" "}
            - Electroacoustic music from Berlin &amp; Hanoi at Goethe-Institut
            Hanoi, 56-58 Nguyen Thai Hoc.
          </li>
          <li className="list-disc">
            23.02.2019 at 9:00 PM:{" "}
            <a
              className="underline"
              href="https://www.facebook.com/events/2215605261825328/"
            >
              {" "}
              #Concert Music from shy &amp; sophisticated souls/Những âm thanh
              bẽn lẽn và tinh tế,
            </a>{" "}
            organised by Hanoi Grapevine at Hanoi Rock City 27/52 Tô Ngọc Vân,
            Hanoi.
          </li>
        </ul>
      </div>
      <div
        className="w-full h-[100px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/projects.jpeg")` }}
        id="works"
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-6xl font-brassiere">Works</p>
        </div>
      </div>
      <div className="h-fit w-full flex justify-center items-center bg-white py-8 px-8 lg:px-72 flex-col">
        <p className="my-8 text-[#777777]">List of works:</p>
        <ul className="text-[#777777] flex flex-col gap-8">
          <li className="list-disc">
            <i className="underline">How can I be tender ?</i> (2023) <br /> for
            Grain~bau solo. Duration: 9'30" <br /> Premiere at Showcase Concert
            at the Future Art Lab - Klangtheater at University of Music and
            Performing Arts, Vienna - Austria.
            <br /> Commissioned for the artistic research project Études for
            Live-Electronics 2023 - 2025 by Alex Hofmann - Institut für
            Musikalische Akustik Wienner Kangstil.
          </li>
          <li className="list-disc">
            <i className="underline">Đốm</i> (2023)
            <br />
            for two voices (traditional Vietnamese singing Ả Đào, experimental),
            Phách (wooden block), đàn Bầu, electronics and video. Duration: 10'
            <br />
            Premiere at Sprengel Museum - Hanover, Overseas Museum - Bremen,
            Academy of Arts - Berlin.
            <br />
            Commissioned for the project TRAIECT IV Vietnam by Hannoversche
            Gesellschaft für Neue Musik (Hanover Society for New Music),
            Germany.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">SLANTED SILHOUETTES</i> (2023) - a
            multicultural, multimedia and site-specific performance designed for
            Alliance Française Accra.
            <br />
            for traditional and contemporary music & dance, electronic &
            acoustic music, spokenword poetry & acting, video & scenography.
            Duration: 90'
            <br />
            A production of Alliance Française Accra with the support from the
            French Embassy on Ghana, Canal +, Ibis Styles Hotel Accra, Sun Trade
            Beads, Yfm and Mx24 Tv with artists from Ghana, Vietnam, France,
            Togo, Germany & Cameroon.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">NHẤP NHOÁNG</i> (2023) - a site-specific
            and music performance by Luong Hue Trinh and Ngo Tra My.
            <br />
            for Đàn Bầu, electronics, voice, objects and poetry. Duration: 45'
            <br />
            Commissioned by the 33rd AngelicA International Music Festival in
            Bologna, Italy.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">The Vivid Silences</i> (2022) - a
            multimedia and site-specific performance designed for Goethe
            Institut Ghana.
            <br />
            for traditional Vietnamese & Ghanaian music (acoustic, electronics),
            experimental music, traditional & contemporary African dance, spoken
            word/poetry & scenography. Duration: 70'
            <br />
            A production of Goethe Institut Ghana with support from Alliance
            Française Accra
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">
              Music for a short film 'Yellow My Window' by Ghanaian artist Ato
              Kwamina Hasford - Oteanankanduro
            </i>{" "}
            (2022)
            <br />
            Duration: 11'
            <br />
            Premiered at Cité Internationale des Arts, Paris. Supported by the
            Embassy of France in Ghana, Institut français Ghana and Cité
            Internationale des Arts, Paris.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">THE APPEAL</i> (2022) - an intercultural,
            intermedia and site-specific performance designed for Alliance
            Française Accra.
            <br />
            for traditional Vietnamese & Ghanaian music (acoustic, electronics),
            experimental music, traditional & contemporary African dance, video,
            spoken word/poetry & scenography. Duration: 70'
            <br />
            A production of Alliance Française Accra, Ghana with support from
            French Embassy to Ghana/ Ministry of Culture, Youth & Education in
            Rhineland-Platinate in Germany/ IBIS Styles Hotel in Accra, MX24 TV,
            Yfm, Wigal Ghana, and Canal+ Ghana.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Chênh chếch (a step aside)</i> (2022) in
            the concert TÍCH TỊCH TÌNH TANG...
            <br />
            for traditional Vietnamese singing & wooden block, experimental
            singing, đàn bầu, đàn tranh, objects and electronics.
            <br />
            Poem "The Tales of Kiều" by Nguyễn Du. Duration: 15'
            <br />
            Premiered at Goethe Institut Vietnam in Hanoi
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">La lettre perdue</i> (2022) for the 6th
            edition of Electric Voice project of Nicholas Isherwood.
            <br />
            for voice, fixed media and video. Poetry by Emmanuel Labrande.
            Duration: 8'45
            <br />
            Commissioned by the Franco-American bass-baritone singer Nicholas
            Isherwood
            <br />
            World premieres at Conservatorio Luigi Cherubini-Florence(Italy)/
            Theatre of University of Navarre Museum-Pamploma(Spain)/ University
            of Washington-SeattleUSA)/ California State University at
            Fullerton(USA)/ La Scène Numérique-Montbéliard(France).
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Ether (Thinh không)</i> (2021) in album
            "Strengur"
            <br />
            for electronics. Duration: 9'39
            <br />
            Commissioned by Icelandic violinist/composer Halla Steinunn
            Stefánsdóttir in Sweden with support of Ministry of Culture in
            Iceland. Releasing in New York City-USA in 2022.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Strengur</i> (2021) in album "Strengur"
            <br />
            Performed electronics on the score by Halla Steinunn Stefánsdóttir
            with live video "Packed Memories" by Luong Hue Trinh. Duration: 8'16
            <br />
            Commissioned by Icelandic violinist/composer Halla Steinunn
            Stefánsdóttir with support of Ministry of Culture in Iceland.
            Releasing in New York City-USA in 2022.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Ohn Warum</i> (2021) in concert "Drifting
            Intervals" for five female artists from Vietnam, Germany, France,
            Switzerland & Ghana
            <br />
            for cello, voices in German and Vietnamese languages, accordion, đàn
            bầu (Vietnamese monochord), poetry by Angelus Silesius and
            electronics. Duration: 9'30
            <br />
            Commissioned by Goethe-Institut Vietnam.
            <br />
            Online premiered and a live performance at Goethe-Institut Vietnam
            in Hanoi.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Heave/Phập phồng</i> (2021) - a multimedia
            performance designed for the space of Alliance Française Accra.
            <br />
            for electronics, Ewe drums, experimental voice, Ewe traditional
            singing, poetry, traditional and African contemporary dance, video
            and scenography. Duration: 55'
            <br />
            Commissioned by Alliance française d'Accra with support from
            Institut français du Ghana.
            <br />
            World premiered at the outdoor Amphitheater - Alliance Française
            d'Accra, Ghana.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Transit Zone </i>(2020)
            <br />
            for flute, clarinet, violin, cello, piano, đàn Tranh, electronics
            and video. Duration: 17'17
            <br />
            Commissioned by Goethe Institut Vietnam for ensemble Hand Werk,
            Cologne Germany.
            <br />
            World premiered "Inter Konzert intermedial und interkulturell" at
            Alte Feuerwache-Cologne, Theater in Pumpenhaus-Münster,
            Bürgermeisterhaus-Essen in Germany.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">It is not raining, it is misting</i> (2020)
            <br />
            for piano, electronics and video. Duration: 8'35
            <br />
            Commissioned by Goethe Institut Vietnam for ensemble Hand Werk,
            Cologne Germany.
            <br />
            World premiered "Inter Konzert intermedial und interkulturell" at
            Alte Feuerwache-Cologne, Theater in Pumpenhaus-Münster,
            Bürgermeisterhaus-Essen in Germany.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">The Net of Imagination </i>(2019)
            <br />
            for traditional Vietnamese singing, cello, electronics and video.
            Duration: 7'00
            <br />
            Commissioned by Institut Français de Hanoi - L'Espace for
            Franco-Vietnamese concert "Lettres de Hanoï" in European Music
            Festival in Vietnam.
            <br />
            Premiered at Ho Chi Minh Conservatory of Music/Youth Theater of
            Vietnam in Hanoi.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Oblique Light</i> (2019)
            <br />
            for traditional Vietnamese singing, percussions, cello, electronics
            and video. Duration: 9'00
            <br />
            Commissioned by Institut Français de Hanoi - L'Espace for
            Franco-Vietnamese concert "Lettres de Hanoï" in European Music
            Festival in Vietnam.
            <br />
            Premiered at Ho Chi Minh Conservatory of Music/Youth Theater of
            Vietnam in Hanoi.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">iel</i> (2019)
            <br />
            for pipa, sheng, zhong ruan, guzheng, clarinet, drumset and
            electronics. Duration: 7'00
            <br />
            Commissioned by SoundBridge IV Contemporary Music Festival Malaysia.
            <br />
            World premiered in SoundBridge IV Contemporary Music Festival at
            Taylor University, Malaysia.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">
              How many skies and seas will have disappeared...?
            </i>{" "}
            (2019)
            <br />
            for objects, bamboo flutes, electronics and video. Duration: 7'00
            <br />
            Premiered at Institut Français de Hanoi - L'Espace.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Scarlet Nails</i> (2019)
            <br />
            for dan Tranh, rice and electronics. Duration: 11'00
            <br />
            Commissioned by dan Tranh player Nguyen Thanh Thuy.
            <br />
            Premiered in Intonal Festival Malmö, Sweden/ Manzi Art Space Hanoi,
            Vietnam.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">My Angle</i> (2018)
            <br />
            for a solo live electronics and video. Duration: 6’00
            <br />
            World premiered at Hamburg University of Music & Theatre/Institut
            Français de Hanoi - L'Espace.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Traces</i> (2018)
            <br />
            for two percussionists, vocal, electronics and video. Duration:
            12’00
            <br />
            World premiered at Hamburg University of Music & Theatre/Institut
            Français de Hanoi - L'Espace.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">JiJi</i> (2018)
            <br />
            for dan Tranh, violin, cello, flute, bass clarinet, electronics and
            video. Duration: 7'00
            <br />
            World premiered at Hamburg University of Music & Theatre/Institut
            Français de Hanoi - L'Espace/Vietnam National Academy of Music,
            Hanoi/ Goethe Institut Hanoi.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Red Moon</i> (2018)
            <br />
            for a solo performer on Tam-Tam with various tools & live
            electronics. Duration: 12’00
            <br />
            World premiered at Hamburg University of Music & Theatre/Institut
            Français de Hanoi - L'Espace.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Departure of a Leaf</i> (2018)
            <br />
            for violin and electronics. Duration: 8'00
            <br />
            Commissioned by Icelandic violinist Halla Steinunn Stefánsdóttir.
            <br />
            World premiered at Skálholt church in Iceland/ in Transistor
            Meetings Festival, Copenhagen Denmark/ in Interference #7 - A
            laboratory for Artistic Research in Music at Inter Arts Center -
            Lund University, Sibelius Múeum - Finland; and releasing in New York
            City-USA in 2022
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Mater Materia</i> (2017)
            <br />
            for fixed Media for the opera “Mater Materia” by Maurice Lenhard.
            Duration: 16’00
            <br />
            Commissioned by theatre director Maurice Lenhard.
            <br />
            World premiered at Theater Quartier – Theaterakademie Hamburg,
            Germany.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Behind The Mirror 2</i> (2017)
            <br />
            for fretless e-guitar, trombone, fixed media, live electronics &
            video. Duration: 9’00
            <br />
            Premiered in Blurred Edges festival at MS Stubnitz, Hamburg/
            Portrait Concert: Luong Hue Trinh in the 43th Neue Musik Festival
            Lüneburg, Germany.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">wESTAMAN PROJECT</i> (2017) by Bjorn
            Charles Dreyer
            <br />
            Improvised with electronics, e-guitar/electronics,
            drums/electronics, oud/violin/vocal and live video formed by Bjorn
            Charles Dreyer. Duration: 60'00
            <br />
            Commissioned by wESTAMAN project.
            <br />
            World premiered in Kristiansand: at Vågsbygd videregående skole
            (music college), Kvadraturen videregående skole (college), Agder
            Folkehøyskole (folk university college), Tangen videregående skole
            (college); in Flekkefjord: Flekkefjord videregående skole (college).
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Echoes - 3 parts</i> (2016)
            <br />
            Fixed Media for the opera DIDO & AENEAS by Henry Purcell.
            <br />
            Commissioned by theatre director Martin Mutschler.
            <br />
            World premiere at the Opera Stabile-Staatsoper Hamburg and Theater
            im Bauturm, Cologne-Germany.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Behind The Mirror</i> (2016)
            <br />
            for fretless e-guitar, fixed media and video. Duration: 9’00
            <br />
            World premiered at Hamburg University of Music & Theatre/ Portrait
            Concert: Luong Hue Trinh in the 43th Neue Musik Festival Lüneburg/
            Festival Next Generation 7.0:SENSORIK - Internationales Treffen
            Elektronischer Hochschulstudios 2017 at ZKM - Center for New Art &
            Media, Karlsruhe/ Connecting Northen Dots Concert at Musikhochschule
            Bremen, Germany/ Vietnamese Words and Music Concert at Inter Arts
            Center, Malmö, Sweden/ The 42th Neue Musik Festival Lüneburg,
            Germany.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Return II </i> (2016)
            <br />
            Fixed Media for the album “Illusions”. Duration: 15’00
            <br />
            Published by label Pan y Rosas, Chicago, USA/ in audio book
            “Wenjack” for people with disabilities, published by The National
            Network for Equitable Library Service (NNELS), Toronto, Canada.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline"> The Bridge 3 </i> (2016) Soundtrack for a
            three-channel video “The Bridge 3” by Le Brothers. Duration: 12’22
            <br />
            Commissioned by Le Brothers.
            <br />
            Exhibited at Goethe Institut Hanoi, Vietnam.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Illusions</i> (2016)
            <br />
            Fixed Media & video. Duration: 13’31
            <br />
            Commissioned by JSC Film I; Vietnam Ministry of Culture, Sport and
            Tourism.
            <br />
            World premiered at Vietnam Universiy of Fine Art, Hanoi/ Hamburg
            University of Music & Theatre/ Portrait Concert: Luong, Hue Trinh in
            the 43th Neue Musik Festival Lüneburg, Germany/ Vietnamese Words and
            Music Concert at Inter Arts Center, Malmö, Sweden/ Blurred Edges
            Festival at the Hamburg University of Applied Sciences/ 13th SMC
            Conference 2016 - Sound & Music Computing Hamburg.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Broken Legend </i> (2015) in collaboration
            with composer SonX.
            <br />
            Fixed media, live electronics and one percussionist. Duration: 15’52
            <br />
            Commissioned by Punkt Festival.
            <br />
            World premiered in the Punkt Festival at Kristiansand Kino, Norway.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Reflection</i> (2015)
            <br />
            for live electronics, dan Tranh and guitar. Duration: 11'00
            <br />
            Commisioned by DomDom Center.
            <br />
            Premiered at Institut Français de Hanoï, Vietnam.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">An Nhiên (Light-being)</i> (2014)
            <br />
            Soundtrack for a hand drawn animation by Nguyen Hoang Giang.
            Duration: 3’22
            <br />
            Commissioned by film-maker Nguyen Hoang Giang.
            <br />
            Presented in Mini DOCFEST 2014 at Goethe Institut Hanoi, Vietnam.
            Also used as the soundtrack of the trailer of the festival.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Porous Borders</i> (2014) in collaboration
            with composer SonX.
            <br />
            Sound installation for “The Rolving Eye Exhibition – Contemporary
            Art from South East Asia”. Duration: free
            <br />
            commissioned by curator Iola Lenzi.
            <br />
            Exhibited at the ARTER/Space for Art, Istanbul, Turkey.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Black Moon</i> (2014)
            <br />
            Fixed Media for the “Asia Experimental Music Current Project/Artist
            of the Month, July”. Duration: 18'00
            <br />
            Commissioned by Shanghai Rockbund Art Museum.
            <br />
            World premiered at Shanghai Rockbund Art Museum/ Banye Art Hotel,
            Hang zhou, China.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Tò Vò</i> (2013)
            <br />
            Fixed Media. Duration: 10’00
            <br />
            Premiered at Hanoi Rock City, Vietnam/ in the album “Synthesis Vol.
            1” (2014) – a compilation of sound works by female composers in the
            world, published by Urban Arts Berlin, Germany.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Return</i> (2012)
            <br />
            Fixed media for exhibition “Living Jewels”, alongside with the
            installation “The Rain” by Bopha Xarigia Le Huy Hoang. Duration:
            14’40
            <br />
            Commissioned by Davines Hair Company.
            <br />
            Premiered at Hanoi University of Science – Vietnam National
            University.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Black Circle </i>(2011) in collaboration
            with composer SonX.
            <br />
            Fixed media & installation for exhibition “Riverscapes IN FLUX”.
            Duration: 16’00
            <br />
            Commissioned by Goethe Institut Hanoi, Vietnam.
            <br />
            Exhibitions in Vietnam Fine Arts Museum in Hanoi, Cactus
            Contemporary Art Center in Ho Chi Minh City-Vietnam, The Langgeng
            Art Foundation in Yogyakarta-Indonesia, The G23 Art Gallery in
            Bangkok-Thailand, The Sa Sa Bassac Gallery in Phnom Penh-Cambodia,
            The Metropolitan Museum in Manila-Philippines from 2011 to 2013.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Love of a little girl </i> (2011)
            <br />
            for live Electronics. Duration: 15’20
            <br />
            Premiered at Hanoi Soundstuff Festival.
            <br />
          </li>
          <li className="list-disc">
            <i className="underline">Sleep-walking</i> (2010)
            <br />
            for live Electronics. Duration: 21’20
            <br />
            Premiered in Hanoi Soundstuff Festival.
            <br />
          </li>
        </ul>
      </div>
      <div
        id="music"
        className="w-full h-[100px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/p11.jpeg")` }}
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-6xl font-brassiere">Music</p>
        </div>
      </div>
      <div className="w-full min-h-screen h-fit relative grid grid-cols-1 lg:grid-cols-3 bg-white py-8 lg:py-32 px-8 lg:px-72 gap-4">
        <iframe
          src="https://www.youtube.com/embed/1dWJPBceLLo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/9YcZX-LJrPI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          className="w-full h-auto min-h-[240px]"
        ></iframe>
        <iframe
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
          src="https://www.youtube.com/embed/uBvfoYRm8Eg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
        className="w-full h-[100px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/gallery.jpg")` }}
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-6xl font-brassiere">Gallery</p>
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
        className="w-full h-[100px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/p6-min.jpeg")` }}
        id="links"
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <p className="text-6xl font-brassiere">Links</p>
        </div>
      </div>
      <div className="w-[100%] min-h-screen h-fit relative bg-white py-32 px-8 lg:px-72 gap-4 flex flex-col items-left text-[#777777]">
        <p>
          <b>
            <u>Composers/Performers I've had an honor to work with:</u>
          </b>
          <br />
          http://georghajdu.de <br />
          http://www.dieter-mack.de
          <br />
          http://www.alexanderschubert.net
          <br />
          http://www.pgvim.ac.th/postgrad/faculty/dr-jean-david-caillouet
          <br />
          https://chongkeeyong-studio-c.com
          <br />
          http://kentolofsson.com
          <br />
          http://henrikfrisk.com
          <br />
          https://www.audreychen.com
          <br />
          https://utewassermann.com
          <br />
          https://www.severineballon.com
          <br />
          http://www.nicholasisherwood.com/
          <br />
          <br />
          https://www.minhtamnguyen.com
          <br />
          http://www.claudiachan.ca
          <br />
          https://www.ina-ich.net
          <br />
          https://www.max-riefer.com
          <br />
          https://lin-chen-percussion.com
          <br />
          https://koksiewwai.wordpress.com
          <br />
          https://www.mhm.lu.se/en/stefan-ostersjo
          <br />
          https://nguyenthanhthuy.weebly.com
          <br />
          https://www.orso.co/solisten/holger-roese
          <br />
          https://www.facebook.com/martin.d.vera.3
          <br />
          https://www.facebook.com/josete.rosales.7
          <br />
          http://ensemble-handwerk.eu
          <br />
          https://www.facebook.com/TRAMYBAU/
          <br />
          https://playingforchange.org/mohammed-alidu/
          <br />
          http://www.eva-zoellner.de
          <br />
          https://stefankohmann.de <br />
          https://www.ghanaweb.com/person/Botri-Dela-772
          <br />
          https://oteanankanduro.wordpress.com/
          <br />
          <br />
          <b>
            <u>Favourite Wineries</u>
          </b>
          <br />
          http://www.drloosen.de
          <br />
          http://www.franz-keller.de
          <br />
          http://www.vonschubert.com
          <br />
          http://www.zilliken-vdp.de
          <br />
          http://www.quartzreef.co.nz
          <br />
          https://www.matua.co.nz
          <br />
          https://www.champagne-gosset.com
          <br />
          https://www.bourgogne-wines.com
          <br />
          https://www.weingut-theo-enk.de
          <br />
          https://www.schieferkopf.com
          <br />
          https://maximingruenhaus.de
          <br />
          http://www.muellen.de
          <br />
          https://www.bassermann-jordan.de <br />
          https://weingut-knipser.de <br />
          https://www.weingut-kuenstler.de
          <br />
          https://www.weingut-robert-weil.com
          <br />
          https://weingut-fritz-haag.de
          <br />
          https://www.weingut-matthiasmueller.de <br />
          Peter &amp; Peter Riesling
          <br />
          https://domdechantwerner.com/
          <br />
          https://www.vino-store.com/produit/gigondas-vieux-clocher/
          <br />
          <br />
          <b>
            <u>Favourite Restaurants</u>
          </b>
          <br />
          http://eraora.dk
          <br />
          http://www.reinstoff.eu
          <br />
          http://www.wullenwever.de
          <br />
          http://restaurant-piment.de
          <br />
          http://www.annasgroi.de/en
          <br />
          http://www.cornelia-poletto.de
          <br />
          https://www.gallo-nero.net
          <br />
          https://highway4.com
          <br />
          https://www.kisusushi.vn
          <br />
          https://www.facebook.com/GaneyaJapaneseRestaurant/
          <br />
          https://www.facebook.com/Ngan-Ngon-Trâm-42-Hàng-Nón-2409591725920105/
          <br />
          https://pasgo.vn/nha-hang/hai-san-huong-lan-hai-san-nuc-tieng-ha-thanh-825
          <br />
          https://www.facebook.com/LeTandemaccraghana
          <br />
          https://etoiledasielyon.wordpress.com
          <br />
          http://www.yoloxperiences.com/santoku.aspx
          <br />
          <br />
        </p>
      </div>
      <div
        className="w-full h-[100px] md:h-[400px] relative bg-fixed bg-contain bg-no-repeat bg-center md:bg-cover bg-white"
        style={{ backgroundImage: `url("/images/p10-min.jpeg")` }}
        id="legal"
      >
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/25 flex-col gap-4">
          <h3 className="text-6xl font-brassiere">Legal Notice</h3>
        </div>
      </div>
      <div className="w-[100%] min-h-screen h-fit relative bg-white py-32 px-8 lg:px-72 gap-4 flex flex-col items-left text-[#777777]">
        <p>
          Luong Hue Trinh <br />
          Hanoi, Vietnam
          <br />
          <br />
          <br />
          <b>Copyright</b>
          <br />
          © 2023, <br />
          All rights reserved
          <br />
          The content of this website is protected by international copyright
          laws. The content of this site may not be used for reproduction in any
          form or for transmission, multiplication and publication by electronic
          mediums without the express written permission of{" "}
          <b>Luong Hue Trinh</b>, unless otherwise stated.
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
        <h3 className="text-center text-xl">Contact</h3>
        <div className="">
          <i className=""></i>Luong Hue Trinh <br />
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
    </main>
  );
}
