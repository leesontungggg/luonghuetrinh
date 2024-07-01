import { useState } from "react";

const Interview = () => {
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
            href="https://www.youtube.com/watch?v=u-UdxSnnFjc"
          >
            Traiect Talk in TRAIECT IV VIETNAM Project at HGNM
          </a>{" "}
          - HGNM (Hannoversche Gesellschaft für Neue Musik e.V./Hanover Society
          for New Music) (ENG){" "}
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
            Composer travels the world to write music
          </a>{" "}
          - Việt Nam News (ENG){" "}
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
            Lương Huệ Trinh: Nếu không đi, âm nhạc của tôi sẽ nhàm chán!
          </a>{" "}
          - Thể thao Văn hóa/Culture & Sport Newspaper (VIET){" "}
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
            Lương Huệ Trinh: Bất chấp khoảng cách, nữ nghệ sĩ từ 4 quốc gia cùng
            bày tiệc âm thanh
          </a>{" "}
          - Vietnamplus Newspaper (VIET/ENG){" "}
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
            "Tôi thích kết hợp yếu tố hiện đại với nghệ thuật truyền thống"
          </a>{" "}
          - Lao động/Labor Newspaper (VIET){" "}
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
            Lương Huệ Trinh: Âm nhạc Xa Xôi - Âm nhac Gần
          </a>{" "}
          - RFI - Radio France Internationale (VIET){" "}
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
            Lần đầu tiên nhạc truyền thống Việt Nam hòa quyện cùng vũ điệu Ghana
          </a>{" "}
          - Vietnamplus (VIET/ENG){" "}
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
            Emerging musician goes her own way
          </a>{" "}
          - Việt Nam News (ENG){" "}
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
            Nhà soạn nhạc Lương Huệ Trinh: Nhạc Mới tiếp cận người nghe theo
            cách tự nhiên nhất
          </a>{" "}
          - Đại Đoàn Kết Newspaper (VIET){" "}
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
            Hòa nhạc "Lettres de Hanoï", thương nhớ một thời xa xưa
          </a>{" "}
          - Phápfr.vn / Tạp chí Thương Gia - Luxury Inside (VIET){" "}
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
            Hòa nhạc "Thư Hà Nội" - Một cảm thức 'xuyên không' đầy chất thơ
          </a>
          - Thể thao Văn hóa/Culture & Sport Newspaper (VIET){" "}
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
            Hòa nhạc thể nghiệm “Biên giới mờ”: Chuyến phiêu lưu trong những
            trường-tương-tác-âm-thanh-thị-giác
          </a>
          - Hanoi Grapevine (VIET/ENG){" "}
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
            Culture Mosaic
          </a>
          - Vietnam Television 4 - from minute 13'59 (ENG/VIET){" "}
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
                Lương Huệ Trinh - Tiếng nói nữ giới của nhạc điện tử
              </a>
              - Tuổi Trẻ/Youth Newspaper (VIET){" "}
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
                Lương Huệ Trinh - Thong dong lối hẹp
              </a>{" "}
              - Tiền Phong Newspaper (VIET){" "}
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
                The musical journey of Luong Hue Trinh / Hành trình âm nhạc của
                Lương Huệ Trinh
              </a>{" "}
              - Hanoi Grapevine (ENG/VIET){" "}
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
                Âm nhạc Việt Nam gây choáng ngợp tại Lễ hội âm nhạc PUNKT - Na
                Uy
              </a>{" "}
              - Trang thông tin đối ngoại/Foreign affairs information site
              (VIET){" "}
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
                In Conversation: Nguyễn Xuân Sơn & Lương Huệ Trinh
              </a>{" "}
              - And of Other Things (VIET){" "}
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
                Nhạc sĩ trẻ Lương Huệ Trinh: Thân gái một mình độc đạo
              </a>{" "}
              - Thể thao Văn hóa/Culture & Sport Newspaper (VIET){" "}
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
                Triển lãm 'Trang sức sống' với Đinh Công Đạt, Lê Huy Hoàng &
                Lương Huệ Trinh
              </a>{" "}
              - SOI (VIET)
            </li>
          </>
        )}
        {isSeeMore && (
          <a
            className="cursor-pointer underline"
            onClick={() => {
              setIsSeeMore(false);
            }}
            href="#interviews"
          >
            See Less...
          </a>
        )}
      </ul>
    </div>
  );
};

export default Interview;
