import { Button, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import AboutSection from "../../components/AboutSection";
import CategoryHeader from "../../components/Category/CategoryHeader";
import Product from "../../components/Product/Product";
import data from "../../data.json";

type Props = {};

const Speakers: NextPage = (props: Props) => {
  const speakers = data.filter((item) => item.category === "speakers");

  return (
    <>
      <CategoryHeader category="speakers" />
      <Container>
        <Stack gap={{ xs: "7.5rem", lg: "10rem" }}>
          {speakers.map((product, index) => {
            const { id, slug } = product;
            const href = `/speakers/${slug}`;

            return (
              <Product key={id} product={product} index={index}>
                <Button variant="contained" href={href}>
                  See product
                </Button>
              </Product>
            );
          })}
          <AboutSection />
        </Stack>
      </Container>
    </>
  );
};

export default Speakers;
