import { CategoryCardList } from "@/Category/components";
import { Container } from "@/components";
import { Hero } from "@/Home/components";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between gap-10">
			<Hero />
			<Container>
				<CategoryCardList className="mt-10 sm:mt-12 md:mt-32 lg:mt-40" />
			</Container>
		</main>
	);
}
