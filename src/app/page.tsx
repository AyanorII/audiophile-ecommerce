import { CategoryCardList } from "@/Category/components";
import { Container } from "@/components";
import { About } from "@/components/About";
import { Hero } from "@/Home/components";
import { FeaturedProducts } from "@/Home/components/FeaturedProducts";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between gap-10">
			<Hero />
			<Container className="mt-10 flex flex-col gap-32 sm:mt-12 md:mt-32 lg:mt-40 lg:gap-52">
				<CategoryCardList />
				<FeaturedProducts />
				<About />
			</Container>
		</main>
	);
}
