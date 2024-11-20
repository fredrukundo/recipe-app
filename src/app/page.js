import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-yellow-300 to-orange-500">
      <h1 className="text-4xl font-bold text-white mb-6">
        Welcome to the <span className="text-yellow-200">Recipe App</span>
      </h1>
      <Link href="/recipe-list">
        <h2 className="px-6 py-3 bg-white text-green-600 font-medium rounded-lg shadow-lg hover:bg-yellow-200 hover:text-green-800 transition-all duration-300">
          Explore The Recipes
        </h2>
      </Link>
    </div>
  );
}

