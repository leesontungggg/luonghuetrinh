import { useState } from "react";

const compositions = [
`<i style="text-decoration: underline"><b>Hoang hoải</i></b> (2024-25) <br /> 
        for three percussionists and tape. Duration: 23' <br /> 
        Performed at Theatre de Hautepierre, Strasbourg - France.
        <br /> Commissioned by Les Percussions de Strasbourg with the support of the Nguyễn Thiện Đạo Foundation, backed by the King Baudouin Foundation.<br />`,      
  `<i style="text-decoration: underline"><b>How can I be tender ?</i></b> (2023) <br /> 
          for Grain~bau solo. Duration: 9'30" 
          <br /> 
          Commissioned for the artistic research project Études for Live-Electronics 2023 - 2025 by Alex Hofmann - Institut für Musikalische Akustik Wienner Kangstil.
          <br />
          Performed at Showcase Concert at the Future Art Lab - Klangtheater at University of Music and Performing Arts, Vienna - Austria.`,
  `<i style="text-decoration: underline"><b>Đốm</i></b> (2023)
          <br />
          for two voices (traditional Vietnamese singing Ả Đào, experimental),
          Phách (wooden block), đàn Bầu, electronics, video & two performers. Duration: 10'
          <br />s
          Commissioned for project TRAIECT IV Vietnam by Hannoversche
          Gesellschaft für Neue Musik (Hanover Society for New Music) - Germany.
          <br />
          Performed at Sprengel Museum - Hannover, Overseas Museum - Bremen,
          Academy of Arts - Berlin, Germany; 
          MotPlus - Saigon, Hàng Buồm Cuture and Arts Center - Hanoi, Ồ Ạt Oh Art festival 2024 - Saigon, Vietnam. 
          <br />`,
  `<i style="text-decoration: underline"><b>The glance of a fox</i></b> (2023)
          <br />
          for accordion and electronics. Duration: 09'
          <br />
          Commissioned by German accordionist Eva Zöllner.
          <br />
          Performed at Alliance Française Accra - Ghana, Goethe Institut Ghana, and Paretzer Field Music, Ketzin - Germany. 
          <br />`,        
  `<i style="text-decoration: underline"><b>SLANTED SILHOUETTES</i></b> (2023) <br />
          for traditional and contemporary music & dance, electronic & acoustic
          music, spokenword poetry & acting, video & scenography. Duration: 90'
          <br />
          a multicultural, multimedia and site-specific performance designed for
          Alliance Française Accra - Ghana with artists from Ghana, Vietnam, France, Togo,
          Germany & Cameroon.
          <br />
          A production of Alliance Française Accra with the support from the
          French Embassy to Ghana, Canal +, Ibis Styles Hotel Accra, Sun Trade
          Beads, Yfm and Mx24 Tv.
          <br />`,
  `<i style="text-decoration: underline"><b>Nhấp nhoáng</i></b> (2023) <br />
          for Đàn Bầu, electronics, voice, objects and poetry. Duration: 45'
          <br />
          a site-specific and music performance designed for Teatro San Leonardo - a Performance Art Theatre 
          by Lương Huệ Trinh and Ngô Trà My.
          <br />
          Commissioned by the 33rd AngelicA International Music festival, 
          Bologna - Italy.
          <br />`,
  `<i style="text-decoration: underline"><b>The Vivid Silences</i></b> (2022)
          <br />
          for traditional Vietnamese & Ghanaian music (acoustic, electronics),
          experimental music, traditional & contemporary African dance, spoken
          word/poetry & scenography. Duration: 70'
          <br />
          a multimedia
          and site-specific performance designed for Goethe Institut Ghana.
          <br />
          A production of Goethe Institut Ghana with support from Alliance
          Française Accra - Ghana.
          <br />`,
  `<i style="text-decoration: underline">
            <b>Music for a short film 'Yellow My Window'</i></b> by Ghanaian artist Ato
            Kwamina Hasford - Oteanankanduro
          {" "}
          (2022)
          <br />
          Duration: 11'
          <br />
          Premiered at Cité Internationale des Arts, Paris. 
          Supported by the Embassy of France to Ghana, Institut français du Ghana and Cité
          Internationale des Arts Paris.
          <br />`,
  `<i style="text-decoration: underline"><b>THE APPEAL</i></b> (2022)
          <br />
          for traditional Vietnamese & Ghanaian music (acoustic, electronics),
          experimental music, traditional & contemporary African dance, video,
          spoken word/poetry & scenography. Duration: 70'
          <br />
          an intercultural,
          intermedia and site-specific performance designed for Alliance
          Française Accra - Ghana.
          <br />
          A production of Alliance Française Accra, Ghana with support from the
          French Embassy to Ghana; Ministry of Culture, Youth & Education in
          Rhineland-Platinate in Germany; IBIS Styles Hotel Accra; Mx24 TV,
          Yfm, Wigal Ghana, and Canal+
          <br />`,
  `<i style="text-decoration: underline"><b>Chênh chếch (a step aside)</i></b> (2022) in the
          concert TÍCH TỊCH TÌNH TANG...
          <br />
          for traditional Vietnamese singing & wooden block, experimental
          voice, đàn bầu, đàn tranh, objects and electronics.
          <br />
          Poem "The Tales of Kiều" by Nguyễn Du. Duration: 15'
          <br />
          Premiered at Goethe Institut Vietnam in Hanoi.
          <br />`,
  `<i style="text-decoration: underline"><b>La lettre perdue</i></b> (2022)
          <br />
          for voice, fixed media and video. Poetry by Emmanuel Labrande.
          Duration: 8'45
          <br />
          for the 6th edition of the project Electric Voice of Nicholas Isherwood.
          <br />
          Commissioned by the Franco-American bass-baritone singer Nicholas
          Isherwood
          <br />
          World premiere tour at Theatre of University of Navarre Museum, Pamploma - Spain; 
          Conservatorio Luigi Cherubini, Florence - Italy; University of
          Washington - Seattle, California State University, Fullerton - USA;
          La Scène Numérique, Montbéliard - France.
          <br />`,
  `<i style="text-decoration: underline"><b>Thinh không (Ether)</i></b> (2021) in album
          "Strengur"
          <br />
          for electronics. Duration: 9'39
          <br />
          Commissioned by Icelandic violinist/composer Halla Steinunn
          Stefánsdóttir in Sweden with support of Ministry of Culture in
          Iceland. Releasing in New York City - USA in 2022.
          <br />`,
  `<i style="text-decoration: underline"><b>Strengur</i></b> (2021) in album "Strengur"
          <br />
          Live electronics on the score by Halla Steinunn Stefánsdóttir
          with live video "Packed Memories" by Lương Huệ Trinh. Duration: 8'16
          <br />
          Commissioned by Icelandic violinist/composer Halla Steinunn
          Stefánsdóttir with support of Ministry of Culture in Iceland.
          Releasing in New York City - USA in 2022.
          <br />`,
  `<i style="text-decoration: underline"><b>Ohn Warum</i></b> (2021)
          <br />
          for cello, voices in German and Vietnamese languages, accordion, đàn
          Bầu (Vietnamese monochord), poetry by Angelus Silesius and electronics. Duration: 9'30
          <br />
          in concert "Drifting Intervals" for five female artists from Vietnam, Germany, France,
          Switzerland & Ghana
          <br />
          Commissioned by Goethe Institut Vietnam.
          <br />
          Online performance from 4 countries and a live performance at Goethe Institut Vietnam in Hanoi.
          <br />`,
  `<i style="text-decoration: underline"><b>Heave/Phập phồng</i></b> (2021)
          <br />
          for electronics, Ewe drums, experimental voice, Ewe traditional
          singing, poetry, traditional and African contemporary dance, video and
          scenography. Duration: 55'
          <br />
          a multimedia performance designed for the space of Alliance Française Accra.
          <br />
          Commissioned by Alliance française Accra with support from Institut
          français du Ghana, the French Embassy to Ghana. 
          <br />
          Performed at the outdoor Amphitheater - Alliance Française
          Accra - Ghana.
          <br />`,
  `<i style="text-decoration: underline"><b>Transit Zone</i></b> (2020)
          <br />
          for flute, clarinet, violin, cello, piano, đàn Tranh, electronics and
          video. Duration: 17'17
          <br />
          Commissioned by Goethe Institut Vietnam for ensemble Hand Werk,
          Cologne Germany.
          <br />
          World premiere tour "Inter Konzert intermedial und interkulturell" at Alte
          Feuerwache - Cologne, Theater in Pumpenhaus - Münster,
          Bürgermeisterhaus - Essen, Germany.
          <br />`,
  `<i style="text-decoration: underline"><b>It is not raining, it is misting</i></b> (2020)
          <br />
          for piano, electronics and video. Duration: 8'35
          <br />
          Commissioned by Goethe Institut du Vietnam for ensemble Hand Werk,
          Cologne - Germany.
          <br />
          World premiere tour "Inter Konzert intermedial und interkulturell" at Alte
          Feuerwache - Cologne, Theater in Pumpenhaus - Münster,
          Bürgermeisterhaus - Essen, Germany.
          <br />`,
  `<i style="text-decoration: underline"><b>The Net of Imagination</i></b> (2019)
          <br />
          for traditional Vietnamese singing, cello, electronics and video.
          Duration: 7'00
          <br />
          Commissioned by Institut français du Vietnam - L'Espace for
          Franco-Vietnamese concert "Lettres de Hanoï" in the European Music
          festival in Vietnam.
          <br />
          Performed at Ho Chi Minh Conservatory of Music, Youth Theater of
          Vietnam - Hanoi.
          <br />`,
  `<i style="text-decoration: underline"><b>Oblique Light</i></b> (2019)
          <br />
          for traditional Vietnamese singing, percussions, cello, electronics
          and video. Duration: 9'
          <br />
          Commissioned by Institut français du Vietnam - L'Espace for
          Franco-Vietnamese concert "Lettres de Hanoï" in the European Music
          festival in Vietnam.
          <br />
          Performed at Ho Chi Minh Conservatory of Music, Youth Theater of
          Vietnam - Hanoi.
          <br />`,
  `<i style="text-decoration: underline"><b>iel</i></b> (2019)
          <br />
          for pipa, sheng, zhong ruan, guzheng, clarinet, drumset and
          electronics. Duration: 7'
          <br />
          Commissioned by the SoundBridge IV Contemporary Music festival Malaysia.
          <br />
          Performed at the SoundBridge IV Contemporary Music festival at
          Taylor University - Malaysia.
          <br />`,
  `<i style="text-decoration: underline">
            <b>How many skies and seas will have disappeared...?</i></b>
          (2019)
          <br />
          for objects, bamboo flutes, electronics and video. Duration: 7'00
          <br />
          Performed at Institut français du Vietnam - L'Espace.
          <br />`,
  `<i style="text-decoration: underline"><b>Scarlet Nails</i></b> (2019)
          <br />
          for dan Tranh, objects and fixed media. Duration: 10'
          <br />
          Commissioned by dan Tranh player Nguyễn Thanh Thủy.
          <br />
          Performed at Intonal festival Malmö - Sweden,  Manzi Art Space Hanoi -
          Vietnam, Friespel:Halo 2025 Växjö-Sweden
          <br />`,
  `<i style="text-decoration: underline"><b>Traces</i></b> (2018)
          <br />
          for two percussionists, vocal, electronics and video. Duration: 12’
          <br />
          Performed at Hamburg University of Music & Drama/Institut
          français du Vietnam - L'Espace.
          <br />`,
  `<i style="text-decoration: underline"><b>JiJi</i></b> (2018)
          <br />
          for dan Tranh, violin, cello, flute, bass clarinet, electronics and
          video. Duration: 7'
          <br />
          Performed at Hamburg University of Music & Drama - Germany; Institut
          français du Vietnam - L'Espace, Vietnam National Academy of Music,
          Goethe Institut Hanoi.
          <br />`,
  `<i style="text-decoration: underline"><b>Red Moon</i></b> (2018)
          <br />
          for a solo performer on Tam-Tam with various tools & live electronics.
          Duration: 12’
          <br />
          Performed at Hamburg University of Music & Drama - Germany, Institut
          français du Vietnam - L'Espace, Hanoi - Vietnam.
          <br />`,
  `<i style="text-decoration: underline"><b>Departure of a Leaf</i></b> (2018)
          <br />
          for violin and electronics. Duration: 8'
          <br />
          Commissioned by Icelandic violinist Halla Steinunn Stefánsdóttir.
          <br />
          Performed at Skálholt church - Iceland; Transistor Meetings
          festival - Copenhagen, SONIC festival Copenhagen - Denmark; Newcastle Summer festival - the UK; 
          Interference #7 - A laboratory for
          Artistic Research in Music at Inter Arts Center - Lund University - Malmö Sweden;
          Sibelius Museum - Finland; and releasing in New York City - USA in 2022
          <br />`,
  `<i style="text-decoration: underline"><b>Mater Materia</i></b> (2017)
          <br />
          for fixed Media for the opera “Mater Materia” by Maurice Lenhard.
          Duration: 16’
          <br />
          Commissioned by theatre director Maurice Lenhard.
          <br />
          Performed at Theater Quartier – Theaterakademie Hamburg - Germany.
          <br />`,
  `<i style="text-decoration: underline"><b>wESTAMAN PROJECT</i></b> (2017) by Bjorn Charles
          Dreyer
          <br />
          Improvised with electronics, e-guitar/electronics, drums/electronics,
          oud/violin/vocal and live video formed by Bjorn Charles Dreyer.
          Duration: 60'
          <br />
          Commissioned by wESTAMAN project.
          <br />
          World premiere tour in Kristiansand: at Vågsbygd videregående skole (music
          college), Kvadraturen videregående skole (college), Agder
          Folkehøyskole (folk university college), Tangen videregående skole
          (college); in Flekkefjord: Flekkefjord videregående skole (college) - Norway.
          <br />`,
  `<i style="text-decoration: underline"><b>Echoes - 3 scenes</i></b> (2016)
          <br />
          Fixed Media for the opera DIDO & AENEAS by Henry Purcell.
          <br />
          Commissioned by theatre director Martin Mutschler.
          <br />
          Performed at the Opera Stabile-Staatsoper Hamburg and Theater im
          Bauturm, Cologne - Germany.
          <br />`,
  `<i style="text-decoration: underline"><b>Behind The Mirror</i></b> (2016)
          <br />
          for fretless e-guitar, fixed media and video. Duration: 9’
          <br />
          Performed at Hamburg University of Music & Drama, the 42th Neue Musik festival Lüneburg, Portrait
          Concert: Luong Hue Trinh in the 43th Neue Musik festival Lüneburg,
          festival Next Generation 7.0:SENSORIK - Internationales Treffen
          Elektronischer Hochschulstudios 2017 at ZKM - Center for New Art &
          Media - Karlsruhe, Connecting Northen Dots Concert at Musikhochschule
          Bremen - Germany; Vietnamese Words and Music Concert at Inter Arts
          Center, Malmö - Sweden.
          <br />`,
  `<i style="text-decoration: underline"><b>Return II</i></b> (2016)
          <br />
          Fixed Media for the album “Illusions”. Duration: 15’
          <br />
          Published by label Pan y Rosas, Chicago - USA; in audio book “Wenjack”
          for people with disabilities, published by The National Network for
          Equitable Library Service (NNELS), Toronto - Canada.
          <br />`,
  `<i style="text-decoration: underline"><b>The Bridge 3</i></b> (2016) Soundtrack for a
          three-channel video “The Bridge 3” by Le Brothers. Duration: 12’22
          <br />
          Commissioned by Le Brothers and Goethe Instut Vietnam
          <br />
          Exhibited at Goethe Institut Vietnam; the Art Gallery of the College of Staten Island, New York - USA.
          <br />`,
  `<i style="text-decoration: underline"><b>Illusions</i></b> (2016)
          <br />
          Fixed Media & video. Duration: 13’31
          <br />
          Commissioned by JSC Film I; Vietnam Ministry of Culture, Sport and
          Tourism.
          <br />
          Performed at Vietnam Universiy of Fine Art - Hanoi; Hamburg
          University of Music & Drama, Portrait Concert: Luong, Hue Trinh in
          the 43th Neue Musik festival Lüneburg - Germany; Vietnamese Words and
          Music Concert at Inter Arts Center, Malmö - Sweden; Blurred Edges
          festival at the Hamburg University of Applied Sciences, the 13th SMC
          Conference 2016 - Sound & Music Computing Hamburg - Germany.
          <br />`,
  `<i style="text-decoration: underline"><b>Broken Legend</i></b> (2015) in collaboration
          with composer SonX.
          <br />
          Fixed media, live electronics and one percussionist. Duration: 15’52
          <br />
          Commissioned by Punkt Festival.
          <br />
          Performed at the Punkt festival at Kristiansand Kino, Kristiansand - Norway.
          <br />`,
  `<i style="text-decoration: underline"><b>Reflection</i></b> (2015)
          <br />
          for live electronics, dan tranh and guitar. Duration: 11'
          <br />
          Commisioned by DomDom Center.
          <br />
          Performed at Institut français du Vietnam.
          <br />`,
  `<i style="text-decoration: underline"><b>An Nhiên (Light-being)</i></b> (2014)
          <br />
          Soundtrack for a hand drawn animation by Nguyen Hoang Giang. Duration:
          3’22
          <br />
          Commissioned by film-maker Nguyen Hoang Giang.
          <br />
          Performed at the Mini DOCFEST 2014 at Goethe Institut Vietnam - Hanoi. Used as the soundtrack of the trailer of the festival.
          <br />`,
  `<i style="text-decoration: underline"><b>Porous Borders</i></b> (2014) in collaboration
          with composer SonX.
          <br />
          Sound installation for “The Rolving Eye Exhibition – Contemporary Art
          from South East Asia”. Duration: free
          <br />
          commissioned by curator Iola Lenzi.
          <br />
          Exhibited at the ARTER/Space for Art, Istanbul - Turkey.
          <br />`,
  `<i style="text-decoration: underline"><b>Black Moon</i></b> (2014)
          <br />
          Fixed Media for the “Asia Experimental Music Current Project - Artist of
          the Month, July”. Duration: 18'
          <br />
          Commissioned by Shanghai Rockbund Art Museum.
          <br />
          Premiered at Shanghai Rockbund Art Museum, Banye Art Hotel Hang
          zhou - China.
          <br />`,
  `<i style="text-decoration: underline"><b>Tò Vò</i></b> (2013)
          <br />
          Fixed Media. Duration: 10’
          <br />
          Premiered at Hanoi Rock City, Vietnam, in the album “Synthesis Vol. 1”
          (2014) – a compilation of sound works by female composers in the
          world, published by Urban Arts Berlin - Germany.
          <br />`,
  `<i style="text-decoration: underline"><b>Return</i></b> (2012)
          <br />
          Fixed media for exhibition “Living Jewels”, alongside with the
          installation “The Rain” by Bopha Xarigia Le Huy Hoang. Duration: 14’40
          <br />
          Commissioned by Davines Hair Company.
          <br />
          Premiered at Hanoi University of Science – Vietnam National
          University.
          <br />`,
  `<i style="text-decoration: underline"><b>Black Circle </i></b>(2011) in collaboration with
          composer SonX.
          <br />
          Fixed media & installation for exhibition “Riverscapes IN FLUX”.
          Duration: 16’
          <br />
          Commissioned by Goethe Institut Vietnam - Hanoi. 
          <br />
          Exhibitions in Vietnam Fine Arts Museum - Hanoi, Cactus Contemporary
          Art Center - Ho Chi Minh City - Vietnam; The Langgeng Art Foundation in
          Yogyakarta - Indonesia; The G23 Art Gallery in Bangkok - Thailand; The Sa
          Sa Bassac Gallery in Phnom Penh - Cambodia; The Metropolitan Museum in
          Manila - Philippines from 2011 to 2013.
          <br />`,
  `<i style="text-decoration: underline"><b>Love of a little girl </i></b>(2011)
          <br />
          for live Electronics. Duration: 15’20
          <br />
          Premiered at Hanoi Soundstuff festival - Vietnam.
          <br />`,
  `<i style="text-decoration: underline"><b>Sleep-walking </i></b>(2010)
          <br />
          for live Electronics. Duration: 21’20
          <br />
          Premiered in Hanoi Soundstuff festival - Vietnam, in an album released by Syrphe. 
          Experimental, electronic, free improv in Africa Asia Latin America.
          <br />`,
];

const Compositions = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <div className="h-fit w-full flex justify-center items-center bg-white py-8 lg:py-32 px-8 lg:px-72 flex-col">
      <ul className="text-[#777777] flex flex-col gap-8">
        {!isSeeMore &&
          compositions.slice(0, 5).map((event: any, id: number) => {
            return (
              <li
                key={id}
                className="list-disc"
                style={{
                  listStyleType: "disc",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                }}
                dangerouslySetInnerHTML={{ __html: event }}
              ></li>
            );
          })}
        {!isSeeMore && (
          <a
            className="cursor-pointer underline"
            onClick={() => setIsSeeMore(true)}
          >
            See More...
          </a>
        )}
        {isSeeMore &&
          compositions.map((event: any, id: number) => {
            return (
              <li
                key={id}
                className="list-disc"
                style={{
                  listStyleType: "disc",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                }}
                dangerouslySetInnerHTML={{ __html: event }}
              ></li>
            );
          })}
        {isSeeMore && (
          <a
            className="cursor-pointer underline"
            onClick={() => {
              setIsSeeMore(false);
            }}
            href="#compositions"
          >
            See Less...
          </a>
        )}
      </ul>
    </div>
  );
};

export default Compositions;
