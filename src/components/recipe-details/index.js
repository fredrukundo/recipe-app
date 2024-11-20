import Link from "next/link";


export default function RecipeDetailsItem({ getRecipeDetails }) {
    return (
        <div>
             <div className="pt-6 px-4 mx-auto">
                <Link href="/recipe-list" >
                <h2 className="inline-block px-4 py-2 bg-blue-500 text-sm text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
                    Back to recipe List
                </h2>
                </Link>
                </div>
            <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="w-full lg:sticky top-0 sm:flex gap-2">
                        <img
                            src={getRecipeDetails?.image}
                            alt={getRecipeDetails?.name}
                            className="w-4/5 rounded object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-950">
                            {getRecipeDetails?.name}
                        </h2>
                        <div className="gape-4 mt-5">
                            <p className="text-2xl text-gray-700">
                                {getRecipeDetails?.mealType}
                            </p>
                        </div>
                        <div className="mt-5">
                            <p className="text-xl text-gray-800">
                                {getRecipeDetails?.cuisine}
                            </p>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                                {getRecipeDetails?.ingredients.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}