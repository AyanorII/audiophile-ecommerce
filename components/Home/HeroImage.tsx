import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";

type Props = {};

const HeroImage = (props: Props) => {
  const HERO_IMAGE_SRCS = {
    MOBILE: "/assets/home/mobile/image-header.jpg",
    TABLET: "/assets/home/tablet/image-header.jpg",
    DESKTOP: "/assets/home/desktop/image-hero.jpg",
  };

  let heroImage;

  const isMobile = useMediaQuery("(max-width: 599px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1199px)");

  if (isMobile) {
    heroImage = HERO_IMAGE_SRCS.MOBILE;
  } else if (isTablet) {
    heroImage = HERO_IMAGE_SRCS.TABLET;
  } else {
    heroImage = HERO_IMAGE_SRCS.DESKTOP;
  }

  return (
    <Box
      sx={{
        "&:after": {
          content: "''",
          backgroundColor: "#00000082",
          position: "absolute",
          inset: 0,
        },
      }}
    >
      <Image
        src={heroImage}
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="hero-image"
      />
    </Box>
  );
};

export default HeroImage;
