import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { joinImg, scheduleImg, remImg } from "../assets/";
import SlideCardProps from "../components/auth";

const sliderSettings = {
  autoplay: true,
  infinite: true,
  arrows: false,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  fade: true
};

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Box as="main" className="md:grid grid-cols-2 w-full h-screen">
      <Box as="section" className="py-8">
        <Box as="section">
          <Slider {...sliderSettings}>
            <SlideCardProps
              img={remImg}
              title="New Scheduling Options And Management Options."
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, praesentium. Neque quos repellendus quibusdam recusandae porro commodi aspernatur nemo consequuntur?"
            />
            <SlideCardProps
              img={joinImg}
              title=" Change The Quality Of Your Life."
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, praesentium. Neque quos repellendus quibusdam recusandae porro commodi aspernatur nemo consequuntur?"
            />
            <SlideCardProps
              img={scheduleImg}
              title="Your Safety And Security Is Priortized."
              description="Dockett offers a seamless service that allows users to easily take
              notes and stay organized at all times."
            />
          </Slider>
        </Box>
      </Box>
      <Box as="section" display="grid" placeItems="center" bg="#0085FF">
        <Box className="py-8">
          <Box as="section" bg="#FFF" className="px-8 py-8 rounded-xl">
            <Box as="section" className="text-center flex flex-col	items-center">
              <h1 className="text-3xl font-bold">Let's Thrift Solo!</h1>
              <p className="py-4 text-xs tracking-wide">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <Box as="section" py="1rem">
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
