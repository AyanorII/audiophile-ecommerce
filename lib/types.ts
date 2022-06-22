export type Category = "headphones" | "earphones" | "speakers";

export type CategoryLink = {
  category: Category;
  href: string;
  image: {
    src: string,
    width: string,
    height: string,
  };
}

export type ProductImage = {
  mobile: string;
  tablet: string;
  desktop: string;
}

export type IncludedItem = {
  quantity: number;
  item: string;
}

export type OtherProduct = {
  slug: string;
  name: string;
  image: ProductImage;
}

export type Product = {
  id: number,
  slug: string,
  name: string,
  image: ProductImage,
  category: Category | string,
  new: boolean,
  price: number,
  description: string,
  features: string,
  includes: IncludedItem[],
  gallery: {
    first: ProductImage
    second: ProductImage,
    third: ProductImage,
  },
  others: OtherProduct[]
}
