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

  const earphone = data.filter((item) => item.slug === slug)[0];

  return {
    props: { earphone },
  };
};

type Props = {
  earphone: ProductType;
};

const Earphone: NextPage<Props> = ({ earphone }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <Container>
      <GoBack />
      <Product product={earphone}>
        <Stack gap={4} alignItems="start">
          <Typography variant="body1" fontWeight={700}>
            {getPrice(earphone.price)}
          </Typography>
          <QuantityButton product={earphone} />
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
          <FeaturesSection product={earphone} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <InTheBox product={earphone} />
        </Grid>
      </Grid>
      <Gallery product={earphone} />
      <Recommended product={earphone} />
      <Box mb={{xs: "7.5rem", lg: "10rem"}}>
        <CategoryLinks />
      </Box>
      <AboutSection />
    </Container>
  );
};

export default Earphone;
