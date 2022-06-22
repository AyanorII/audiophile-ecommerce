import React from 'react'
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

  const speaker = data.filter((item) => item.slug === slug)[0];

  return {
    props: { speaker },
  };
};

type Props = {
  speaker: ProductType;
};

const Speaker: NextPage<Props> = ({ speaker }: Props) => {
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
    </Container>
  );
};

export default Speaker;
