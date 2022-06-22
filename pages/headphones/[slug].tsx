import { Container, Stack, Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import QuantityButton from "../../components/Cart/QuantityButton";
import GoBack from "../../components/GoBack";
import Product from "../../components/Product/Product";
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

  const headphone = data.filter((item) => item.slug === slug)[0];

  return {
    props: { headphone },
  };
};

type Props = {
  headphone: ProductType;
};

const Headphone: NextPage<Props> = ({ headphone }: Props) => {
  return (
    <Container>
      <GoBack />
      <Product product={headphone}>
        <Stack gap={4} alignItems="start">
          <Typography variant="body1" fontWeight={700}>
            {getPrice(headphone.price)}
          </Typography>
          <QuantityButton product={headphone} />
        </Stack>
      </Product>
    </Container>
  );
};

export default Headphone;
