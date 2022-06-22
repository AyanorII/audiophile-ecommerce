import {
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import imageDesktop from "../public/assets/shared/desktop/image-best-gear.jpg";
import imageMobile from "../public/assets/shared/mobile/image-best-gear.jpg";
import imageTablet from "../public/assets/shared/tablet/image-best-gear.jpg";

type Props = {};

const AboutSection = (props: Props) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1200px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  let src: StaticImageData;
  let spacing: number;

  if (isMobile) {
    src = imageMobile;
    spacing = 3
  } else if (isTablet) {
    src = imageTablet;
    spacing = 5
  } else {
    src = imageDesktop;
    spacing = 5
  }


  return (
    <Container>
      <Grid container spacing={spacing}>
        <Grid item xs={12} lg={6}>
          <Card>
            <Image src={src} alt="Best audio gear" layout="responsive"/>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6} order={isDesktop ? -1 : 1}>
          <Stack
            gap={3}
            height="100%"
            alignItems="center"
            justifyContent="center"
            textAlign={{ xs: "center", lg: "left" }}
          >
            <Typography
              variant="h3"
              component="h3"
              textTransform="uppercase"
              fontWeight={700}
            >
              Bringing you the{" "}
              <Typography
                variant="h3"
                component="span"
                color="primary"
                display="inline-block"
                fontWeight="inherit"
              >
                Best
              </Typography>{" "}
              audio gear
            </Typography>
            <Typography variant="body1" color="GrayText">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
