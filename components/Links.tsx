import { Stack } from "@mui/material";
import Link from "./Link";

type Props = {
  flexDirection?: "row" | "column";
  justifyContent?: "center" | "start" | "end" | "space-between" | "space-around";
};

const LINKS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/headphones",
    label: "Headphones",
  },
  {
    href: "/earphones",
    label: "Earphones",
  },
  {
    href: "/speakers",
    label: "Speakers",
  },
];

const Links = ({flexDirection, justifyContent}: Props) => {
  return (
    <Stack flexDirection={flexDirection || "row"} justifyContent={justifyContent || "start"} gap={3}>
      {LINKS.map((link) => {
        const { href, label } = link;

        return (
          <Link key={href} href={href}>
            {label}
          </Link>
        );
      })}
    </Stack>
  );
};

export default Links;
