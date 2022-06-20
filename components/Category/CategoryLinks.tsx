import { Container, Grid, useMediaQuery } from "@mui/material";
import { CategoryLink as CategoryLinkType } from "../../lib/types";
import CategoryLink from "./CategoryLink";

type Props = {};


const CategoryLinks = (props: Props) => {
  const isTablet = useMediaQuery("(min-width: 900px)");

  const CATEGORIES: CategoryLinkType[] = [
    {
      category: "headphones",
      href: "/headphones",
      image: {
        src: "/assets/shared/desktop/image-headphones.png",
        width: isTablet ? "190px" : "120px",
        height: isTablet ? "174px" : "104px",
      },
    },
    {
      category: "speakers",
      href: "/speakers",
      image: {
        src: "/assets/shared/desktop/image-speakers.png",
        width: isTablet ? "180px" : "100px",
        height: isTablet ? "171px" : "101px",
      },
    },
    {
      category: "earphones",
      href: "/earphones",
      image: {
        src: "/assets/shared/desktop/image-earphones.png",
        width: isTablet ? "200px" : "120px",
        height: isTablet ? "174px" : "104px",
      },
    },
  ];
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 7, sm: 3}}
      >
        {CATEGORIES.map((category) => (
          <Grid item key={category.category} xs={12} sm={4}>
            <CategoryLink category={category} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryLinks;
