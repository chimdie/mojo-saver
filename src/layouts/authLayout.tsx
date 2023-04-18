import React from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Box, Text, Link } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageCompOverLay } from "./components";
import style from "./index.module.css";
import { currencies, grow, money_at_hand, atm } from "assets/auth";
import { quotes } from "utils";
import Logo from "assets/auth/logo";

const sliderSettings = {
  fade: true,
  speed: 1000,
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplaySpeed: 2000
};

export default function NewAuthLayout({
  header,
  children
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      as="main"
      display="grid"
      gridTemplateColumns={{
        base: "repeat(1, minmax(0, 1fr))",
        md: "30% 70%"
      }}
      width="100%"
      height="100vh"
    >
      <Box
        as="section"
        display="flex"
        justifyContent="center"
        width="100%"
        order={{ base: 2 }}
      >
        <Box padding={{ base: "2rem", md: "3rem", lg: "4rem" }} width="100%">
          <Box
            as="section"
            height="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <Box
              as="section"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Link as={ReactRouterLink} to="/">
                <Logo />
              </Link>

              <Box as="section" py="2rem">
                <Text fontSize="1rem" fontWeight="700" textAlign="center">
                  {header}
                </Text>
              </Box>
            </Box>
            {children}
          </Box>
        </Box>
      </Box>
      <Box
        as="section"
        display="flex"
        position="relative"
        order={{ base: 1, md: 2 }}
      >
        <Slider {...sliderSettings} className={style.sliderBox}>
          <ImageCompOverLay src={currencies} quote={quotes.quote2} />
          <ImageCompOverLay src={grow} quote={quotes.quote1} />
          <ImageCompOverLay src={money_at_hand} quote={quotes.quote3} />
          <ImageCompOverLay src={atm} quote={quotes.quote4} />
        </Slider>
      </Box>
    </Box>
  );
}
