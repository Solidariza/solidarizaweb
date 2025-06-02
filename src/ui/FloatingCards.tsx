"use client";
import { recipes } from "@/data";
import { NavigationButton, PaginationButtons, RecipeCard } from "@/ui";
import { useState } from "react";

const FloatingCards = () => {
  const totalRecipes = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecipe = currentPage * totalRecipes;
  const indexOfFirstRecipe = indexOfLastRecipe - totalRecipes;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div className="flex flex-col w-auto h-auto justify-center items-center px-10">
      <div className="flex w-auto h-auto relative justify-between items-center gap-3">
        <NavigationButton
          direction="prev"
          setActiveIndex={setCurrentPage}
          length={Math.ceil(recipes.length / totalRecipes)}
        />
        {currentRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
        <NavigationButton
          direction="next"
          setActiveIndex={setCurrentPage}
          length={Math.ceil(recipes.length / totalRecipes)}
        />
      </div>
      <PaginationButtons
        currentPage={currentPage}
        totalPages={Math.ceil(recipes.length / totalRecipes)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default FloatingCards;
