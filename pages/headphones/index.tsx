import { Button, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import AboutSection from "../../components/AboutSection";
import CategoryHeader from "../../components/Category/CategoryHeader";
import Product from "../../components/Product/Product";
import data from "../../data.json";

type Props = {};

const Headphones: NextPage = (props: Props) => {
  const headphones = data.filter((item) => item.category === "headphones");

  return (
    <>
      <CategoryHeader category="headphones" />
      <Container>
        <Stack gap={{xs: "7.5rem", lg: "10rem"}}>
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
