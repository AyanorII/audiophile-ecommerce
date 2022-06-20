import { Stack } from "@mui/material";
import type { NextPage } from "next";
import CategoryLinks from "../components/Category/CategoryLinks";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Hero from "../components/Home/Hero";

const Home: NextPage = () => {
  return (
    <Stack gap={{xs: 10, sm: 12, md: 16}}>
      <Hero />
      <CategoryLinks />
      <FeaturedProduct />
    </Stack>
  );
};

export default Home;
