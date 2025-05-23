import { useState } from "react";

const Media = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <div className="h-fit w-full flex justify-center items-center bg-white py-8 lg:py-32 px-8 lg:px-72 flex-col text-[#777777]">
      <ul className="flex flex-col gap-8 w-full">
      <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://genevieve-charras.blogspot.com/2025/03/camatithu-nguyen-thien-ao-ton-that-tiet.html?m=1&fbclid=IwY2xjawJGvVpleHRuA2FlbQIxMQABHZ3HuELU7PPfTtSOEhcH1eiKvQjno8l0-x7b4H4kEDcim_PU1WFRSwxbrg_aem_3akLxkhGmYPbvR4ruJtwfQ"
          >
            <b>"Camatithu" Nguyễn Thiện Đạo, Tôn Thất Tiết, Lương Huệ Trinh: un triptyque percutant qui distille la temporalité en rivière et rizière mythiques</b>
          </a>{" "}
          -  Geneviève Charras (FRE) - 2025{" "}
        </li>
      <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://thethaovanhoa.vn/cuoc-gap-go-giua-a-dao-dan-bau-va-nhac-dien-tu-20240125070333158.htm?fbclid=IwZXh0bgNhZW0CMTAAAR272FGDv-3JUwTb_vCIGuJdnlDF3IdMP556aoOaHr9lpqQMfXeCPJ89uuw_aem_IlYglqkeyxvqwGj3LYJBxg"
          >
            <b>Cuộc gặp gỡ giữa Ả Đào, đàn Bầu và nhạc điện tử</b>
          </a>{" "}
          - Thể thao Văn hóa/Culture & Sport Newspaper (VIET) - 2024{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
           <a
            className="underline cursor-pointer"
            href="https://www.youtube.com/watch?v=u-UdxSnnFjc"
          >
            <b>Video: Talk in TRAIECT IV VIETNAM Project</b>
          </a>{" "}
          - HGNM Germany (Hannoversche Gesellschaft für Neue Musik e.V./Hanover Society
          for New Music) (ENG) - 2023{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://www.youtube.com/embed/9YcZX-LJrPI"
          >
            <b>Video: Slanted Silhouettes - a site-specific multimedia project </b>
          </a>{" "}
          - Alliance Française d'Accra, Ghana (ENG) - 2023{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://artsghana.net/cross-cultural-production-charm-audience-at-goethe-institut/"
          >
            <b>Cross cultural production charm audience at Goethe-Institut</b>
          </a>{" "}
          - Artsghana (ENG) - 2022{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://www.youtube.com/embed/uBvfoYRm8Eg"
          >
            <b>Video: The Vivid Silences -a site-specific multimedia project </b>
          </a>{" "}
          - Goethe Institut Ghana (ENG) - 2022{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://vietnamnews.vn/life-style/995576/composer-travels-the-world-to-write-music.html"
          >
            <b>Composer travels the world to write music </b>
          </a>{" "}
          - Việt Nam News (ENG) - 2021{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://thethaovanhoa.vn/luong-hue-trinh-neu-khong-di-am-nhac-cua-toi-se-nham-chan-20210715081038238.htm"
          >
            <b>Lương Huệ Trinh: Nếu không đi, âm nhạc của tôi sẽ nhàm chán!</b>
          </a>{" "}
          - Thể thao Văn hóa/Culture & Sport Newspaper (VIET) - 2021{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://www.vietnamplus.vn/bat-chap-khoang-cach-nu-nghe-sy-tu-4-quoc-gia-cung-bay-tiec-am-thanh-post727060.vnp"
          >
            <b>Lương Huệ Trinh: Bất chấp khoảng cách, nữ nghệ sĩ từ 4 quốc gia cùng bày tiệc âm thanh</b>
          </a>{" "}
          - Vietnamplus Newspaper (VIET/ENG) - 2021{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://www.facebook.com/photo/?fbid=10159465697754313&set=a.10151546005599313"
          >
            <b>"Tôi thích kết hợp yếu tố hiện đại với nghệ thuật truyền thống"</b>
          </a>{" "}
          - Lao động/Labor Newspaper (VIET) - 2021{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://www.rfi.fr/vi/t%E1%BA%A1p-ch%C3%AD/t%E1%BA%A1p-ch%C3%AD-v%C4%83n-h%C3%B3a/20210505-luong-hue-trinh-am-nhac-xa-xoi-gan"
          >
            <b>Lương Huệ Trinh: Âm nhạc Xa Xôi - Âm nhạc Gần </b>
          </a>{" "}
          - RFI (Radio France Internationale) (VIET) - 2021{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://www.vietnamplus.vn/lan-dau-tien-nhac-truyen-thong-viet-nam-hoa-cung-vu-dieu-ghana-post715943.vnp"
          >
            <b>Lần đầu tiên nhạc truyền thống Việt Nam hòa quyện cùng vũ điệu Ghana </b> 
          </a>{" "}
          - Vietnamplus (VIET/ENG) - 2021{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://vietnamnews.vn/sunday/features/569873/emerging-musician-goes-her-own-way.html"
          >
            <b>Emerging musician goes her own way </b>
          </a>{" "}
          - Việt Nam News (ENG) - 2019{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://daidoanket.vn/nha-soan-nhac-luong-hue-trinh-nhac-moi-tiep-can-nguoi-nghe-theo-cach-tu-nhien-nhat-10143255.html"
          >
            <b>Nhà soạn nhạc Lương Huệ Trinh: Nhạc Mới tiếp cận người nghe theo cách tự nhiên nhất</b>
          </a>{" "}
          - Đại Đoàn Kết Newspaper (VIET) - 2019{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://www.phapfr.vn/am-nhac-nghe-thuat-bieu-dien/2019/12/05/hoa-nhac-lettres-de-ha-noi-thuong-nho-mot-thoi-xa-xua/"
          >
            <b>Hòa nhạc "Lettres de Hanoï", thương nhớ một thời xa xưa </b>
          </a>{" "}
          - Phápfr.vn / Tạp chí Thương Gia - Luxury Inside (VIET) - 2019{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://thethaovanhoa.vn/hoa-nhac-thu-ha-noi-mot-cam-thuc-xuyen-khong-day-chat-tho-20191202062200414.htm"
          >
            <b>Hòa nhạc "Thư Hà Nội" - Một cảm thức 'xuyên không' đầy chất thơ </b>
          </a>
          - Thể thao Văn hóa/Culture & Sport Newspaper (VIET) - 2019{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://www.youtube.com/watch?v=O8mPvTaqnLc&lhttps://hanoigrapevine.com/vi/2019/07/experimental-music-night-undecided-borders-venture-spheres-interacting-sound-visual/ist=PLQ9ujV_whCP1FX5tUMgrj5g_d0BxfdNgm&t=839s"
          >
            <b>Hòa nhạc thể nghiệm “Biên giới mờ”: Chuyến phiêu lưu trong những trường-tương-tác-âm-thanh-thị-giác </b>
          </a>
          - Hanoi Grapevine (VIET/ENG) - 2019{" "}
        </li>
        <li
          className="list-disc py-4"
          style={{
            listStyleType: "disc",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <a
            className="underline cursor-pointer"
            href="https://www.youtube.com/watch?v=O8mPvTaqnLc&list=PLQ9ujV_whCP1FX5tUMgrj5g_d0BxfdNgm&t=839s"
          >
            <b>Video: Culture Mosaic </b>
          </a>
          - Vietnam Television 4 - from minute 13'59 (ENG/VIET) - 2019{" "}
        </li>
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
            <li
              className="list-disc py-4"
              style={{
                listStyleType: "disc",
                paddingTop: "16px",
                paddingBottom: "16px",
              }}
            >
              <a
                className="underline cursor-pointer"
                href="https://tuoitre.vn/luong-hue-trinh-tieng-noi-nu-gioi-cua-nhac-dien-tu-20190707094313943.htm"
              >
                <b>Lương Huệ Trinh - Tiếng nói nữ giới của nhạc điện tử </b>
              </a>
              - Tuổi Trẻ/Youth Newspaper (VIET) - 2019{" "}
            </li>
            <li
              className="list-disc py-4"
              style={{
                listStyleType: "disc",
                paddingTop: "16px",
                paddingBottom: "16px",
              }}
            >
              <a
                className="underline cursor-pointer"
                href="https://tienphong.vn/luong-hue-trinh-thong-dong-loi-hep-post1112236.tpo"
              >
                <b>Lương Huệ Trinh - Thong dong lối hẹp </b>
              </a>{" "}
              - Tiền Phong Newspaper (VIET) - 2019{" "}
            </li>
            <li
              className="list-disc py-4"
              style={{
                listStyleType: "disc",
                paddingTop: "16px",
                paddingBottom: "16px",
              }}
            >
              <a
                className="underline cursor-pointer"
                href="https://hanoigrapevine.com/vi/2019/03/musical-journey-luong-hue-trinh/"
              >
                <b>The musical journey of Luong Hue Trinh / Hành trình âm nhạc của Lương Huệ Trinh </b>
              </a>{" "}
              - Hanoi Grapevine (ENG/VIET) - 2019{" "}
            </li>
            <li
              className="list-disc py-4"
              style={{
                listStyleType: "disc",
                paddingTop: "16px",
                paddingBottom: "16px",
              }}
            >
              <a
                className="underline cursor-pointer"
                href="https://ttdn.vn/hoi-nhap-quoc-te/am-nhac-viet-nam-gay-choang-ngop-tai-le-hoi-am-nhac-punkt-1271"
              >
                <b>Âm nhạc Việt Nam gây choáng ngợp tại Lễ hội âm nhạc PUNKT - Na Uy </b>
              </a>{" "}
              - Trang thông tin đối ngoại/Foreign affairs information site
              (VIET) - 2015{" "}
            </li>
            <li
              className="list-disc py-4"
              style={{
                listStyleType: "disc",
                paddingTop: "16px",
                paddingBottom: "16px",
              }}
            >
              <a
                className="underline cursor-pointer"
                href="https://andofotherthingsarchived.com/vi/2014/05/05/conversation-nguyen-xuan-son-luong-hue-trinh/"
              >
                <b>In Conversation: Nguyễn Xuân Sơn & Lương Huệ Trinh </b>
              </a>{" "}
              - And of Other Things (VIET) - 2014{" "}
            </li>
            <li
              className="list-disc py-4"
              style={{
                listStyleType: "disc",
                paddingTop: "16px",
                paddingBottom: "16px",
              }}
            >
              <a
                className="underline cursor-pointer"
                href="https://thethaovanhoa.vn/nhac-si-tre-luong-hue-trinh-than-gai-mot-minh-doc-dao-20120911082721137.htm"
              >
                <b>Nhạc sĩ trẻ Lương Huệ Trinh: Thân gái một mình độc đạo </b>
              </a>{" "}
              - Thể thao Văn hóa/Culture & Sport Newspaper (VIET) - 2012{" "}
            </li>
            <li
              className="list-disc py-4"
              style={{
                listStyleType: "disc",
                paddingTop: "16px",
                paddingBottom: "16px",
              }}
            >
              <a
                className="underline cursor-pointer"
                href="http://soi.today/?p=84183"
              >
                <b>Triển lãm 'Trang sức sống' với Đinh Công Đạt, Lê Huy Hoàng & Lương Huệ Trinh </b>
              </a>{" "}
              - SOI (VIET) - 2012{" "}
            </li>
          </>
        )}
        {isSeeMore && (
          <a
            className="cursor-pointer underline"
            onClick={() => {
              setIsSeeMore(false);
            }}
            href="#media"
          >
            See Less...
          </a>
        )}
      </ul>
    </div>
  );
};

export default Media;
