import { Button, Container, Stack } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import AboutSection from "../../components/AboutSection";
import CategoryHeader from "../../components/Category/CategoryHeader";
import Product from "../../components/Product/Product";
import data from "../../data.json";
import { Product as ProductType } from "../../lib/types";

type Props = {
  headphones: ProductType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const headphones = data
    .filter((item) => item.category === "headphones")
    .reverse(); // Reverse to show the latest products first

  return {
    props: {
      headphones,
    },
  };
};

const Headphones: NextPage<Props> = ({ headphones }: Props) => {
  return (
    <>
      <CategoryHeader category="headphones" />
      <Container>
        <Stack gap={{ xs: "7.5rem", lg: "10rem" }}>
          {headphones.map((product, index) => {
            const { id, slug } = product;
            const href = `/headphones/${slug}`;

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

export default Headphones;
