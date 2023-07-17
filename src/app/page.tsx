import { CategoryCardList } from "@/Category/components";
import { Container } from "@/components";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/Home/components";
import { FeaturedProducts } from "@/Home/components/FeaturedProducts";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between gap-10">
			<Hero />
			<Container className="my-24 flex flex-col gap-32 sm:my-28 md:my-32 lg:my-52 lg:gap-52">
				<CategoryCardList />
				<FeaturedProducts />
				<About />
			</Container>
			<Footer />
		</main>
	);
}
