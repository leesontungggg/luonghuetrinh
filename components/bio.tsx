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
        is a Vietnamese multimedia composer, sound artist, electroacoustic improviser, and organiser. She completed her B.A. in Jazz Keyboard at the Vietnam National Academy of Music before 
        earning her M.A. in Multimedia Composition at the Hamburg University of Music and Theatre, Germany, with support from a German Academic Exchange Service (DAAD) scholarship. 
        Sound, for her, becomes an essential vehicle for cultural memory and lived experience, transforming listening into a visceral and poetic journey. 
        This cross-cultural approach integrates traditional and experimental music elements, creating immersive sonic worlds enriched by field recordings gathered from her travels. 
        Through digital processing, she transforms these diverse sources into multi-layered compositions that balance presence with abstraction, bridging the intimate and the universal. 
        <br />
        <br />
        Lương Huệ Trinh's practice encompasses multi-sensory performances where sound interweaves with visual elements, scenography, and site-specific works. 
        She composes music for theater, dance, installations, experimental and animated films, live painting performances, and contemporary ensembles. 
        International acclaim has followed through radio networks and performances at museums, festivals, and art universities across Asia, Europe, Oceania, North America, and Africa.
        <br />
        <br />
        ------------------
        <br />
        Full:
        <br />
        <b>
          LƯƠNG Huệ Trinh  
        </b>{" "}
        is a multimedia Vietnamese composer, sound artist, electroacoustic improviser, and organiser whose musical journey began at age 5. 
        After entering the Vietnam National Academy of Music at 13 in 1998, she earned her Bachelor's in Jazz Keyboard in 2010. 
        Her focus then shifted to electroacoustic music under the mentorship of Vietnamese composer Nguyễn Xuân Sơn (SonX). 
        <br />
        <br />
        From 2015 to 2018, Lương Huệ Trinh pursued advanced studies in Germany through a German Academic Exchange Service (DAAD) scholarship, 
        completing the program <b>New Techniques in Composition</b> and a Master's in Multimedia Composition at the University of Music & Theater Hamburg (HfMT). 
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
            Her artistic approach integrates traditional and experimental music, crafting immersive soundscapes that invite audiences to drift through her sonic world. 
            Passionate about collaboration, she frequently partners with local artists wherever she travels, capturing field recordings from everyday life that she weaves into her compositions. 
            Beyond sound, she integrates her music with visual elements, scenography, and site-specific performances, creating rich multisensory experiences. 
            Lương Huệ Trinh has forged collaborations across artistic disciplines, including contemporary dance, animation, experimental and documentary film, 
            video art, poetry, theater, live painting performance and installation art.
            <br />
            <br />
            Her debut album <b>Illusions</b> (USA, 2016), received critical acclaim and was recognized among the <b>Best of 2016 - Albums of the Year</b> by the US online magazine <b>Avant Music News</b>. 
            Her accolades include the title of <b>Artist of the Year</b> from the leading cultural and artistic platform <b>Hanoi Grapevine</b> (Vietnam, 2019), 
            a <b>Réciprocité</b> residency at the Cité internationale des Arts in Paris (France, 2020) awarded by the French Institute in Vietnam, 
            and selection as one of the 14 most outstanding DAAD Vietnam alumni (1985-2020) in celebration of 45 years of German-Vietnamese diplomatic relations.
            <br />
            <br />
            Lương Huệ Trinh's music has been featured internationally on broadcasts, including Artist of the Month on StillStream radio (USA, 2013); 
            London’s Gwaith Sŵn radio, London Resonance FM 104.4FM (UK, 2020); NRK - The Norwegian Broadcasting Corporation (Norway, 2014 & 2015); 
            Urban Arts Berlin radio (2016), Deutschlandfunk Kultur (Germany, 2018); Yfm, Mx24TV (Ghana, 2022 & 2023); 
            Italian Public radio - RAI radio 3 - Battiti (Italia, 2024).
            <br />
            <br />
            Her work has been showcased across Asia, Europe, Oceania, North America, and Africa such as Übersee museum - Bremen, Sprengel museum
            - Hannover, Mikromusik Festival by Berliner Künstlerprogramm des DAAD and Humboldt Forum Foundation, 
            Berlin Academy of Arts, Center for Art & Media - ZKM, Karlsruhe, university of Music, Theater & Media Hanover (Germany);
            Sibelius museum - Turku (Finland); Navarre museum - Pamploma (Spain); Cité Internationale des Arts Paris, La Scène Numérique -
            Montbéliard, Theatre de Hautepierre - Strasbourg (France); Intonal festival, Inter Arts Center - Malmö (Sweden); university of Washington - Seattle, 
            California State university - Fullerton (USA); The National Network for Equitable Library Service (NNELS) - Toronto (Canada); 
            Newcastle Summer festival - the UK; Murate Art District (MAD) - Florence, 33th AngelicA festival - Bologna (Italy);
            university of Music & Performing Arts Vienna (Austria); Copenhagen Jazz festival, Gong festival, Transistor Meetings festival, 
            SONIC festival - Copenhagen, Roskilde university (Denmark); Punkt festival 2015 - Kristiansand (Norway); Skálholt church (Iceland); 
            the ARTER/Space for Art - Istanbul (Turkey); ASIAN Meeting festival - Tokyo & Kyoto, OUA Electroacoustic Music festival
            - Osaka University of Art (Japan); Youth Theater - Hanoi, National Academy of Music - Hanoi, Ho Chi Minh Conservatory of Music - HCM city, 
            Goethe Institut Vietnam, Institut français du Vietnam, National Fine Arts museum - Hanoi, Hanoi New Music festival (Vietnam); 
            Shanghai Rockbund Art museum, Banye Art Hotel Hangzhou (China); Metropolitan museum - Manila, Taylor's University,
            University of Philippines (Philippines); The Langgeng Art Foundation - Yogyakarta (Indonesia); Princess Galyani Vadhana Institute of
            Music - Bangkok (Thailand); Goethe Institut Ghana, Alliance française d'Accra (Ghana); Cotonou (Benin)...
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
