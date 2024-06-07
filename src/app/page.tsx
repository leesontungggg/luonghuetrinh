import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black ">
      <div className="w-screen h-screen relative">
        <div
          style={{ backgroundImage: `url("/images/hero.jpg")` }}
          className="w-full h-full absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-fixed bg-no-repeat bg-center bg-cover"
        >
          <div className="w-full h-full flex items-center justify-center text-white bg-white/15 flex-col gap-4">
            <p className="text-6xl">Luong Hue Trinh</p>
            <p className="text-lg italic">Multimedia composer & improviser</p>
          </div>
        </div>
      </div>
      <div className="h-[150px] w-full flex justify-center items-center bg-white italic">
        "Music is the voice from my inner self, the sincerity of my emotions and
        thoughts."
      </div>
      <div className="w-screen min-h-screen h-fit relative">
        <img
          className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full object-cover"
          src="/images/0.jpg"
        />
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex items-center justify-center text-white bg-white/15 flex-col gap-4">
          <p className="text-6xl">Luong Hue Trinh</p>
          <p className="text-lg italic">Multimedia composer & improviser</p>
        </div>
      </div>
      <div className="h-fit w-full flex justify-center items-center bg-white py-8 px-36 flex-col">
        <p className="text-center text-xl text-[#777777]">Biography</p>
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
      <div className="h-fit w-full flex justify-center items-center bg-white py-8 px-36 flex-col">
        <p className="text-center text-xl text-[#777777]">Works</p>
        <p className="mt-8 text-[#777777]">List of works:</p>
        <ul className="text-[#777777]">
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
            SLANTED SILHOUETTES (2023) - a multicultural, multimedia and
            site-specific performance designed for Alliance Française Accra.
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
            NHẤP NHOÁNG (2023) - a site-specific and music performance by Luong
            Hue Trinh and Ngo Tra My.
            <br />
            for Đàn Bầu, electronics, voice, objects and poetry. Duration: 45'
            <br />
            Commissioned by the 33rd AngelicA International Music Festival in
            Bologna, Italy.
            <br />
          </li>
          <li className="list-disc">
            The Vivid Silences (2022) - a multimedia and site-specific
            performance designed for Goethe Institut Ghana.
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
            Music for a short film 'Yellow My Window' by Ghanaian artist Ato
            Kwamina Hasford - Oteanankanduro (2022)
            <br />
            Duration: 11'
            <br />
            Premiered at Cité Internationale des Arts, Paris. Supported by the
            Embassy of France in Ghana, Institut français Ghana and Cité
            Internationale des Arts, Paris.
            <br />
          </li>
          <li className="list-disc">
            THE APPEAL (2022) - an intercultural, intermedia and site-specific
            performance designed for Alliance Française Accra.
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
            Chênh chếch (a step aside) (2022) in the concert TÍCH TỊCH TÌNH
            TANG...
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
            La lettre perdue (2022) for the 6th edition of Electric Voice
            project of Nicholas Isherwood.
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
            Ether (Thinh không) (2021) in album "Strengur"
            <br />
            for electronics. Duration: 9'39
            <br />
            Commissioned by Icelandic violinist/composer Halla Steinunn
            Stefánsdóttir in Sweden with support of Ministry of Culture in
            Iceland. Releasing in New York City-USA in 2022.
            <br />
          </li>
          <li className="list-disc">
            Strengur (2021) in album "Strengur"
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
            Ohn Warum (2021) in concert "Drifting Intervals" for five female
            artists from Vietnam, Germany, France, Switzerland & Ghana
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
            Heave/Phập phồng (2021) - a multimedia performance designed for the
            space of Alliance Française Accra.
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
            Transit Zone (2020)
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
            It is not raining, it is misting (2020)
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
            The Net of Imagination (2019)
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
            Oblique Light (2019)
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
            iel (2019)
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
            How many skies and seas will have disappeared...? (2019)
            <br />
            for objects, bamboo flutes, electronics and video. Duration: 7'00
            <br />
            Premiered at Institut Français de Hanoi - L'Espace.
            <br />
          </li>
          <li className="list-disc">
            Scarlet Nails (2019)
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
            My Angle (2018)
            <br />
            for a solo live electronics and video. Duration: 6’00
            <br />
            World premiered at Hamburg University of Music & Theatre/Institut
            Français de Hanoi - L'Espace.
            <br />
          </li>
          <li className="list-disc">
            Traces (2018)
            <br />
            for two percussionists, vocal, electronics and video. Duration:
            12’00
            <br />
            World premiered at Hamburg University of Music & Theatre/Institut
            Français de Hanoi - L'Espace.
            <br />
          </li>
          <li className="list-disc">
            JiJi (2018)
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
            Red Moon (2018)
            <br />
            for a solo performer on Tam-Tam with various tools & live
            electronics. Duration: 12’00
            <br />
            World premiered at Hamburg University of Music & Theatre/Institut
            Français de Hanoi - L'Espace.
            <br />
          </li>
          <li className="list-disc">
            Departure of a Leaf (2018)
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
            Mater Materia (2017)
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
            Behind The Mirror 2 (2017)
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
            wESTAMAN PROJECT (2017) by Bjorn Charles Dreyer
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
            Echoes - 3 parts (2016)
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
    </main>
  );
}
