import { useState } from "react";

const events = [
  `06.03.2025 at 20:00: <a style="text-decoration: underline" href="https://www.facebook.com/events/500249499630392?ref=newsfeed">#Camatithu - Nguyễn Thiện Đạo, Tôn Thất Tiết, Lương Huệ Trinh</a> at Theatre de Hautepierre, 13 place André Maurois, 67200 Strasbourg, France.`,
  `13.12.2024 at ...  : <a style="text-decoration: underline" href="https://www.compagnie-antipodes.com">#LES TRANSVERSALES</a> at [STUDIO ANTIPODES] - Le 109, Pôle des Cultures Contemporaines, 89 route de Turin, 06300 Nice, France.`,
  `13.10.2024 at 19:00: <a style="text-decoration: underline" href="">#Concert-Surprise in the 50th Neue Musik Festival</a> at Hochschule für Musik und Theater Hamburg (HfMT), Harvestehuder Weg 12, 20148 Hamburg, Germany.`,
  `09.06.2024 at 21:00: <a style="text-decoration: underline" href="https://www.facebook.com/photo/?fbid=464322732923807&set=a.325553506800731">#Gió chướng/Headwind</a> - Ồ Ạt Oh Art Festival 2024 at S.Pace - Sun Life, 102c Nguyễn Văn Cừ, district 1, Saigon, Vietnam.`,
  `04.06.2024 at 19:30: <a style="text-decoration: underline" href="https://www.facebook.com/photo/?fbid=464316002924480&set=a.325553506800731">#Ớiii À! - a night of music & dance</a> - Ồ Ạt Oh Art Festival 2024 at Amanaki Thảo Điền, fl. 2, 10 Nguyễn Đăng Giai, district 2, Saigon, Vietnam.`,
  `01.06.2024 at 19:30: <a style="text-decoration: underline" href="https://www.facebook.com/photo/?fbid=464316919591055&set=a.325553506800731">#Những thanh âm chưng cất/Distilled Sounds - a night of multimedia compositions</a> - Ồ Ạt Oh Art Festival 2024 at S.Pace - Sun Life, 102c Nguyễn Văn Cừ, district 1, Saigon, Vietnam.`,
  `31.05.2024 at 19:30: <a style="text-decoration: underline" href="https://www.facebook.com/photo?fbid=464317426257671&set=a.325553506800731">#Cót Két Concert</a> - Ồ Ạt Oh Art Festival 2024 at Amanaki Thảo Điền, fl. 2, 10 Nguyễn Đăng Giai, district 2, Saigon, Vietnam.`,
  `01.04.2024 at 19:00: <a style="text-decoration: underline" href="https://www.facebook.com/asianartbridge/videos/897521152124674">#Polar Voids exhibition</a> - an immersive performance of music and painting performance. An event of Asian Art Bridge at 16,17 galerie de Montpensier, Palais Royal, 75001 Paris, France.`,
  `09.03.2024 at 20:00: <a style="text-decoration: underline"">#Serious Play Improv Lab (SPIL 085)/KLEX Fest</a> at Percussion Store, Kota Damansara, Malaysia.`,
  `08.03.2024 at 20:00: <a style="text-decoration: underline"">#Album Release - Opening Performance</a> at Khatulistiwa 3/F, B-2-36, 13AJalan PJU 5, Cascades, Kota Damansara, Malaysia.`,
  `06.03.2024 at 19:30: <a style="text-decoration: underline"">#Lương Huệ Trinh & Natalie Alexandra TSE</a> at ThirdSpace, 113 Depot Road #14-1023 Singapore 100113.`,
  `23.01.2024 at 19:30: <a style="text-decoration: underline" href="https://www.facebook.com/events/391173613410861/">#TỊCH MỊCH</a> Concert at Manzi Art Space, 14 Phan Huy Ích, Hanoi.`,
  `20.01.2024 at 19:30: <a style="text-decoration: underline"https://hgnm.de/traiect-iv-vietnam/">#Premiere Concert of project TRAIECT IV Vietnam</a> at Culture & Art Center, 22 Hàng Buồm, Hanoi, Vietnam.`,
  `18.01.2024 at 7:30 PM <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/">#Premiere Concert of project TRAIECT IV Vietnam</a> at MoTplus, Amanaki Thảo Điền, fl 6., 10 Nguyễn Đăng Giai, Thảo Điền, Saigon, Vietnam.`,
  `29.11.2023 at 8 PM <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/">#Premiere Concert of project TRAIECT IV Vietnam</a> at Academy of Arts, Berlin - Germany.`,
  `28.11.2023 at 7 PM <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/">#Premiere Concert of project TRAIECT IV Vietnam</a> at Übersee Museum, Bremen - Germany.`,
  `26.11.2023 at 6 PM <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/">#Premiere Concert of project TRAIECT IV Vietnam</a> at Sprengel Museum, Hannover - Germany.`,
  `24.11.2023 at 7:30 PM <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/">#Conversations with composers of project TRAIECT IV Vietnam</a> at Hannover University of Music, Theater and Media (Room E45), New House 1, 30175 Hannover.`,
  `13.10.2023 at 6 PM <a style="text-decoration: underline" href="https://iwk.mdw.ac.at/hofmann/peek-etudes/news/2023/04/04/Vienna-Workshop/">#Showcase Concert of project Études for Live-Electronics</a> at the Future Art Lab - Klangtheater at University of Music and Performing Arts, Anton-von-Webern-Platz 1 1030 Vienna - Austria.`,
  `10-12.10.2023 at 10 AM - 5 PM <a style="text-decoration: underline" href="https://iwk.mdw.ac.at/hofmann/peek-etudes/news/2023/04/04/Vienna-Workshop/">#Workshop Live-Electronics</a> at University of Music and Performing Arts (mdw), Vienna - Austria.`,
  `22.09.2023 at 7 PM <a style="text-decoration: underline" href="https://www.facebook.com/photo?fbid=1072897170715058&amp;set=pcb.1072897240715051">#composition Departure of a Leaf</a> for violin and electronics for Halla Steinunn Stefánsdóttir will be performed at Sibelius Museum, Turku - Finland.`,
  `08.08.2023 at 7 PM <a style="text-decoration: underline" href="https://www.facebook.com/photo/?fbid=600592735536733&amp;set=a.500080278921313">#A talk: Multimedia Projects: Meet & Share</a> at Alliance Française Accra, Ghana.`,
  `09.06.2023 at 7 PM <a style="text-decoration: underline" href="https://web.facebook.com/events/181801891191773?acontext=%7B%22source%22%3A%2229%22%2C%22ref_notif_type%22%3A%22plan_user_invited%22%2C%22action_history%22%3A%22null%22%7D&amp;notif_id=1686043548618768&amp;notif_t=plan_user_invited&amp;ref=notif">#Concert & Conversation with Eva Zöllner, Stefan Kohmann & Dela Botri</a> at Goethe Institut Ghana.`,
  `06.06.2023 at 6 PM <a style="text-decoration: underline"">#Meet Mohammed Alidu and Bizung School of Music and Dance</a> at the Wooden Restaurant, Tamale, Ghana.`,
  `03.06.2023 at 7:30 PM <a style="text-decoration: underline" href="https://www.facebook.com/photo/?fbid=564866039109403&amp;set=a.500080278921313">#SLANTED SILHOUETTES</a> - a multicultural, multimedia and a site-specific performance by Luong Hue Trinh with artists from Ghana, Vietnam, France, Togo, Germany & Cameroon, at Alliance Française Accra, Ghana.`,
  `10.05.2023 at 9 PM <a style="text-decoration: underline" href="https://aaa-angelica.com/aaa/festival/angelica-33-lauren-sarah-hayes-luong-hue-trinh-ngo-tra-my/">#NHẤP NHOÁNG</a> - a performance by Luong Hue Trinh and Ngo Tra My at the 33rd AngelicA International Music Festival, at Teatro San Leonardo - a Performance Art Theatre at San Vitale 63 - 67, Bologna, Italy.`,
  `14-21.04.2023 <a style="text-decoration: underline" href="https://iwk.mdw.ac.at/hofmann/peek-etudes/">#Workshop of project Études for Live-Electronics</a> at University of Music and Performing Arts Vienna, Austria.`,
  `03-05.04.2023 <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/">#Workshop and performance of project TRAIECT IV - Vietnam</a> at Hochschule für Musik Theater und Medien Hanover, Germany.`,
  `26.11.2022 at 7:30 PM <a style="text-decoration: underline" href="https://www.facebook.com/events/1123926778327014/?ref=newsfeed">#The Vivid Silences</a> - a multimedia and site-specific project by Luong Hue Trinh at Goethe Institut Ghana. A production of Goethe Institut Ghana with the support from Alliance Française Accra.`,
  `23.10.2022 at 4:00 PM <a style="text-decoration: underline" href="https://www.facebook.com/events/1177999709730550?ref=newsfeed">#Music for a short experimental film 'Yellow My Window' by Ghanaian artist, Ato Kwamina Hasford - Oteanankanduro</a> at Auditorium, Cité Internationale des Arts, Paris.`,
  `26.08.2022 <a style="text-decoration: underline" href="https://hallasteinunn.bandcamp.com/album/strengur">#'strengur' album release</a> - a project of the Icelandic violinist, composer Halla Steinunn Stefánsdóttir with four international composers, released by Carriers Records, New York City - USA with the support from Ministry of Culture in Iceland.`,
  `18.06.2022 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/AllianceFrancaisedAccra/photos/a.143983402374576/4739778496128354/">#THE APPEAL</a> - an intercultural and intermedia, a site-specific project by Luong Hue Trinh, with artists from Ghana, Vietnam, Germany and France, at Alliance Française Accra - Ghana. A production of Alliance Française Accra.`,
  `19.05.2022 at 6:00 PM: <a style="text-decoration: underline" href="https://www.murateartdistrict.it/en/electric-voice/?fbclid=IwAR05fFzl6FzkxQfi9vOeG_pKSefnLgqqECeScZfzsa3AGNGs_1YybepYCYs">#THE ELECTRIC VOICE - NICHOLAS ISHERWOOD</a> - Music for Voice and Electro-acoustic music at MAD Murate Art District, Florence - Italy`,
  `07.05.2022 at 7:30 PM: <a style="text-decoration: underline" href="https://music.washington.edu/events/2022-05-07/guest-artist-recital-nicholas-isherwood-bass-baritone?fbclid=IwAR3VHSaBDhx2QIVkYAHTuWeb-4PJ736HVnDLuSNdARfl8VWlAHUQZIxma_Y">#THE ELECTRIC VOICE - NICHOLAS ISHERWOOD</a> - Music for Voice and Electro-acoustic music at Brechemin Auditorium, University of Washington, Seattle - USA`,
  `30.04.2022 at 7:00 PM: <a style="text-decoration: underline"">#Société Générale Ghana Jazz Festival</a> - play with Abdoulaye Nderguet & theBex'Tet Jazz Band (France/Chad) at Alliance Française Accra, Ghana.`,
  `20.04.2022 at 4:30 PM: Worldpremiere of <a style="text-decoration: underline" href="https://www.facebook.com/photo?fbid=10159960037673966&amp;set=a.120770133965">#THE ELECTRIC VOICE - NICHOLAS ISHERWOOD</a> - Music for Voice and Electro-acoustic music at The California State University, Fullerton - USA`,
  `09.04.2022 at 7:30 PM: Worldpremiere of <a style="text-decoration: underline" href="https://museo.unav.edu/agenda/-/events/09/04/2022/the-electric-voice/JA6fw1cTOMDY/35767801?fbclid=IwAR0gypZeKZqp1tqRPqXKEYIB91OtRzlOFrpKed2_57aXQe26LDC9tWuEsPQ">#THE ELECTRIC VOICE - NICHOLAS ISHERWOOD</a> - Music for Voice and Electro-acoustic music at Theatre of University of Navarra Museum, Pamplona - Spain.`,
  `02.04.2022 at 7:30 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/2154272998054200/?ref=newsfeed">#TÍCH TỊCH TÌNH TANG Concert</a> at Goethe-Instiut Hanoi, 56-58 Nguyen Thai Hov, Hanoi - Vietnam.`,
  `06.11.2021 at 4:00 PM-6 PM Singapore Time: <a style="text-decoration: underline"">#Fusing Tradition and Innovation</a>, a presentation panel in the SEADOM (the Southeast Asia Directors of Music) 30 Under 30, hosted by Yong Siew Toh Conservatory of Music - National University of Singapore.`,
  `17.07.2021 at 7:00 PM-Vietnam, 2 PM-Europe, 12 PM-Ghana: <a style="text-decoration: underline" href="https://www.facebook.com/events/947355292779971?ref=newsfeed">#Drifting Intervals/Những khoảng trôi</a> - a network performance from Germany, France, Switzerland, Vietnam and Ghana. Live performance of Vietnamese artist with audiences at Goethe-Institut Vietnam, 56-58 Nguyễn Thái Học, Hà Nội.`,
  `29.05.2021 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/307499067714217">#HEAVE/Phập phồng - a multimedia project for music</a>, poetry, dance and video at the outdoor Amphitheater - Alliance Française, Casely Hayford Road, Airport Residential Area, Accra - Ghana.`,
  `16.01.2021 at 12:00 PM: <a style="text-decoration: underline" href="https://www.instagram.com/if_officiel/">#Online talk in Guest Lecture Series in Composers on Soundscape Composition</a> at Leuphana University, Lüneburg Germany.`,
  `10.12.2020 at 6:00 PM: Online Open-Studios of <a style="text-decoration: underline" href="https://www.instagram.com/if_officiel/">#Le lointain proche project</a> in the Réciprocité program of Villa Saigon, Institut Français du Vietnam, Institut Français Paris at Cité interantionale des arts, Paris`,
  `27.09.2020 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/1996030040530009">#INTER Konzert intermedial und interkulturell</a> with ensemble Hand werk, đàn Tranh player Nguyễn Thanh Thủy and video at Bürgemeisterhaus Essen Werden, Heckstraße 105, 45239 Essen - Germany.`,
  `26.09.2020 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/684394142288505/">#INTER Konzert intermedial und interkulturell</a> with ensemble Hand werk, đàn Tranh player Nguyễn Thanh Thủy and video at Theater in Pumpenhaus Münster, Gartenstr. 123 - Germany.`,
  `25.09.2020 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/324146162052937">#INTER Konzert intermedial und interkulturell</a> with ensemble Hand werk, đàn Tranh player Nguyễn Thanh Thủy and video at Alte Feuerwache Cologne, Melchiorstr. 3 - Germany.`,
  `10.09.2020 at 9:00 PM–Midnight Pacific Time (UTC -7) on broadcast curated by <a style="text-decoration: underline"">Radio Eclectus on Hollow Earth Radio</a>: KHUH LP 104.9 in Central Seattle, Washington-USA, hollowearthradio.org and on demand at Mixcloud starting Friday.`,
  `06.07.2020 at 10:00 PM BST: <a style="text-decoration: underline" href="https://resonancefm.com/schedule">#Sound-art and transmission-art delivered monthly</a> by London sound art collective Gwaith Sŵn. To be broadcast on Resonance FM via 104.4FM in London and online at www.resonancefm.com; repeated on the following Sunday at 6AM and also simulcast on DAB+ via Resonance Extra.`,
  `20.06.2020 at 8:00 PM: <a style="text-decoration: underline"">#Fête de la Musique</a> - a performance with Ghanaian choreographer/dancer Sena Atsugah at Alliance Française d'Accra, Ghana. LIVE STREAM on Instagram: af_accra; Facebook: Alliance Francaise d'Accra, Alliance Francaise Accra Cultural Events; Youtube: Alliance Francaise Accra.`,
  `28 & 30.11.2019 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/579543092783943/">#Concert Lettres de Hanoï</a> in European Music Festival in Vietnam on 28.11 at Ho Chi Minh Conservatory of Music/ on 30.11 at Youth Theatre of Vietnam, Hanoi.`,
  `23.11.2019 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/398139147525762/">#Concert 5: SoundBridge-IV</a> in SoundBridge Contemporary music Festival at Experimental & TV Studio, Taylor's University, Malaysia.`,
  `20.09.2019 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/379041056079050/">#Concert Blind Signal GRMN VTNM</a> at Wasserspeicher Prenzlauer Berg, Berlin-Germany.`,
  `06.07.2019 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/653027985169230/">#Concert Frontière Indécise/Blurred Boundary</a> for music and video at Institut Francais de Hanoi - L'Espace, 24 Trang Tien, Hanoi-Vietnam.`,
  `27.04.2019 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/803450143345055/">#Concert: Blind Signal Vietnam-Germany "Đoàn"</a> at Goethe-Institut Hanoi, 56-58 Nguyen Thai Hoc, Hanoi-Vietnam.`,
  `26.04.2019 at 7:00 PM: world premiere of <a style="text-decoration: underline"">"Móng Hường/Scarlet Nails"</a> for đàn Tranh and electronics in the Intonal Festival at Inter Arts Center, Red Room, Bergsgatan 29, 214 22 Malmö-Sweden.`,
  `21.04.2019 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/2121387418162515/">#Concert The Poetry of the Moon</a> with Hanoi New Music Ensemble and conductor Jeff Von Der Schmidt at Goethe-Institut Hanoi, 56-58 Nguyen Thai Hoc, Hanoi.`,
  `20.04.2019 at 12:30 PM -2:30 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/694408290978166/">#Workshop/Luong Hue Trinh - In the middle of borders</a> in Blind Signal Vietnam-Germany project at Hanoi Rock City, 27/52 To Ngoc Van, Hanoi.`,
  `25-30.03.2019 from 9:00 AM: <a style="text-decoration: underline" href="https://music.upd.edu.ph/MCL.html?fbclid=IwAR1qRZuEwr7wYuNrr6nU6Ruh7R4uL04tucDZKWuLSyYUcnEVU_G9kQHx8c8">#Event the 10th anniversary of Manila Composers Lab</a> at University of Philippines.`,
  `22.03.2019 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/603802070093556/">#Concert TIẾP và NỐI/On the Path of the Ancestors</a> - Three generations of Vietnam Contemporary music at Vietnamese National Academy of Music, 77 Hao Nam, Hanoi.`,
  `16.03.2019 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/1208841429291813/">#Concert VỆT/ STREAKS - Hòa nhạc đa phương tiện/Concert Multimédia</a>, supported by Goethe-Institut Hanoi and Institut Français de Hanoi - L'Espace at L'Espace, 24 Trang Tien, Hanoi.`,
  `03.03.2019 at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/553010875186595/">#Concert Berlin-Hanoi Meeting</a> - Electroacoustic music from Berlin & Hanoi at Goethe-Institut Hanoi, 56-58 Nguyen Thai Hoc.`,
  `23.02.2019 at 9:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/2215605261825328/">#Concert Music from shy & sophisticated souls/Những âm thanh bẽn lẽn và tinh tế,</a> organised by Hanoi Grapevine at Hanoi Rock City 27/52 Tô Ngọc Vân, Hanoi.`,
];

const Event = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <div className="w-full h-fit relative bg-white py-32 px-8 lg:px-72 gap-4 flex flex-col items-center text-[#777777]">
      <ul className="flex flex-col gap-8">
        {!isSeeMore &&
          events.slice(0, 6).map((event: any, id: number) => {
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
          events.map((event: any, id: number) => {
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
            href="#events"
          >
            See Less...
          </a>
        )}
      </ul>
    </div>
  );
};

export default Event;
