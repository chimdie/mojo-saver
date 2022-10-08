import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { joinImg, remImg, teamImg } from "../assets/";
import AuthCard from "../components/auth";

// export declare interface AuthLayoutProps {
//   children: React.ReactNode; // best, accepts everything React can render
// }

const sliderSettings = {
  autoplay: true,
  infinite: true,
  arrows: false,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 1000
};

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      as="main"
      display="grid"
      gridTemplateColumns={{
        base: "repeat(1, minmax(0, 1fr))",
        lg: "repeat(2, minmax(0, 1fr))"
      }}
      gap="4"
      height="100vh"
      className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
      style={{
        backgroundImage: "url(assets/auth_bg.png)"
      }}
      pos="relative"
      bg="rgba(0,0,0,0.1)"
      _before={{
        bg: "#244567",
        // eslint-disable-next-line quotes
        content: '""',
        // bgImage: `url(${bgImg})`,
        bgSize: "cover",
        pos: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
        // opacity: 0.9
      }}
    >
      <Box as="section">
        <Box as="section" padding="2rem">
          <Slider
            {...sliderSettings}
            className="bg-purple flex items-center justify-center h-screen"
            // bg="inherit"
          >
            <AuthCard
              img={joinImg}
              title=" New Scheduling Options And Management Options."
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, praesentium. Neque quos repellendus quibusdam recusandae porro commodi aspernatur nemo consequuntur?"
            />
            <AuthCard
              img={teamImg}
              title=" Change The Quality Of Your Life."
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, praesentium. Neque quos repellendus quibusdam recusandae porro commodi aspernatur nemo consequuntur?"
            />
            <AuthCard
              img={remImg}
              title="Your Safety And Security Is Priortized."
              description="Dockett offers a seamless service that allows users to easily take
              notes and stay organized at all times."
            />
          </Slider>
        </Box>
      </Box>
      <Box as="section" display="grid" placeItems="center" height="100vh">
        {children}
      </Box>
    </Box>
  );
}
