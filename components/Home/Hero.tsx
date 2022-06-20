import { Button, Container, Stack, Typography } from "@mui/material";
import HeroImage from "./HeroImage";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Container>
      <HeroImage />
      <HeroContent />
    </Container>
  );
};

export default Hero;

const HeroContent = () => {
  const NAVBAR_HEIGHT = {
    xs: "89px",
    sm: "97px",
  };

  return (
    <Stack
      justifyContent="center"
      alignItems={{ xs: "center", lg: "start" }}
      minHeight={{ xs: `calc(100vh - ${NAVBAR_HEIGHT.xs})` }}
      marginTop={{ xs: NAVBAR_HEIGHT.xs, sm: NAVBAR_HEIGHT.sm }}
      textAlign={{ xs: "center", lg: "left" }}
      position="relative"
      gap={2}
    >
      <Typography
        variant="body2"
        letterSpacing="10px"
        fontWeight={400}
        textTransform="uppercase"
        sx={{ color: "gray.light", opacity: 0.5 }}
      >
        New Product
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        letterSpacing="1.3px"
        fontWeight={700}
        maxWidth={{lg: "50%"}}
        sx={{ color: "#FFF" }}
      >
        XX99 Mark II Headphones
      </Typography>
      <Typography
        variant="body1"
        letterSpacing={0.95}
        maxWidth="50ch"
        lineHeight="1.75"
        sx={{ color: "#FFFFFF90" }}
      >
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Typography>
      <Button
        href="/headphones/xx99-mark-two-headphones"
        sx={{ marginTop: { xs: 2 } }}
      >
        See product
      </Button>
    </Stack>
  );
};
