import { Card, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { Product as ProductType } from "../../lib/types";

type Props = {
  product: ProductType;
  children: React.ReactNode;
  index?: number;
};

const Product = ({ product, index, children }: Props) => {
  const { name, image, new: isNew, description } = product;

  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1200px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  let src: string;

  if (isMobile) {
    src = image.mobile;
  } else if (isTablet) {
    src = image.tablet;
  } else {
    src = image.desktop;
  }

  const isInProductShowPage = index === undefined;
  const isIndexEven = !isInProductShowPage && index % 2 === 0;

  return (
    <Grid container spacing={isDesktop ? 7 : 4}>
      <Grid
        item
        xs={12}
        lg={6}
        order={isInProductShowPage ? -1 : isIndexEven && isDesktop ? -1 : 1}
      >
        <Card
          sx={{ position: "relative", height: { xs: "352px", lg: "560px" } }}
        >
          <Image
            src={src.slice(1)}
            layout="fill"
            alt={name}
            objectFit="cover"
          />
        </Card>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack gap={3} height="100%" justifyContent="center" alignItems="start">
          {isNew && (
            <Typography
              variant="body1"
              component="span"
              textTransform="uppercase"
              fontWeight={400}
              letterSpacing="10px"
              color="primary.main"
            >
              New product
            </Typography>
          )}
          <Typography variant="h3" component="h2" marginBottom={1}>
            {name}
          </Typography>
          <Typography variant="body1" color="GrayText">
            {description}
          </Typography>
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Product;
