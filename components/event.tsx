import { useState } from "react";

const events = [
  `<b>12.12.2025</b> at 20:00: <a style="text-decoration: underline" href=""><b>#Concert Đàn Bầu and beyond</a></b> at Anatolia, 7 Ngõ 437/2, Ngọc Thụy, Long Biên, Hà Nội, Vietnam. `,
  `<b>07.12.2025</b> at 20:30: <a style="text-decoration: underline" href=""><b>#Concert Trầm Tích / Sediment</a></b> at Polygon Musik, 29 ngách 31 ngõ 167 Tây Sơn, district Đống Đa, Hanoi, Vietnam.`,
  `<b>30.11.2025</b> at 20:00: <a style="text-decoration: underline" href="https://fb.me/e/3LrfFEGvz"><b>#Site-specific Concert Trốn Tìm / Hide & Seek</a></b> at 158/14 Nguyễn Văn Đậu, Saigon, Vietnam.`,
  `<b>28.11.2025</b> at 19:30: <a style="text-decoration: underline" href="https://fb.me/e/1Wwf77IOnp"><b>#Music & Dance Performance: Hợp Lưu / Confluence</a></b> at Black Box - Dance School, 155bis Nam Kỳ Khởi Nghĩa, district 3, Saigon, Vietnam.`,
  `<b>20.09.2025</b> at 20:00: <a style="text-decoration: underline" href=""><b>#Timeless Whispers Concert</a></b> at l'Espace Grappelli, 49 avenue de la Marne, 06100 Nice, France.`,
  `<b>01-02.07.2025</b>: <a style="text-decoration: underline" href="https://iwk.mdw.ac.at/mapper-symposium/"><b>#MAPPER – A Symposium on Music Acoustics for Performance Preparation and the Engagement with Repertoire in Live-Electronics</a></b> at Klangtheater at University of Music and Performing Arts Vienna (mdw), Austria.`,
  `<b>01.04.2025</b> at 19:30: <a style="text-decoration: underline" href="https://fb.me/e/4hCiaHo3J"><b>#Shadow of Sound: Electroacoustics and Vietnamese monochord Concert</a></b> with Ngô Trà My at Atelier 6.5, n°. 6 rue Fontaine de la Ville, 06000 Nice, France.`,
  `<b>24-29.03.2025</b>: <a style="text-decoration: underline" href="https://www.compagnie-antipodes.com/menu"><b>#Echoing Minds project - Residency for Creation & Performance</a></b> for electroacoustics, traditional Vietnamese music and traditional/contemporary African dance at Studio Antipodes, Le 109, Pôle des Cultures Contemporaines, 89 route de Turin, 06300 Nice, France.`,
  `<b>20.03.2025</b> at 19:00: <a style="text-decoration: underline" href="https://www.printempsdeshumanites.fr/fr/edition-2025-universels/jeudi-20-mars/immigrations-est-et-sud-est-asiatiques-depuis-1860%C2%A0"><b>#Zugunruhe/Migration Restlessness - Electroacoustic music & Painting performance</a></b> by ioi Choi at the Festival Printemps des Humanités - exhibition "East and Southeast Asian immigration since 1860", produced by the National Museum of the History of Immigration - Palais de la Porte Dorée, at Campus Condorcet - Centre des Colloques, Place du Front Populaire, 93300 Aubervilliers, France.`,
  `<b>06.03.2025</b> at 20:00: <a style="text-decoration: underline" href="https://www.percussionsdestrasbourg.com/date-agenda/camatithu-nguyen-thien-dao-ton-that-tiet-luong-hue-trinh/"><b>#Camatithu - Nguyễn Thiện Đạo, Tôn Thất Tiết, Lương Huệ Trinh</a></b> - commissioned and performed by Les Percussions de Strasbourg at Theatre de Hautepierre, 13 place André Maurois, 67200 Strasbourg, France.`,
  `<b>16-26.01.2025</b>: <a style="text-decoration: underline" href=""><b>#Project Medicine Man Orchestra II</a></b> - Residency for creations and recordings with Griot Séidou Barassounon and e-guitarist Justin Adams in Cotonou, Benin.`,
  `<b>17.12.2024</b> at 19:30: <a style="text-decoration: underline" href="https://fb.me/e/4hCiaHo3J"><b>#Mini Concert</a></b> at Atelier 6.5, n°. 6 rue Fontaine de la Ville, 06000 Nice, France.`,
  `<b>13.12.2024</b> at 20:00: <a style="text-decoration: underline" href="https://www.facebook.com/le109nice/posts/pfbid0R8EqEEgNebc3C6RRiHSDAxhTXcGC6WAxvLjUy8S3zUwA2JWEXb84VxEwWKcy78qfl"><b>#LES TRANSVERSALES #3</a></b> at [STUDIO ANTIPODES] - Le 109, Pôle des Cultures Contemporaines, 89 route de Turin, 06300 Nice, France.`,
  `<b>13.10.2024</b> at 19:00: <a style="text-decoration: underline" href=""><b>#Concert-Surprise</a></b> - 50th Festival Neue Musik at Orchesterstudio, Hochschule für Musik und Theater Hamburg (HfMT), Harvestehuder Weg 12, 20148 Hamburg, Germany.`,
  `<b>09.06.2024</b> at 21:00: <a style="text-decoration: underline" href="https://www.facebook.com/photo/?fbid=464322732923807&set=a.325553506800731"><b>#Gió chướng/Headwind</a></b> - Ồ Ạt Oh Art Festival 2024 at S.Pace - Sun Life, 102c Nguyễn Văn Cừ, district 1, Saigon, Vietnam.`,
  `<b>04.06.2024</b> at 19:30: <a style="text-decoration: underline" href="https://www.facebook.com/photo/?fbid=464316002924480&set=a.325553506800731"><b>#Ớiii à! - a night of music & dance</a></b> - Ồ Ạt Oh Art Festival 2024 at Amanaki Thảo Điền, fl. 2, 10 Nguyễn Đăng Giai, district 2, Saigon, Vietnam.`,
  `<b>01.06.2024</b> at 19:30: <a style="text-decoration: underline" href="https://www.facebook.com/photo/?fbid=464316919591055&set=a.325553506800731"><b>#Những thanh âm chưng cất/Distilled Sounds - a night of multimedia compositions</a></b> - Ồ Ạt Oh Art Festival 2024 at S.Pace - Sun Life, 102c Nguyễn Văn Cừ, district 1, Saigon, Vietnam.`,
  `<b>31.05.2024</b> at 19:30: <a style="text-decoration: underline" href="https://www.facebook.com/photo?fbid=464317426257671&set=a.325553506800731"><b>#Cót Két Concert</a></b> - Ồ Ạt Oh Art Festival 2024 at Amanaki Thảo Điền, fl. 2, 10 Nguyễn Đăng Giai, district 2, Saigon, Vietnam.`,
  `<b>01.04.2024</b> at 19:00: <a style="text-decoration: underline" href="https://www.facebook.com/asianartbridge/videos/897521152124674"><b>#Polar Voids exhibition</a></b> - an immersive performance of music and painting performance. An event of Asian Art Bridge at 16,17 galerie de Montpensier, Palais Royal, 75001 Paris, France.`,
  `<b>09.03.2024</b> at 20:00: <a style="text-decoration: underline""><b>#Serious Play Improv Lab (SPIL 085)/KLEX Fest</a></b> at Percussion Store, Kota Damansara, Malaysia.`,
  `<b>08.03.2024</b> at 20:00: <a style="text-decoration: underline""><b>#Album Release - Opening Performance</a></b> at Khatulistiwa 3/F, B-2-36, 13AJalan PJU 5, Cascades, Kota Damansara, Malaysia.`,
  `<b>06.03.2024</b> at 19:30: <a style="text-decoration: underline""><b>#Lương Huệ Trinh & Natalie Alexandra TSE</a></b> at ThirdSpace, 113 Depot Road #14-1023 Singapore 100113.`, 
  `<b>23.01.2024</b> at 19:30: <a style="text-decoration: underline" href="https://www.facebook.com/events/391173613410861/"><b>#TỊCH MỊCH</a></b> Concert at Manzi Art Space, 14 Phan Huy Ích, Hanoi.`,
  `<b>20.01.2024</b> at 19:30: <a style="text-decoration: underline"https://hgnm.de/traiect-iv-vietnam/"><b>#Premiere Concert of project TRAIECT IV Vietnam</a></b> at Culture & Art Center, 22 Hàng Buồm, Hanoi, Vietnam.`,
  `<b>18.01.2024</b> at 7:30 PM <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/"><b>#Premiere Concert of project TRAIECT IV Vietnam</a></b> at MoTplus, Amanaki Thảo Điền, fl 6., 10 Nguyễn Đăng Giai, Thảo Điền, Saigon, Vietnam.`,
  `<b>29.11.2023</b> at 8 PM <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/"><b>#Premiere Concert of project TRAIECT IV Vietnam</a></b> at Academy of Arts, Berlin - Germany.`,
  `<b>28.11.2023</b> at 7 PM <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/"><b>#Premiere Concert of project TRAIECT IV Vietnam</a></b> at Übersee Museum, Bremen - Germany.`,
  `<b>26.11.2023</b> at 6 PM <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/"><b>#Premiere Concert of project TRAIECT IV Vietnam</a></b> at Sprengel Museum, Hannover - Germany.`,
  `<b>24.11.2023</b> at 7:30 PM <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/"><b>#Conversations with composers of project TRAIECT IV Vietnam</a></b> at Hannover University of Music, Theater and Media (Room E45), New House 1, 30175 Hannover.`,
  `<b>13.10.2023</b> at 6 PM <a style="text-decoration: underline" href="https://iwk.mdw.ac.at/hofmann/peek-etudes/news/2023/04/04/Vienna-Workshop/"><b>#Showcase Concert of project Études for Live-Electronics</a></b> at the Future Art Lab - Klangtheater at University of Music and Performing Arts, Anton-von-Webern-Platz 1 1030 Vienna - Austria.`,
  `<b>10-12.10.2023</b> at 10 AM - 5 PM <a style="text-decoration: underline" href="https://iwk.mdw.ac.at/hofmann/peek-etudes/news/2023/04/04/Vienna-Workshop/"><b>#Workshop Live-Electronics</a></b> at University of Music and Performing Arts (mdw), Vienna - Austria.`,
  `<b>22.09.2023</b> at 7 PM <a style="text-decoration: underline" href="https://www.facebook.com/photo?fbid=1072897170715058&amp;set=pcb.1072897240715051"><b>#composition Departure of a Leaf</a></b> for violin and electronics for Halla Steinunn Stefánsdóttir will be performed at Sibelius Museum, Turku - Finland.`,
  `<b>08.08.2023</b> at 7 PM <a style="text-decoration: underline" href="https://www.facebook.com/photo/?fbid=600592735536733&amp;set=a.500080278921313"><b>#A talk: Multimedia Projects: Meet & Share</a></b> at Alliance Française Accra, Ghana.`,
  `<b>09.06.2023</b> at 7 PM <a style="text-decoration: underline" href="https://web.facebook.com/events/181801891191773?acontext=%7B%22source%22%3A%2229%22%2C%22ref_notif_type%22%3A%22plan_user_invited%22%2C%22action_history%22%3A%22null%22%7D&amp;notif_id=1686043548618768&amp;notif_t=plan_user_invited&amp;ref=notif"><b>#Concert & Conversation with Eva Zöllner, Stefan Kohmann & Dela Botri</a></b> at Goethe Institut Ghana.`,
  `<b>06.06.2023</b> at 6 PM <a style="text-decoration: underline""><b>#Meet Mohammed Alidu and Bizung School of Music and Dance</a></b> at the Wooden Restaurant, Tamale, Ghana.`,
  `<b>03.06.2023</b> at 7:30 PM <a style="text-decoration: underline" href="https://www.facebook.com/photo/?fbid=564866039109403&amp;set=a.500080278921313"><b>#SLANTED SILHOUETTES</a></b> - a multicultural, multimedia and a site-specific performance by Luong Hue Trinh with artists from Ghana, Vietnam, France, Togo, Germany & Cameroon, at Alliance Française Accra, Ghana.`,
  `<b>10.05.2023</b> at 9 PM <a style="text-decoration: underline" href="https://aaa-angelica.com/aaa/festival/angelica-33-lauren-sarah-hayes-luong-hue-trinh-ngo-tra-my/"><b>#NHẤP NHOÁNG</a></b> - a music performance by Luong Hue Trinh and Ngo Tra My at the 33rd AngelicA International Music Festival, at Teatro San Leonardo - a Performance Art Theatre at San Vitale 63 - 67, Bologna, Italy.`,
  `<b>14-21.04.2023</b> <a style="text-decoration: underline" href="https://iwk.mdw.ac.at/hofmann/peek-etudes/"><b>#Workshop of project Études for Live-Electronics</a></b> at University of Music and Performing Arts Vienna, Austria.`,
  `<b>03-05.04.2023</b> <a style="text-decoration: underline" href="https://hgnm.de/traiect-iv-vietnam/"><b>#Workshop and performance of project TRAIECT IV - Vietnam</a></b> at Hochschule für Musik Theater und Medien Hanover, Germany.`,
  `<b>26.11.2022</b> at 7:30 PM <a style="text-decoration: underline" href="https://www.facebook.com/events/1123926778327014/?ref=newsfeed"><b>#The Vivid Silences</a></b> - a multimedia and site-specific project by Luong Hue Trinh at Goethe Institut Ghana. A production of Goethe Institut Ghana with the support from Alliance Française Accra.`,
  `<b>23.10.2022</b> at 4:00 PM <a style="text-decoration: underline" href="https://www.facebook.com/events/1177999709730550?ref=newsfeed"><b>#Music for a short experimental film 'Yellow My Window'</a></b> by Ghanaian artist, Ato Kwamina Hasford - Oteanankanduro at Auditorium, Cité Internationale des Arts, Paris.`,
  `<b>26.08.2022</b> <a style="text-decoration: underline" href="https://hallasteinunn.bandcamp.com/album/strengur"><b>#'Strengur' album release</a></b> - a project of the Icelandic violinist, composer Halla Steinunn Stefánsdóttir with four international composers, released by Carriers Records, New York City - USA with the support from Ministry of Culture in Iceland.`,
  `<b>18.06.2022</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/AllianceFrancaisedAccra/photos/a.143983402374576/4739778496128354/"><b>#THE APPEAL</a></b> - an intercultural and intermedia, a site-specific project by Luong Hue Trinh, with artists from Ghana, Vietnam, Germany and France, at Alliance Française Accra - Ghana. A production of Alliance Française Accra.`,
  `<b>19.05.2022</b> at 6:00 PM: <a style="text-decoration: underline" href="https://www.murateartdistrict.it/en/electric-voice/?fbclid=IwAR05fFzl6FzkxQfi9vOeG_pKSefnLgqqECeScZfzsa3AGNGs_1YybepYCYs"><b>#THE ELECTRIC VOICE - NICHOLAS ISHERWOOD</a></b> - Music for Voice and Electro-acoustic music at MAD Murate Art District, Florence - Italy`,
  `<b>07.05.2022</b> at 7:30 PM: <a style="text-decoration: underline" href="https://music.washington.edu/events/2022-05-07/guest-artist-recital-nicholas-isherwood-bass-baritone?fbclid=IwAR3VHSaBDhx2QIVkYAHTuWeb-4PJ736HVnDLuSNdARfl8VWlAHUQZIxma_Y"><b>#THE ELECTRIC VOICE - NICHOLAS ISHERWOOD</a></b> - Music for Voice and Electro-acoustic music at Brechemin Auditorium, University of Washington, Seattle - USA`,
  `<b>30.04.2022</b> at 7:00 PM: <a style="text-decoration: underline""><b>#Société Générale Ghana Jazz Festival</a></b> - play with Abdoulaye Nderguet & theBex'Tet Jazz Band (France/Chad) at Alliance Française Accra, Ghana.`,
  `<b>20.04.2022</b> at 4:30 PM: Worldpremiere of <a style="text-decoration: underline" href="https://www.facebook.com/photo?fbid=10159960037673966&amp;set=a.120770133965"><b>#THE ELECTRIC VOICE - NICHOLAS ISHERWOOD</a></b> - Music for Voice and Electro-acoustic music at The California State University, Fullerton - USA`,
  `<b>09.04.2022</b> at 7:30 PM: Worldpremiere of <a style="text-decoration: underline" href="https://museo.unav.edu/agenda/-/events/09/04/2022/the-electric-voice/JA6fw1cTOMDY/35767801?fbclid=IwAR0gypZeKZqp1tqRPqXKEYIB91OtRzlOFrpKed2_57aXQe26LDC9tWuEsPQ"><b>#THE ELECTRIC VOICE - NICHOLAS ISHERWOOD</a></b> - Music for Voice and Electro-acoustic music at Theatre of University of Navarra Museum, Pamplona - Spain.`,
  `<b>02.04.2022</b> at 7:30 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/2154272998054200/?ref=newsfeed"><b>#TÍCH TỊCH TÌNH TANG Concert</a></b> at Goethe-Instiut Hanoi, 56-58 Nguyen Thai Hoc, Hanoi - Vietnam.`,
  `<b>06.11.2021</b> at 4:00 PM-6 PM Singapore Time: <a style="text-decoration: underline""><b>#Fusing Tradition and Innovation</a></b>, a presentation panel in the SEADOM (the Southeast Asia Directors of Music) 30 Under 30, hosted by Yong Siew Toh Conservatory of Music - National University of Singapore.`,
  `<b>17.07.2021</b> at 7:00 PM-Vietnam, 2 PM-Europe, 12 PM-Ghana: <a style="text-decoration: underline" href="https://www.facebook.com/events/947355292779971?ref=newsfeed"><b>#Drifting Intervals/Những khoảng trôi</a></b> - a network performance from Germany, France, Switzerland, Vietnam and Ghana. Live performance of Vietnamese artist with audiences at Goethe-Institut Vietnam, 56-58 Nguyễn Thái Học, Hà Nội.`,
  `<b>29.05.2021</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/307499067714217"><b>#HEAVE/Phập phồng - a multimedia project for music</a></b>, poetry, dance and video at the outdoor Amphitheater - Alliance Française, Casely Hayford Road, Airport Residential Area, Accra - Ghana.`,
  `<b>16.01.2021</b> at 12:00 PM: <a style="text-decoration: underline" href="https://www.instagram.com/if_officiel/"><b>#Online talk in Guest Lecture Series in Composers on Soundscape Composition</a></b> at Leuphana University, Lüneburg Germany.`,
  `<b>10.12.2020</b> at 6:00 PM: Online Open-Studios of <a style="text-decoration: underline" href="https://www.instagram.com/if_officiel/"><b>#Le lointain proche project</a></b> in the Réciprocité program of Villa Saigon, Institut Français du Vietnam, Institut Français Paris at Cité interantionale des arts, Paris`,
  `<b>27.09.2020</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/1996030040530009"><b>#INTER Konzert intermedial und interkulturell</a></b> with ensemble Hand werk, đàn Tranh player Nguyễn Thanh Thủy and video at Bürgemeisterhaus Essen Werden, Heckstraße 105, 45239 Essen - Germany.`,
  `<b>26.09.2020</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/684394142288505/"><b>#INTER Konzert intermedial und interkulturell</a></b> with ensemble Hand werk, đàn Tranh player Nguyễn Thanh Thủy and video at Theater in Pumpenhaus Münster, Gartenstr. 123 - Germany.`,
  `<b>25.09.2020</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/324146162052937"><b>#INTER Konzert intermedial und interkulturell</a></b> with ensemble Hand werk, đàn Tranh player Nguyễn Thanh Thủy and video at Alte Feuerwache Cologne, Melchiorstr. 3 - Germany.`,
  `<b>10.09.2020</b> at 9:00 PM–Midnight Pacific Time (UTC -7) on broadcast curated by <a style="text-decoration: underline"">Radio Eclectus on Hollow Earth Radio</a>: KHUH LP 104.9 in Central Seattle, Washington-USA, hollowearthradio.org and on demand at Mixcloud starting Friday.`,
  `<b>06.07.2020</b> at 10:00 PM BST: <a style="text-decoration: underline" href="https://resonancefm.com/schedule"><b>#Sound-art and transmission-art delivered monthly</a></b> by London sound art collective Gwaith Sŵn. To be broadcast on Resonance FM via 104.4FM in London and online at www.resonancefm.com; repeated on the following Sunday at 6AM and also simulcast on DAB+ via Resonance Extra.`,
  `<b>20.06.2020</b> at 8:00 PM: <a style="text-decoration: underline""><b>#Fête de la Musique</a></b> - a performance with Ghanaian choreographer/dancer Sena Atsugah at Alliance Française d'Accra, Ghana. LIVE STREAM on Instagram: af_accra; Facebook: Alliance Francaise d'Accra, Alliance Francaise Accra Cultural Events; Youtube: Alliance Francaise Accra.`,
  `<b>28 & 30.11.2019</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/579543092783943/"><b>#Concert Lettres de Hanoï</a></b> in European Music Festival in Vietnam on 28.11 at Ho Chi Minh Conservatory of Music/ on 30.11 at Youth Theatre of Vietnam, Hanoi.`,
  `<b>23.11.2019</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/398139147525762/"><b>#Concert 5: SoundBridge-IV</a></b> in SoundBridge Contemporary music Festival at Experimental & TV Studio, Taylor's University, Malaysia.`,
  `<b>20.09.2019</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/379041056079050/"><b>#Concert Blind Signal GRMN VTNM</a></b> at Wasserspeicher Prenzlauer Berg, Berlin-Germany.`,
  `<b>06.07.2019</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/653027985169230/"><b>#Concert Frontière Indécise/Blurred Boundary</a></b> for music and video at Institut Francais de Hanoi - L'Espace, 24 Trang Tien, Hanoi-Vietnam.`,
  `<b>27.04.2019</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/803450143345055/"><b>#Concert: Blind Signal Vietnam-Germany "Đoàn"</a></b> at Goethe-Institut Hanoi, 56-58 Nguyen Thai Hoc, Hanoi-Vietnam.`,
  `<b>26.04.2019</b> at 7:00 PM: world premiere of <a style="text-decoration: underline""><b>#'Móng Hường/Scarlet Nails'</a></b> for đàn Tranh and electronics in the Intonal Festival at Inter Arts Center, Red Room, Bergsgatan 29, 214 22 Malmö-Sweden.`,
  `<b>21.04.2019</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/2121387418162515/"><b>#Concert The Poetry of the Moon</a></b> with Hanoi New Music Ensemble and conductor Jeff Von Der Schmidt at Goethe-Institut Hanoi, 56-58 Nguyen Thai Hoc, Hanoi.`,
  `<b>20.04.2019</b> at 12:30 PM -2:30 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/694408290978166/"><b>#Workshop/Luong Hue Trinh - In the middle of borders</a></b> in Blind Signal Vietnam-Germany project at Hanoi Rock City, 27/52 To Ngoc Van, Hanoi.`,
  `<b>25-30.03.2019</b> from 9:00 AM: <a style="text-decoration: underline" href="https://music.upd.edu.ph/MCL.html?fbclid=IwAR1qRZuEwr7wYuNrr6nU6Ruh7R4uL04tucDZKWuLSyYUcnEVU_G9kQHx8c8"><b>#The 10th anniversary of Manila Composers Lab</a></b> at University of Philippines.`,
  `<b>22.03.2019</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/603802070093556/"><b>#Concert TIẾP và NỐI/On the Path of the Ancestors</a></b> - Three generations of Vietnam Contemporary music at Vietnamese National Academy of Music, 77 Hao Nam, Hanoi.`,
  `<b>16.03.2019</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/1208841429291813/"><b>#Concert VỆT/ STREAKS - Hòa nhạc đa phương tiện/Concert Multimédia</a></b>, supported by Goethe-Institut Hanoi and Institut Français de Hanoi - L'Espace at L'Espace, 24 Trang Tien, Hanoi.`,
  `<b>03.03.2019</b> at 8:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/553010875186595/"><b>#Concert Berlin-Hanoi Meeting</a></b> - Electroacoustic music from Berlin & Hanoi at Goethe-Institut Hanoi, 56-58 Nguyen Thai Hoc.`,
  `<b>23.02.2019</b> at 9:00 PM: <a style="text-decoration: underline" href="https://www.facebook.com/events/2215605261825328/"><b>#Concert Music from shy & sophisticated souls/Những âm thanh bẽn lẽn và tinh tế,</a></b> organised by Hanoi Grapevine at Hanoi Rock City 27/52 Tô Ngọc Vân, Hanoi.`,
  `<b>16-18-20.12.2018</b> at 8:00 PM: <a style="text-decoration: underline" href=""><b>#Hanoi New Music Festival</a></b>.`,
];

const Event = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <div className="w-full h-fit relative bg-white py-32 px-8 lg:px-72 gap-4 flex flex-col items-center text-[#777777]">
      <ul className="flex flex-col gap-8">
        {!isSeeMore &&
          events.slice(0, 7).map((event: any, id: number) => {
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
