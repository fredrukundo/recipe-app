import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeID){
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeID}`);
    const data = await apiResponse.json();

    return data;
  } catch (e) {
    throw new Error(e);
  }
}
export default async function RecipeDetails({params}) {
    const getRecipeDetails = await fetchRecipeDetails(params?.details);
    return (
            <RecipeDetailsItem getRecipeDetails={getRecipeDetails}/>
    );
}