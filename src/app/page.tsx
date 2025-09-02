import { ProductList, UserProfile, Button } from "@/components";

export default function Home() {
  return (
    <div className="w-full">
      <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 md:py-24">
        <div className="text-center max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow">
            Welcome to DazaCramp
          </h1>
          <p className="text-lg md:text-2xl mb-8 opacity-90">
            Discover amazing products at unbeatable prices
          </p>
          <Button className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-s">
            Shop Now
          </Button>
        </div>
      </section>

      <section className="bg-white shadow-sm rounded-lg -mt-12 relative z-10 max-w-6xl mx-auto px-6 py-8 mb-16">
        <UserProfile />
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <ProductList />
      </section>
    </div>
  );
}
