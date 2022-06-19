import { Container, Stack } from "@mui/material";
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
      <Stack
        gap={7}
        flexDirection={{ xs: "column", md: "row" }}
        paddingBottom="2.1875rem"
      >
        {CATEGORIES.map((category) => (
          <CategoryLink key={category.category} category={category} />
        ))}
      </Stack>
    </Container>
  );
};

export default CategoryLinks;
