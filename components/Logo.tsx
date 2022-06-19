import MuiLink from "@mui/material/Link";
import Image from "next/image";
import NextLink from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <NextLink href="/" passHref>
      <MuiLink sx={{cursor: "pointer"}}>
        <Image
          src="/assets/shared/desktop/logo.svg"
          width="143"
          height="25"
          alt="audiophile"
        />
      </MuiLink>
    </NextLink>
  );
};

export default Logo;
