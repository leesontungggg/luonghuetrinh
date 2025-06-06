import { useState } from "react";

const Bio = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <div className="h-fit w-full flex justify-center items-center bg-white py-8 lg:py-32 px-8 lg:px-72 flex-col">
      <p className="mt-8 text-[#777777]">
        Brief:
        <br />
        <b>
          LƯƠNG Huệ Trinh  
        </b>{" "}
        is a dynamic Vietnamese multimedia composer and electroacoustic improviser who studied at HfMT Hamburg-Germany on a DAAD scholarship. 
        Her cross-cultural approach integrates traditional and experimental music elements, creating immersive sonic worlds enriched by global field recordings. 
        Through custom digital processing, she transforms environmental sounds into multi-layered textured compositions that balance recognition with abstraction, 
        while using physical objects as both sound sources and visual elements, creating meaningful connections between sound and cultural context.
        <br />
        <br />
        LƯƠNG views sound as a vehicle for cultural memory and environmental awareness rather than merely an aesthetic medium. 
        Her practice spans multi-sensory performances that interweave sound with visual elements, scenography, and site-specific interventions. 
        She has composed music for theater, dance, installations, experimental/documentary films, painting performances, and contemporary ensembles. 
        Her distinctive artistic voice has earned international acclaim through radio networks and performances at museums, festivals, and universities across Asia, Europe, Oceania, North America, and Africa.
        <br />
        <br />
        ------------------
        <br />
        Full:
        <br />
        <b>
          LƯƠNG Huệ Trinh  
        </b>{" "}
        is a dynamic multimedia Vietnamese composer and electroacoustic improviser whose musical journey began at age 5. 
        After entering the Vietnam National Academy of Music at 13 in 1998, she earned her Bachelor's in Jazz Keyboard in 2010. 
        Her focus then shifted to electroacoustic music under the mentorship of Vietnamese composer Nguyễn Xuân Sơn (SonX). 
        <br />
        <br />
        From 2015 to 2018, LƯƠNG pursued advanced studies in Germany through a prestigious German Academic Exchange Service (DAAD) scholarship, 
        completing New Techniques in Composition and a Master's in Multimedia Composition at the Hochschule für Musik & Theater Hamburg (HfMT). 
        There, she studied under composers{" "}
        <a href="http://www.georghajdu.de">
          {" "}
          <u>Georg Hajdu</u>
        </a>
        ,{" "}
        <a href="http://www.elmar-lampson.de">
          {" "}
          <u>Elmar Lampson</u>
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
            Her artistic approach intergrates traditional and experimental music, crafting immersive soundscapes 
            that invite audiences to drift through her sonic world. Passionate about collaboration, 
            she frequently partners with local artists wherever she travels, capturing field recordings 
            from everyday life that she weaves into her compositions. Beyond sound, she integrates her music with visual, 
            scenography, and site-specific performances, creating rich multisensory experiences.
            LƯƠNG has forged collaborations across artistic disciplines, including contemporary dance, animation,
            experimental/documentary film, video art, poetry, drama, painting performance
            and installation art etc.
            <br />
            <br />
            Her debut album "Illusions" (USA, 2016) received acclaim, named one
            of Avant Music News' Best of 2016 - Albums of the Year. 
            Her achievements include being honored as Hanoi Grapevine's 'Finest Artist of the Year' (2019) - Hanoi
            Grapevine is the only bi-lingual site for art and cultural events in
            Vietnam, awarding a Réciprocité residency at Cité Internationale des Arts Paris (2020) by Institut français du Vietnam, 
            and being recognized as one of 14 notable DAAD Vietnam alumni in celebration of 45 years of German-Vietnamese relations.
            <br />
            <br />
            LƯƠNG's music has been featured internationally on broadcasts, including Artist of
            the Month on StillStream radio (USA, 2013); London’s Gwaith Sŵn radio, London Resonance FM 104.4FM 
            (UK, 2020); NRK - The Norwegian Broadcasting Corporation (Norway, 2014 & 2015); 
            Urban Arts Berlin radio (2016), Deutschlandfunk Kultur (Germany, 2018); Yfm, Mx24TV (Ghana, 2022,
            2023); Italian Public radio - RAI radio 3 - Battiti (Italia, 2024).
            <br />
            <br />
            Her work has been showcased across Asia, Europe, Oceania, North
            America, and Africa such as Übersee museum - Bremen, Sprengel museum
            - Hannover, Mikromusik Festival 2018 by Berliner Künstlerprogramm des DAAD and Humboldt Forum Foundation, 
            Berlin Academy of Arts, Center for Art & Media - ZKM, Karlsruhe, university of Music, Theater & Media Hanover (Germany);
            Sibelius museum - Turku (Findland); Navarre museum - Pamploma (Spain); Cité Internationale des Arts Paris, La Scène Numérique -
            Montbéliard, Theatre de Hautepierre - Strasbourg (France); Intonal festival, Inter Arts Center - Malmö (Sweden); university of Washington - Seattle, 
            California State university - Fullerton (USA); The National Network for Equitable Library Service (NNELS) - Toronto (Canada); 
            Newcastle Summer festival - the UK; Murate Art District (MAD) - Florence, 33th AngelicA festival 2023 - Bologna (Italy);
            university of Music & Performing Arts Vienna (Austria); Copenhagen Jazz festival, Gong festival, Transistor Meetings festival, 
            SONIC festival - Copenhagen, Roskilde university (Denmark); Punkt festival 2015 - Kristiansand (Norway); Skálholt church (Iceland); 
            the ARTER/Space for Art - Istanbul (Turkey); ASIAN Meeting festival 2015 - Tokyo & Kyoto, OUA Electroacoustic Music festival
            - Osaka University of Art (Japan); Youth Theater - Hanoi, National Academy of Music - Hanoi, Ho Chi Minh Conservatory of Music - HCM city, 
            Goethe Institut Vietnam, Institut français du Vietnam, National Fine Arts museum - Hanoi, Hanoi New Music festival (Vietnam); 
            Shanghai Rockbund Art museum, Banye Art Hotel Hangzhou (China); Metropolitan museum - Manila, Taylor's University,
            University of Philippines (Philippines); The Langgeng Art Foundation - Yogyakarta (Indonesia); Princess Galyani Vadhana Institute of
            Music - Bangkok (Thailand); Goethe Institut Ghana, Alliance française d'Accra (Ghana); ...
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
