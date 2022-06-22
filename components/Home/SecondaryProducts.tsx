import {
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import bottomDesktopImage from "../../public/assets/home/desktop/image-earphones-yx1.jpg";
import topDesktopImage from "../../public/assets/home/desktop/image-speaker-zx7.jpg";
import bottomMobileImage from "../../public/assets/home/mobile/image-earphones-yx1.jpg";
import topMobileImage from "../../public/assets/home/mobile/image-speaker-zx7.jpg";
import bottomTabletImage from "../../public/assets/home/tablet/image-earphones-yx1.jpg";
import topTabletImage from "../../public/assets/home/tablet/image-speaker-zx7.jpg";

type Props = {
  src: StaticImageData;
};

const TopProduct = ({ src }: Props) => {
  return (
    <Paper sx={{ position: "relative", overflow: "hidden", height: "320px" }}>
      <Image
        src={src}
        layout="fill"
        objectPosition="center"
        objectFit="cover"
        alt="Speaker ZX7"
        priority
      />
      <Container maxWidth="md" sx={{ height: "100%" }}>
        <Stack
          position="relative"
          alignItems="start"
          justifyContent="center"
          gap={2}
          sx={{ height: "100%" }}
        >
          <Typography variant="h4" component="h2" sx={{ color: "gray.dark" }}>
            ZX7 Speaker
          </Typography>
          <Button variant="outlined" color="gray" href="/speakers/zx7-speaker">
            See product
          </Button>
        </Stack>
      </Container>
    </Paper>
  );
};

const BottomProduct = ({ src }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <Grid container spacing={isDesktop ? 4 : 2}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <Image
            src={src}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Earphones YX1"
            priority
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          sx={{
            position: "relative",
            height: { xs: "200px", sm: "320px" },
            backgroundColor: "gray.main",
          }}
        >
          <Container maxWidth="sm" sx={{ height: "100%" }}>
            <Stack alignItems="start" justifyContent="center" height="100%" paddingLeft={2}>
              <Typography variant="h4" component="h2" sx={{ color: "gray" }}>
                YX1 Earphones
              </Typography>
              <Button variant="outlined" href="/earphones/yx1-earphones">
                see product
              </Button>
            </Stack>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};

const SecondaryProducts = () => {
  const images = {
    top: topMobileImage,
    bottom: bottomMobileImage,
  };

  const isMobile = useMediaQuery("(max-width: 900px)");
  const isTablet = useMediaQuery("(min-width: 900px) and (max-width: 1200px)");

  if (isMobile) {
    images.top = topMobileImage;
    images.bottom = bottomMobileImage;
  } else if (isTablet) {
    images.top = topTabletImage;
    images.bottom = bottomTabletImage;
  } else {
    images.top = topDesktopImage;
    images.bottom = bottomDesktopImage;
  }

  return (
    <Container>
      <Stack gap={3}>
        <TopProduct src={images.top} />
        <BottomProduct src={images.bottom} />
      </Stack>
    </Container>
  );
};

export default SecondaryProducts;
