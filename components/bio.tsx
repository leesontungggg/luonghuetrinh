import { useState } from "react";

const Bio = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <div className="h-fit w-full flex justify-center items-center bg-white py-8 lg:py-32 px-8 lg:px-72 flex-col">
      <p className="mt-8 text-[#777777]">
        Brief:
        <br />
        <b>
          <i>LƯƠNG Huệ Trinh</i>
        </b>{" "}
        is a dynamic electroacoustic and multimedia composer and performer. She
        initially studied Jazz Keyboard at the Vietnam National Academy of
        Music, and later, has focused on electroacoustic music. She received a
        prestigious full scholarship from the German Academic Exchange Service
        (DAAD) to study New Techniques in Composition, followed by a Master's in
        Multimedia Composition at Hochschule für Musik & Theater Hamburg. Her
        artistic profile blends traditional and experimental music, visuals,
        scenography, and site-specific performances. LƯƠNG has collaborated with
        artists from diverse fields, including contemporary dance, animation,
        experimental film, video art, poetry, drama, painting performance and
        installation. Her work has been featured on radio broadcasts and
        showcased in museums, festivals, universities and others across Asia,
        Europe, Oceania, North America, and Africa.
        <br />
        <br />
        ------------------
        <br />
        Full:
        <br />
        <b>
          <i>LƯƠNG Huệ Trinh</i>
        </b>{" "}
        is a dynamic electroacoustic and multimedia composer and performer.
        Starting her musical journey at age 5, she entered the Vietnam National
        Academy of Music at 13. She earned a Bachelor’s in Jazz Keyboard in
        2010. She then focused on electroacoustic music, studying with Vietnamese composer Nguyễn
        Xuân Sơn (SonX). From 2015 to 2018, LƯƠNG received a full scholarship
        from the German Academic Exchange Service (DAAD) for program New Techniques in
        Composition, followed by a Master's in Multimedia Composition at
        Hochschule für Musik & Theater Hamburg under teachings of{" "}
        <a href="http://www.georghajdu.de">
          {" "}
          <u>Georg Hajdu</u>
        </a>
        ,{" "}
        <a href="http://www.elmar-lampson.de">
          {" "}
          <u>Elmar Lampson</u>
        </a>
        ,{" "}
        <a href="https://jacobsello.de">
          {" "}
          <u>Jacob Sello</u>
        </a>
        ,{" "}
        <a href="https://www.saschalinolemke.de">
          {" "}
          <u>Sascha Lino Lemke</u>
        </a>
        , and{" "}
        <a href="http://www.alexanderschubert.net">
          {" "}
          <u>Alexander Schubert</u>
        </a>
        .
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
            LƯƠNG's artistic pursuits extend to exploring traditional and
            experimental elements in music and visuals, scenography, and
            creating site-specific artworks. She has collaborated with artists
            from diverse fields, including contemporary dance, animation,
            experimental film, video art, poetry, drama, painting performance
            and installation ...
            <br />
            <br />
            Her debut album "Illusions" (USA, 2016) received acclaim, named one
            of Avant Music News' Best of 2016 - Albums of the Year. Hanoi
            Grapevine, the only bi-lingual site for art and cultural events in
            Vietnam honored her as the 'Finest Artist of the Year' in Hanoi
            Grapevine Finest 2019. In 2020, she was awarded a Réciprocité
            scholarship by Institut français du Vietnam for a 3-month residency
            at Cité Internationale des Arts Paris and was highlighted as one of
            14 notable DAAD Vietnam alumni (1985 - 2020) in a publication
            celebrating 45 years of German-Vietnamese relations.
            <br />
            <br />
            LƯƠNG's music has been featured internationally on radio broadcasts, including Artist of
            the Month on StillStream Radio (USA, 2013), London’s Gwaith Sŵn
            (UK), and NRK (Norway, 2014 & 2015), Deutschlandfunk Kultur (Germany, 2018), Yfm and Mx24TV (Ghana, 2022,
            2023), Italian Public radio - RAI radio 3 - Battiti (Italia, 2024).
            <br />
            <br />
            Her work has been showcased across Asia, Europe, Oceania, North
            America, and Africa such as Übersee museum - Bremen, Sprengel museum
            - Hannover, Mikromusik Festival 2018 by Berliner Künstlerprogramm des DAAD and Humboldt Forum Foundation, 
            Berlin Academy of Arts, Center for Art & Media - ZKM
            Karlsruhe, university of Music, Theater & Media Hanover (Germany);
            Sibelius museum - Turku (Findland); Navarre museum - Pamploma
            (Spain); Cité Internationale des Arts Paris, La Scène Numérique -
            Montbéliard (France); Intonal festival, Inter Arts Center - Malmö
            (Sweden); university of Washington - Seattle, California State
            university - Fullerton (USA); The National Network for Equitable
            Library Service (NNELS) - Toronto (Canada); Murate Art District
            (MAD) - Florence, 33th AngelicA festival 2023 - Bologna (Italy);
            university of Music & Performing Arts Vienna (Austria); Copenhagen
            Jazz festival, Gong festival - Copenhagen, Roskilde university
            (Denmark); Punkt festival 2015 - Kristiansand (Norway); Skálholt church
            (Iceland); the ARTER/Space for Art - Istanbul (Turkey); ASIAN
            Meeting festival 2015- Tokyo & Kyoto, OUA Electroacoustic Music festival
            - Osaka University of Art (Japan); Youth Theater - Hanoi, National
            Academy of Music - Hanoi, Ho Chi Minh Conservatory of Music - HCM
            city, Goethe Institut Vietnam, Institut français du Vietnam,
            National Fine Arts museum - Hanoi, Hanoi New Music festival
            (Vietnam); Shanghai Rockbund Art museum, Banye Art Hotel Hangzhou
            (China); Metropolitan museum - Manila, Taylor's University,
            University of Philippines (Philippines); The Langgeng Art Foundation
            - Yogyakarta (Indonesia); Princess Galyani Vadhana Institute of
            Music - Bangkok (Thailand); Goethe Institut Ghana, Alliance
            française d'Accra (Ghana); ...
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
