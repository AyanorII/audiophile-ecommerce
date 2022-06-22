import { Stack } from "@mui/material";
import type { NextPage } from "next";
import CategoryLinks from "../components/Category/CategoryLinks";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Hero from "../components/Home/Hero";

const Home: NextPage = () => {
  return (
    <Stack gap={{xs: 10, sm: 12, md: 16}}>
      <Hero />
      <CategoryLinks />
      <FeaturedProducts />
    </Stack>
  );
};

export default Home;
