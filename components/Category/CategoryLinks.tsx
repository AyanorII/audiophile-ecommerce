import { Container, Grid } from "@mui/material";
import { CategoryLink as CategoryLinkType } from "../../lib/types";
import CategoryLink from "./CategoryLink";

type Props = {};

const CATEGORIES: CategoryLinkType[] = [
  {
    category: "headphones",
    href: "/headphones",
    image: {
      src: "/assets/shared/desktop/image-headphones.png",
      width: "100px",
      height: "104px",
    },
  },
  {
    category: "speakers",
    href: "/speakers",
    image: {
      src: "/assets/shared/desktop/image-speakers.png",
      width: "100px",
      height: "101px",
    },
  },
  {
    category: "earphones",
    href: "/earphones",
    image: {
      src: "/assets/shared/desktop/image-earphones.png",
      width: "120px",
      height: "104px",
    },
  },
];

const CategoryLinks = (props: Props) => {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 7, sm: 3}}
        paddingBottom="2.1875rem"
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
