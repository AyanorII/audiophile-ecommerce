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
