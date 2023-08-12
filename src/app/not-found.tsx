import { CategoryCardList } from "@/Category/components";
import { Button, PageContainer } from "@/components";

const CategoryNotFound = () => {
	return (
		<PageContainer className="mt-[120px] min-h-[40vh] justify-end text-center">
			<div>
				<h1 className="text-9xl font-bold text-primary-main lg:text-[200px]">
					404
					<span className="block text-4xl text-gray-800">Page not found</span>
				</h1>
				<div>
					<h2 className="mx-auto mt-14 max-w-[50ch] text-lg font-semibold text-gray-600">
						The page you&apos;re looking for can&apos;t be found, but our
						passion for premium audio never misses a beat. Head back and
						continue your audio journey.
					</h2>
					<Button as="link" href="/" className="mt-6">
						Back to home
					</Button>
				</div>
			</div>
			<CategoryCardList />
		</PageContainer>
	);
};

export default CategoryNotFound;
