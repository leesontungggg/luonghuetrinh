import { useState } from "react";

const Bio = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <div className="h-fit w-full flex justify-center items-center bg-white py-8 lg:py-32 px-8 lg:px-72 flex-col">
      <p className="mt-8 text-[#777777]">
        Short:
        <br />
        Starting her musical journey at the age of 5, LUONG Hue Trinh embarked
        on a path that led her to the Vietnam National Academy of Music in 1998,
        at the age of 13. Over the next 12 years of intensive study, she earned
        her Bachelor’s degree in Jazz Keyboard in 2010. Since then, her focus
        has shifted towards electroacoustic music.
        <br />
        <br />
        From 2015 to 2018, LUONG was awarded a prestigious full scholarship from
        the German Academic Exchange Service (DAAD) to pursue the program in New
        Techniques in Composition, followed by her Master's in Multimedia
        Composition at Hochschule für Musik & Theater Hamburg.
        <br />
        <br />
        LUONG's artistic interests span traditional and experimental music
        elements, alongside visual arts and scenography, often creating
        site-specific artworks. Beyond composing, she is an adept improviser.
        She has received commissions for exhibitions, contemporary dance
        projects, animation, experimental films, video arts, and live
        performances across Asia, Europe, Australia, Canada, North America, and
        Africa.
        <br />
        <br />
        ------------------
        <br />
        Full:
        <br />
        Beginning her musical journey at the age of 5, LUONG Hue Trinh entered
        the Vietnam National Academy of Music in 1998 at the age of 13. Over the
        next 12 years of dedicated study, she earned her Bachelor’s degree in
        Jazz Keyboard in 2010, guided by Vietnamese composer Nguyen Xuan Son
        (SonX). Since then, her focus has shifted to electroacoustic music. From
        2015 to 2018, LUONG was awarded a full German Academic Exchange Service
        (DAAD) scholarship for the New Techniques in Composition program,
        followed by her Master's in Multimedia Composition under the tutelage of
        Prof. Dr. Georg Hajdu, Prof. Elmar Lampson, and Alexander Schubert at
        Hochschule für Musik & Theater Hamburg.
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
            creating site-specific artworks. She has received commissions for
            exhibitions, contemporary dance projects, animation, experimental
            films, video art, installations, painting performance and more...
            <br />
            <br />
            Her debut album "Illusions" in 2016 garnered acclaim and was
            recognized as one of the Best of 2016 – Albums of The Year by Avant
            Music News, San Francisco, USA. In 2019, Hanoi Grapevine - the first
            and only bi-lingual site for art and cultural events in Vietnam,
            named her the 'Finest Artist of the Year', marking her significant
            contribution to Vietnam's art and culture scene. She was also
            awarded a scholarship in the Réciprocité program of Villa
            Saigon-Institut Français Vietnam for a 3-month residency at the Cité
            Internationale des Arts Paris in 2020. The same year, she was
            honored as one of 14 successful DAAD Vietnam alumni since 1985,
            featured in a publication commemorating 45 years of diplomatic
            relations between Germany and Vietnam.
            <br />
            <br />
            LUONG's music has been broadcasted internationally, with notable
            features including Artist of the Month on StillStream Radio, Los
            Angeles - USA (2013), London sound art collective Gwaith Sŵn (UK),
            interviews and presentations by the Norwegian Broadcasting
            Corporation (NRK) in 2014 and 2015, Yfm and Mx24TV in Ghana in 2022
            and 2023 etc... She had a performance at the Mikromusik Festival
            (2018) broadcasted on radio Deutschlandfunk Kultur, Germany,
            organized by Berliner Künstlerprogramm des DAAD and the Humboldt
            Forum Foundation.
            <br />
            <br />
            Her work has been performed across Asia, Europe, Australia, Canada,
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
