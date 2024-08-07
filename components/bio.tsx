import { useState } from "react";

const Bio = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <div className="h-fit w-full flex justify-center items-center bg-white py-8 lg:py-32 px-8 lg:px-72 flex-col">
      <p className="mt-8 text-[#777777]">
        Brief:
        <br />
        LUONG Hue Trinh is a dynamic electroacoustic and multimedia composer and performer. 
        She initially studied Jazz Keyboard at the Vietnam National Academy of Music, and later, has focused on electroacoustic music. 
        LUONG received a prestigious full scholarship from the German Academic Exchange Service (DAAD) to study New Techniques in Composition, 
        followed by a Master's in Multimedia Composition at Hochschule für Musik & Theater Hamburg.
        <br />
        <br />
        Her artistic pursuits blend traditional and experimental music, visuals, scenography, and creating site-specific performances. 
        She has showcased her work across Asia, Europe, Oceania, North America, and Africa.
        <br />
        <br />
        She has collaborated with artists from diverse fields, including contemporary dance, 
        animation, experimental film, video art, poetry, painting performance and installation ...
        <br />
        <br />
        ------------------
        <br />
        Full:
        <br />
        Starting her musical journey at age 5, LUONG Hue Trinh joined the Vietnam National Academy of Music at 13. 
        She earned a Bachelor’s in Jazz Keyboard in 2010. She then focused on electroacoustic music, studying with Nguyen Xuan Son (SonX). 
        From 2015 to 2018, LUONG received a DAAD scholarship for New Techniques in Composition, 
        followed by a Master's in Multimedia Composition at Hochschule für Musik & Theater Hamburg 
        under Prof. Dr. Georg Hajdu, Prof. Elmar Lampson, and Alexander Schubert.
        <br />
        {!isSeeMore && (
          <a
            className="cursor-pointer underline"
            onClick={() => setIsSeeMore(true)}
          >
            See More...
          </a>
        )}
        {isSeeMore && (
          <>
            <br />
            LUONG's artistic pursuits extend to exploring traditional and
            experimental elements in music and visuals, scenography, and
            creating site-specific artworks. She has collaborated with artists from diverse fields, including contemporary dance, 
            animation, experimental film, video art, poetry, painting performance and installation ...
            <br />
            <br />
            Her debut album "Illusions" (2016) received acclaim, named one of Avant Music News' Best Albums of 2016. 
            In 2019, Hanoi Grapevine, the only bi-lingual site for art and cultural events in Vietnam honored her as the 'Finest Artist of the Year.' 
            She was awarded a Réciprocité scholarship by Institut français du Vietnam for a 3-month residency at Cité Internationale des Arts Paris in 2020 
            and was featured as one of 14 notable DAAD Vietnam alumni between 1985 - 2020 in a publication celebrating 45 years of German-Vietnamese relations.
            <br />
            <br />
            LUONG's music has been featured internationally, including Artist of the Month on StillStream Radio (USA, 2013), London’s Gwaith Sŵn (UK), and NRK (Norway, 2014-2015), Yfm and Mx24TV (Ghana, 2022-2023). 
            She performed at the Mikromusik Festival (2018), broadcast on Deutschlandfunk Kultur, Germany, organized by DAAD and Humboldt Forum Foundation.
            <br />
            <br />
            Her work has been performed across Asia, Europe, Oceania,
            North America, and Africa such as Übersee museum, Berlin Academy of
            Arts, Center for Art & Media - ZKM Karlsruhe, University of Music,
            Theater & Media Hanover, Sprengel museum (Germany); Sibelius museum
            - Turku (Findland); Navarre museum - Pamploma (Spain); Intonal
            Festival at Inter Arts Center - Malmö (Sweden); University of
            Washington-Seattle, California State University-Fullerton (USA);
            Murate Art District (MAD) - Florence, Theatre San Leonardo - Bologna
            (Italy); University of Music & Performing Arts Vienna (Austria);
            Copenhagen Jazz festival, Gong festival - Copenhagen (Denmark);
            Punkt festival - Kristiansand (Norway); Skálholt church (Iceland);
            the ARTER/Space for Art - Istanbul (Turkey); Youth Theater - Hanoi,
            Goethe Institut Vietnam, Institut français du Vietnam, National Fine
            Arts museum - Hanoi (Vietnam); Shanghai Rockbund Art museum (China);
            Metropolitan museum - Manila, Taylor's University, University of
            Philippines (Philippines); The Langgeng Art Foundation - Yogyakarta
            (Indonesia); Princess Galyani Vadhana Institute of Music - Bangkok
            (Thailand); Goethe Institut Ghana, Alliance Française d'Accra
            (Ghana); etc...
            <br />
            <br />
          </>
        )}
        {isSeeMore && (
          <a
            className="cursor-pointer underline"
            onClick={() => {
              setIsSeeMore(false);
            }}
            href="#bio"
          >
            See Less...
          </a>
        )}
      </p>
    </div>
  );
};

export default Bio;
