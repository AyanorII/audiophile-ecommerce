import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {};

const FeaturedProduct = (props: Props) => {
  const productImageMap = {
    mobile: {
      src: "/assets/home/mobile/image-speaker-zx9.png",
      width: "172px",
      height: "207px",
    },
    tablet: {
      src: "/assets/home/tablet/image-speaker-zx9.png",
      width: "197px",
      height: "237px",
    },
    desktop: {
      src: "/assets/home/desktop/image-speaker-zx9.png",
      width: "410px",
      height: "493px",
    },
  };

  const [productImage, setProductImage] = useState(productImageMap.mobile);

  const isMobile = useMediaQuery("(max-width: 900px)");
  const isTablet = useMediaQuery("(min-width: 900px) and (max-width: 1200px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  useEffect(() => {
    if (isMobile) {
      setProductImage(productImageMap.mobile);
    } else if (isTablet) {
      setProductImage(productImageMap.tablet);
    } else {
      setProductImage(productImageMap.desktop);
    }
  }, [isMobile, isTablet, isDesktop]);

  const { src, width, height } = productImage;

  return (
    <Container>
      <Card
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <Stack
          flexDirection={{ lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          sx={{
            paddingBlock: { xs: "3.4375rem 5rem", lg: "3.4375rem 0" },
            backgroundImage: "url('/assets/home/desktop/pattern-circles.svg')",
            backgroundPosition: {
              xs: "center top",
              sm: "center 100%",
              lg: "-100px 0",
            },
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box position="relative" left={{lg: "13%"}} bottom={{lg: "-24px"}}>
            <Image src={src} width={width} height={height} alt="zx9 speaker" />
          </Box>
          <HeroContent />
        </Stack>
      </Card>
    </Container>
  );
};

export default FeaturedProduct;

const HeroContent = () => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems={{ xs: "center", lg: "flex-start" }}
      gap={3}
      sx={{
        textAlign: { xs: "center", lg: "left" },
      }}
    >
      <Typography variant="h3" color="#FFFFFF">
        zx9 {<br />} speaker
      </Typography>
      <Typography
        variant="body1"
        color="#ece9e9"
        lineHeight="25px"
        maxWidth="50ch"
      >
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </Typography>
      <Button
        href="/speakers/zx9-speaker"
        sx={{
          backgroundColor: "gray.dark",
          color: "#FFF",
          "&:hover": {
            backgroundColor: "gray.main",
            color: "gray.dark",
          },
        }}
      >
        see product
      </Button>
    </Stack>
  );
};
