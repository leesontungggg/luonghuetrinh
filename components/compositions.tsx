import { useState } from "react";

const compositions = [
  `<i style="text-decoration: underline">How can I be tender ?</i> (2023) <br /> 
          for Grain~bau solo. Duration: 9'30" <br /> Premiere at Showcase Concert at
          the Future Art Lab - Klangtheater at University of Music and
          Performing Arts, Vienna - Austria.
          <br /> Commissioned for the artistic research project Études for
          Live-Electronics 2023 - 2025 by Alex Hofmann - Institut für
          Musikalische Akustik Wienner Kangstil.`,
  `<i style="text-decoration: underline">Đốm</i> (2023)
          <br />
          for two voices (traditional Vietnamese singing Ả Đào, experimental),
          Phách (wooden block), đàn Bầu, electronics, video & two performers. Duration: 10'
          <br />
          Premiere at Sprengel Museum - Hanover, Overseas Museum - Bremen,
          Academy of Arts - Berlin, Germany; 
          MotPlus - Saigon, 22 Hàng Buồm Cuture and Arts Center - Hanoi, Ồ Ạt Oh Art Festival 2024 - Saigon, Vietnam. 
          <br />
          Commissioned for project TRAIECT IV Vietnam by Hannoversche
          Gesellschaft für Neue Musik (Hanover Society for New Music) - Germany.
          <br />`,
  `<i style="text-decoration: underline">SLANTED SILHOUETTES</i> (2023) <br />
          for traditional and contemporary music & dance, electronic & acoustic
          music, spokenword poetry & acting, video & scenography. Duration: 90'
          <br />
          a multicultural, multimedia and site-specific performance designed for
          Alliance Française Accra with artists from Ghana, Vietnam, France, Togo,
          Germany & Cameroon.
          <br />
          A production of Alliance Française Accra with the support from the
          French Embassy to Ghana, Canal +, Ibis Styles Hotel Accra, Sun Trade
          Beads, Yfm and Mx24 Tv.
          <br />`,
  `<i style="text-decoration: underline">NHẤP NHOÁNG</i> (2023) <br />
          for Đàn Bầu, electronics, voice, objects and poetry. Duration: 45'
          <br />
          a site-specific and
          music performance by Luong Hue Trinh and Ngo Tra My.
          <br />
          Commissioned by the 33rd AngelicA International Music Festival, 
          Bologna - Italy.
          <br />`,
  `<i style="text-decoration: underline">The Vivid Silences</i> (2022)
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
            Music for a short film 'Yellow My Window' by Ghanaian artist Ato
            Kwamina Hasford - Oteanankanduro
          </i>{" "}
          (2022)
          <br />
          Duration: 11'
          <br />
          Premiered at Cité Internationale des Arts, Paris. 
          Supported by the Embassy of France to Ghana, Institut français du Ghana and Cité
          Internationale des Arts Paris.
          <br />`,
  `<i style="text-decoration: underline">THE APPEAL</i> (2022)
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
  `<i style="text-decoration: underline">Chênh chếch (a step aside)</i> (2022) in the
          concert TÍCH TỊCH TÌNH TANG...
          <br />
          for traditional Vietnamese singing & wooden block, experimental
          singing, đàn bầu, đàn tranh, objects and electronics.
          <br />
          Poem "The Tales of Kiều" by Nguyễn Du. Duration: 15'
          <br />
          Premiered at Goethe Institut Vietnam in Hanoi.
          <br />`,
  `<i style="text-decoration: underline">La lettre perdue</i> (2022)
          <br />
          for voice, fixed media and video. Poetry by Emmanuel Labrande.
          Duration: 8'45
          <br />
          for the 6th
          edition of the project Electric Voice of Nicholas Isherwood.
          <br />
          Commissioned by the Franco-American bass-baritone singer Nicholas
          Isherwood
          <br />
          World premieres at Conservatorio Luigi Cherubini, Florence - Italy),
          Theatre of University of Navarre Museum, Pamploma - Spain, University of
          Washington, Seattle - USA, California State University, Fullerton - USA,
          La Scène Numérique, Montbéliard - France.
          <br />`,
  `<i style="text-decoration: underline">Thinh không (Ether)</i> (2021) in album
          "Strengur"
          <br />
          for electronics. Duration: 9'39
          <br />
          Commissioned by Icelandic violinist/composer Halla Steinunn
          Stefánsdóttir in Sweden with support of Ministry of Culture in
          Iceland. Releasing in New York City - USA in 2022.
          <br />`,
  `<i style="text-decoration: underline">Strengur</i> (2021) in album "Strengur"
          <br />
          Performed electronics on the score by Halla Steinunn Stefánsdóttir
          with live video "Packed Memories" by Luong Hue Trinh. Duration: 8'16
          <br />
          Commissioned by Icelandic violinist/composer Halla Steinunn
          Stefánsdóttir with support of Ministry of Culture in Iceland.
          Releasing in New York City - USA in 2022.
          <br />`,
  `<i style="text-decoration: underline">Ohn Warum</i> (2021)
          <br />
          for cello, voices in German and Vietnamese languages, accordion, đàn
          bầu (Vietnamese monochord), poetry by Angelus Silesius and electronics. Duration: 9'30
          <br />
          in concert "Drifting Intervals" for five female artists from Vietnam, Germany, France,
          Switzerland & Ghana
          <br />
          Commissioned by Goethe Institut Vietnam.
          <br />
          Online premiered and a live performance at Goethe Institut Vietnam in Hanoi.
          <br />`,
  `<i style="text-decoration: underline">Heave/Phập phồng</i> (2021)
          <br />
          for electronics, Ewe drums, experimental voice, Ewe traditional
          singing, poetry, traditional and African contemporary dance, video and
          scenography. Duration: 55'
          <br />
          a multimedia performance designed for the space of Alliance Française Accra.
          <br />
          Commissioned by Alliance française d'Accra with support from Institut
          français du Ghana, the French Embassy to Ghana. 
          <br />
          World premiered at the outdoor Amphitheater - Alliance Française
          Accra, Ghana.
          <br />`,
  `<i style="text-decoration: underline">Transit Zone </i>(2020)
          <br />
          for flute, clarinet, violin, cello, piano, đàn Tranh, electronics and
          video. Duration: 17'17
          <br />
          Commissioned by Goethe Institut Vietnam for ensemble Hand Werk,
          Cologne Germany.
          <br />
          World premiered "Inter Konzert intermedial und interkulturell" at Alte
          Feuerwache - Cologne, Theater in Pumpenhaus - Münster,
          Bürgermeisterhaus - Essen, Germany.
          <br />`,
  `<i style="text-decoration: underline">It is not raining, it is misting</i> (2020)
          <br />
          for piano, electronics and video. Duration: 8'35
          <br />
          Commissioned by Goethe Institut du Vietnam for ensemble Hand Werk,
          Cologne - Germany.
          <br />
          World premiered "Inter Konzert intermedial und interkulturell" at Alte
          Feuerwache - Cologne, Theater in Pumpenhaus - Münster,
          Bürgermeisterhaus - Essen, Germany.
          <br />`,
  `<i style="text-decoration: underline">The Net of Imagination </i>(2019)
          <br />
          for traditional Vietnamese singing, cello, electronics and video.
          Duration: 7'00
          <br />
          Commissioned by Institut français du Vietnam - L'Espace for
          Franco-Vietnamese concert "Lettres de Hanoï" in European Music
          Festival in Vietnam.
          <br />
          Premiered at Ho Chi Minh Conservatory of Music, Youth Theater of
          Vietnam in Hanoi.
          <br />`,
  `<i style="text-decoration: underline">Oblique Light</i> (2019)
          <br />
          for traditional Vietnamese singing, percussions, cello, electronics
          and video. Duration: 9'00
          <br />
          Commissioned by Institut français du Vietnam - L'Espace for
          Franco-Vietnamese concert "Lettres de Hanoï" in European Music
          Festival in Vietnam.
          <br />
          Premiered at Ho Chi Minh Conservatory of Music, Youth Theater of
          Vietnam in Hanoi.
          <br />`,
  `<i style="text-decoration: underline">iel</i> (2019)
          <br />
          for pipa, sheng, zhong ruan, guzheng, clarinet, drumset and
          electronics. Duration: 7'00
          <br />
          Commissioned by SoundBridge IV Contemporary Music Festival Malaysia.
          <br />
          World premiered in SoundBridge IV Contemporary Music Festival at
          Taylor University - Malaysia.
          <br />`,
  `<i style="text-decoration: underline">
            How many skies and seas will have disappeared...?
          </i>
          (2019)
          <br />
          for objects, bamboo flutes, electronics and video. Duration: 7'00
          <br />
          Premiered at Institut français du Vietnam - L'Espace.
          <br />`,
  `<i style="text-decoration: underline">Scarlet Nails</i> (2019)
          <br />
          for dan Tranh, rice and electronics. Duration: 11'00
          <br />
          Commissioned by dan Tranh player Nguyen Thanh Thuy.
          <br />
          Premiered in Intonal Festival Malmö - Sweden,  Manzi Art Space Hanoi -
          Vietnam.
          <br />`,
  `<i style="text-decoration: underline">Traces</i> (2018)
          <br />
          for two percussionists, vocal, electronics and video. Duration: 12’00
          <br />
          World premiered at Hamburg University of Music & Theatre/Institut
          français du Vietnam - L'Espace.
          <br />`,
  `<i style="text-decoration: underline">JiJi</i> (2018)
          <br />
          for dan Tranh, violin, cello, flute, bass clarinet, electronics and
          video. Duration: 7'00
          <br />
          World premiered at Hamburg University of Music & Theatre, Institut
          français du Vietnam - L'Espace, Vietnam National Academy of Music - Hanoi,
          Goethe Institut Hanoi.
          <br />`,
  `<i style="text-decoration: underline">Red Moon</i> (2018)
          <br />
          for a solo performer on Tam-Tam with various tools & live electronics.
          Duration: 12’00
          <br />
          World premiered at Hamburg University of Music & Theatre, Institut
          français du Vietnam - L'Espace.
          <br />`,
  `<i style="text-decoration: underline">Departure of a Leaf</i> (2018)
          <br />
          for violin and electronics. Duration: 8'00
          <br />
          Commissioned by Icelandic violinist Halla Steinunn Stefánsdóttir.
          <br />
          World premiered at Skálholt church - Iceland; Transistor Meetings
          Festival - Copenhagen, SONIC Festival Copenhagen - Denmark; Newcastle Summer Festival - the UK; 
          Interference #7 - A laboratory for
          Artistic Research in Music at Inter Arts Center - Lund University - Malmö Sweden;
          Sibelius Museum - Finland; and releasing in New York City-USA in 2022
          <br />`,
  `<i style="text-decoration: underline">Mater Materia</i> (2017)
          <br />
          for fixed Media for the opera “Mater Materia” by Maurice Lenhard.
          Duration: 16’00
          <br />
          Commissioned by theatre director Maurice Lenhard.
          <br />
          World premiered at Theater Quartier – Theaterakademie Hamburg,
          Germany.
          <br />`,
  `<i style="text-decoration: underline">wESTAMAN PROJECT</i> (2017) by Bjorn Charles
          Dreyer
          <br />
          Improvised with electronics, e-guitar/electronics, drums/electronics,
          oud/violin/vocal and live video formed by Bjorn Charles Dreyer.
          Duration: 60'00
          <br />
          Commissioned by wESTAMAN project.
          <br />
          World premiered in Kristiansand: at Vågsbygd videregående skole (music
          college), Kvadraturen videregående skole (college), Agder
          Folkehøyskole (folk university college), Tangen videregående skole
          (college); in Flekkefjord: Flekkefjord videregående skole (college) - Norway.
          <br />`,
  `<i style="text-decoration: underline">Echoes - 3 parts</i> (2016)
          <br />
          Fixed Media for the opera DIDO & AENEAS by Henry Purcell.
          <br />
          Commissioned by theatre director Martin Mutschler.
          <br />
          World premiere at the Opera Stabile-Staatsoper Hamburg and Theater im
          Bauturm, Cologne-Germany.
          <br />`,
  `<i style="text-decoration: underline">Behind The Mirror</i> (2016)
          <br />
          for fretless e-guitar, fixed media and video. Duration: 9’00
          <br />
          World premiered at Hamburg University of Music & Theatre, Portrait
          Concert: Luong Hue Trinh in the 43th Neue Musik Festival Lüneburg,
          Festival Next Generation 7.0:SENSORIK - Internationales Treffen
          Elektronischer Hochschulstudios 2017 at ZKM - Center for New Art &
          Media - Karlsruhe, Connecting Northen Dots Concert at Musikhochschule
          Bremen - Germany, Vietnamese Words and Music Concert at Inter Arts
          Center, Malmö - Sweden, the 42th Neue Musik Festival Lüneburg, Germany.
          <br />`,
  `<i style="text-decoration: underline">Return II </i> (2016)
          <br />
          Fixed Media for the album “Illusions”. Duration: 15’00
          <br />
          Published by label Pan y Rosas, Chicago, USA/ in audio book “Wenjack”
          for people with disabilities, published by The National Network for
          Equitable Library Service (NNELS), Toronto, Canada.
          <br />`,
  `<i style="text-decoration: underline"> The Bridge 3 </i> (2016) Soundtrack for a
          three-channel video “The Bridge 3” by Le Brothers. Duration: 12’22
          <br />
          Commissioned by Le Brothers.
          <br />
          Exhibited at Goethe Institut Hanoi, Vietnam.
          <br />`,
  `<i style="text-decoration: underline">Illusions</i> (2016)
          <br />
          Fixed Media & video. Duration: 13’31
          <br />
          Commissioned by JSC Film I; Vietnam Ministry of Culture, Sport and
          Tourism.
          <br />
          World premiered at Vietnam Universiy of Fine Art - Hanoi, Hamburg
          University of Music & Theatre, Portrait Concert: Luong, Hue Trinh in
          the 43th Neue Musik Festival Lüneburg - Germany, Vietnamese Words and
          Music Concert at Inter Arts Center, Malmö - Sweden, Blurred Edges
          Festival at the Hamburg University of Applied Sciences, the 13th SMC
          Conference 2016 - Sound & Music Computing Hamburg.
          <br />`,
  `<i style="text-decoration: underline">Broken Legend </i> (2015) in collaboration
          with composer SonX.
          <br />
          Fixed media, live electronics and one percussionist. Duration: 15’52
          <br />
          Commissioned by Punkt Festival.
          <br />
          World premiered in the Punkt Festival at Kristiansand Kino, Norway.
          <br />`,
  `<i style="text-decoration: underline">Reflection</i> (2015)
          <br />
          for live electronics, dan Tranh and guitar. Duration: 11'00
          <br />
          Commisioned by DomDom Center.
          <br />
          Premiered at Institut français du Vietnam.
          <br />`,
  `<i style="text-decoration: underline">An Nhiên (Light-being)</i> (2014)
          <br />
          Soundtrack for a hand drawn animation by Nguyen Hoang Giang. Duration:
          3’22
          <br />
          Commissioned by film-maker Nguyen Hoang Giang.
          <br />
          Presented in Mini DOCFEST 2014 at Goethe Institut Hanoi, Vietnam. Also
          used as the soundtrack of the trailer of the Festival.
          <br />`,
  `<i style="text-decoration: underline">Porous Borders</i> (2014) in collaboration
          with composer SonX.
          <br />
          Sound installation for “The Rolving Eye Exhibition – Contemporary Art
          from South East Asia”. Duration: free
          <br />
          commissioned by curator Iola Lenzi.
          <br />
          Exhibited at the ARTER/Space for Art, Istanbul, Turkey.
          <br />`,
  `<i style="text-decoration: underline">Black Moon</i> (2014)
          <br />
          Fixed Media for the “Asia Experimental Music Current Project - Artist of
          the Month, July”. Duration: 18'00
          <br />
          Commissioned by Shanghai Rockbund Art Museum.
          <br />
          World premiered at Shanghai Rockbund Art Museum, Banye Art Hotel Hang
          zhou - China.
          <br />`,
  `<i style="text-decoration: underline">Tò Vò</i> (2013)
          <br />
          Fixed Media. Duration: 10’00
          <br />
          Premiered at Hanoi Rock City, Vietnam, in the album “Synthesis Vol. 1”
          (2014) – a compilation of sound works by female composers in the
          world, published by Urban Arts Berlin - Germany.
          <br />`,
  `<i style="text-decoration: underline">Return</i> (2012)
          <br />
          Fixed media for exhibition “Living Jewels”, alongside with the
          installation “The Rain” by Bopha Xarigia Le Huy Hoang. Duration: 14’40
          <br />
          Commissioned by Davines Hair Company.
          <br />
          Premiered at Hanoi University of Science – Vietnam National
          University.
          <br />`,
  `<i style="text-decoration: underline">Black Circle </i>(2011) in collaboration with
          composer SonX.
          <br />
          Fixed media & installation for exhibition “Riverscapes IN FLUX”.
          Duration: 16’00
          <br />
          Commissioned by Goethe Institut Hanoi - Vietnam.
          <br />
          Exhibitions in Vietnam Fine Arts Museum in Hanoi, Cactus Contemporary
          Art Center in Ho Chi Minh City - Vietnam, The Langgeng Art Foundation in
          Yogyakarta - Indonesia, The G23 Art Gallery in Bangkok - Thailand, The Sa
          Sa Bassac Gallery in Phnom Penh - Cambodia, The Metropolitan Museum in
          Manila - Philippines from 2011 to 2013.
          <br />`,
  `<i style="text-decoration: underline">Love of a little girl </i> (2011)
          <br />
          for live Electronics. Duration: 15’20
          <br />
          Premiered at Hanoi Soundstuff Festival.
          <br />`,
  `<i style="text-decoration: underline">Sleep-walking</i> (2010)
          <br />
          for live Electronics. Duration: 21’20
          <br />
          Premiered in Hanoi Soundstuff Festival.
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
