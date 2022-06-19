import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Image
      src="/assets/shared/desktop/logo.svg"
      width="143"
      height="25"
      alt="audiophile"
    />
  );
};

export default Logo;
