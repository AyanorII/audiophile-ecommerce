import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import AboutSection from "../../components/AboutSection";
import QuantityButton from "../../components/Cart/QuantityButton";
import CategoryLinks from "../../components/Category/CategoryLinks";
import GoBack from "../../components/GoBack";
import FeaturesSection from "../../components/Product/FeaturesSection";
import Gallery from "../../components/Product/Gallery";
import InTheBox from "../../components/Product/InTheBox";
import Product from "../../components/Product/Product";
import Recommended from "../../components/Product/Recommended";
import data from "../../data.json";
import { getPrice } from "../../lib/helpers";
import { Product as ProductType } from "../../lib/types";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = data.map((item) => {
    const { slug } = item;

    return { params: { slug } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context!.params!.slug;

  const speaker = data.filter((item) => item.slug === slug)[0];

  return {
    props: { speaker },
  };
};

type Props = {
  speaker: ProductType;
};

const Speaker: NextPage<Props> = ({ speaker }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <Container>
      <GoBack />
      <Product product={speaker}>
        <Stack gap={4} alignItems="start">
          <Typography variant="body1" fontWeight={700}>
            {getPrice(speaker.price)}
          </Typography>
          <QuantityButton product={speaker} />
        </Stack>
      </Product>
      <Grid
        container
        justifyContent="space-between"
        width="100%"
        mt={{ xs: "0px", lg: "2.5rem" }}
        spacing={isDesktop ? 15 : 10}
      >
        <Grid item xs={12} lg={8}>
          <FeaturesSection product={speaker} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <InTheBox product={speaker} />
        </Grid>
      </Grid>
      <Gallery product={speaker} />
      <Recommended product={speaker} />
      <Box mb={{ xs: "7.5rem", lg: "10rem" }}>
        <CategoryLinks />
      </Box>
      <AboutSection />
    </Container>
  );
};

export default Speaker;
